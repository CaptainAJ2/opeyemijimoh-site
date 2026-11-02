(function () {
  var P = (window.PROJECTS || []).slice();
  P.sort(function (a, b) { return (b.end || '').localeCompare(a.end || '') || (b.start || '').localeCompare(a.start || ''); });
  var C = ['--o', '--l', '--p', '--pe', '--b', '--r'], h = '', rail = '';
  P.forEach(function (p, i) {
    var chips = (p.tags || []).map(function (t) { return '<span>' + t + '</span>'; }).join('');
    rail += '<a href="#p-' + p.slug + '" style="--c:var(' + C[i % 6] + ')"><span>' + (p.end || '').slice(0, 4) + '</span>' + p.title + '</a>';
    h += '<article class="row" id="p-' + p.slug + '" style="--c:var(' + C[i % 6] + ')"><a class="shot" href="' + p.slug + '.html"><span>' + p.image + '</span><img src="' + p.image + '" alt="' + p.title + '" onload="this.parentNode.style.setProperty(\'--ar\',Math.min(2.1,Math.max(0.8,this.naturalWidth/this.naturalHeight)))" onerror="this.remove()"></a><div><p class="num">' + p.label + '</p><h3>' + p.title + '</h3><p>' + p.summary + '</p><div class="chips">' + chips + '</div><a class="btn" href="' + p.slug + '.html">Open project</a></div></article>';
  });
  document.getElementById('project-list').innerHTML = h;
  var r = document.getElementById('rail'); if (r) r.innerHTML = rail;
})();
