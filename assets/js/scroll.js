(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function norm(p) { return p.replace(/index\.html$/, ''); }
  function ease(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
  function go(y, d, done) {
    var s = window.pageYOffset, dist = y - s, t0 = null;
    function step(t) {
      if (t0 === null) t0 = t;
      var p = Math.min((t - t0) / d, 1);
      window.scrollTo(0, s + dist * ease(p));
      if (p < 1) requestAnimationFrame(step); else if (done) done();
    }
    requestAnimationFrame(step);
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href*="#"]');
    if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || a.target === '_blank') return;
    var u = new URL(a.href, location.href);
    if (u.origin !== location.origin || norm(u.pathname) !== norm(location.pathname) || u.hash.length < 2) return;
    var el = document.getElementById(decodeURIComponent(u.hash.slice(1)));
    if (!el) return;
    e.preventDefault();
    var top = el.getBoundingClientRect().top + window.pageYOffset - 14;
    if (reduce) { window.scrollTo(0, top); history.pushState(null, '', u.hash); return; }
    var d = Math.min(1500, Math.max(800, Math.abs(top - window.pageYOffset) * 0.7));
    go(top, d, function () { history.pushState(null, '', u.hash); });
  });
})();
