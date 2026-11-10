// Tiny nav helpers: mobile toggle + active-link highlighting.
(function () {
  function norm(p) {
    p = (p || '/').split('#')[0].split('?')[0];
    p = p.replace(/\/index\.html$/, '/').replace(/\.html$/, '').replace(/\/+$/, '');
    return (p || '/').toLowerCase();
  }
  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.querySelector('.nav-toggle');
    var links  = document.querySelector('.nav-links');
    if (toggle && links) {
      toggle.addEventListener('click', function () {
        var open = links.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }

    // Mark current page in nav
    var here = norm(location.pathname);
    document.querySelectorAll('.nav-links a[href^="/"]').forEach(function (a) {
      if (a.classList.contains('nav-cta')) return;
      if (norm(a.getAttribute('href')) === here) {
        a.classList.add('active');
        a.setAttribute('aria-current', 'page');
      }
    });
  });
})();
