(function () {
  var box = document.createElement('div'); box.className = 'zoom';
  box.innerHTML = '<img alt=""><button type="button" aria-label="Close">Close</button>';
  document.body.appendChild(box);
  var big = box.querySelector('img');
  function close() { box.classList.remove('open'); big.removeAttribute('src'); }
  box.addEventListener('click', close);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  document.addEventListener('click', function (e) {
    var t = e.target;
    if (t.tagName === 'IMG' && (t.closest('.image') || t.closest('.vw-screen'))) {
      big.src = t.currentSrc || t.src; big.alt = t.alt; box.classList.add('open');
    }
  });
})();
