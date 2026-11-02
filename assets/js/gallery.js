(function () {
  var P = window.PHOTOS || [], root = document.getElementById('viewer');
  if (!root || !P.length) return;
  var C = ['--o', '--l', '--p', '--pe', '--b', '--r'], cur = 0, timer = null, dir = 'images/photography/';
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  root.innerHTML = '<div class="vw-main"><div class="vw-screen" id="vw-screen"><span class="vw-ph" id="vw-ph"></span><img id="vw-img" alt=""></div>' +
    '<div class="vw-read"><b id="vw-count"></b><span id="vw-title"></span></div>' +
    '<div class="vw-ctl"><button type="button" id="vw-prev">Prev</button><button type="button" id="vw-next">Next</button><button type="button" id="vw-scan">Scan</button><button type="button" id="vw-full">Full screen</button></div></div>' +
    '<div class="vw-grid" id="vw-grid"></div>';
  var g = document.getElementById('vw-grid'), img = document.getElementById('vw-img'), scr = document.getElementById('vw-screen');
  P.forEach(function (p, i) {
    var b = document.createElement('button');
    b.type = 'button'; b.style.setProperty('--c', 'var(' + C[i % 6] + ')'); b.setAttribute('aria-label', 'Photo ' + (i + 1));
    b.innerHTML = '<img src="' + dir + p.file + '" alt="" loading="lazy" onerror="this.remove()"><span>' + pad(i + 1) + '</span>';
    b.onclick = function () { show(i); stop(); };
    g.appendChild(b);
  });
  function show(i) {
    cur = (i + P.length) % P.length;
    var p = P[cur], c = 'var(' + C[cur % 6] + ')';
    var ph = document.getElementById('vw-ph'); ph.style.display = ''; img.style.display = 'none';
    img.onload = function () { img.style.display = ''; ph.style.display = 'none'; };
    img.onerror = function () { img.style.display = 'none'; ph.style.display = ''; };
    img.src = dir + p.file; img.alt = p.title || 'Photograph ' + (cur + 1);
    document.getElementById('vw-ph').textContent = dir + p.file;
    document.getElementById('vw-count').textContent = 'Image ' + pad(cur + 1) + ' / ' + pad(P.length);
    document.getElementById('vw-title').textContent = [p.title, p.place].filter(Boolean).join('  |  ');
    root.style.setProperty('--c', c);
    Array.prototype.forEach.call(g.children, function (b, k) { b.setAttribute('aria-current', k === cur ? 'true' : 'false'); });
  }
  function stop() { if (timer) { clearInterval(timer); timer = null; document.getElementById('vw-scan').textContent = 'Scan'; } }
  document.getElementById('vw-prev').onclick = function () { show(cur - 1); stop(); };
  document.getElementById('vw-next').onclick = function () { show(cur + 1); stop(); };
  document.getElementById('vw-scan').onclick = function () {
    if (timer) { stop(); return; }
    this.textContent = 'Stop'; timer = setInterval(function () { show(cur + 1); }, 3500);
  };
  document.getElementById('vw-full').onclick = function () { if (scr.requestFullscreen) scr.requestFullscreen(); };
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') { show(cur + 1); stop(); } else if (e.key === 'ArrowLeft') { show(cur - 1); stop(); }
  });
  show(0);
})();
