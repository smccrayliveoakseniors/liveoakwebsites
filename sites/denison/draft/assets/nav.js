// Tiny nav helpers: mobile toggle + active-link highlighting.
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.querySelector('.nav-toggle');
    var links  = document.querySelector('.nav-links');
    if (toggle && links) {
      toggle.addEventListener('click', function () {
        links.classList.toggle('open');
      });
    }

    // Mark current page in nav
    var here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    document.querySelectorAll('.nav-links a[data-page]').forEach(function (a) {
      if (a.dataset.page.toLowerCase() === here) a.classList.add('active');
    });
  });
})();
