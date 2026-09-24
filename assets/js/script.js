document.addEventListener('DOMContentLoaded', function () {

  /* Desktop / Tablet / Mobile screenshot tabs */
  var tabButtons = document.querySelectorAll('.tab-btn');
  var tabPanels  = document.querySelectorAll('.tab-panel');

  tabButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = btn.getAttribute('data-tab');

      tabButtons.forEach(function (b) { b.classList.remove('is-active'); });
      tabPanels.forEach(function (p) { p.classList.remove('is-active'); });

      btn.classList.add('is-active');
      document.querySelector('.tab-panel[data-panel="' + target + '"]').classList.add('is-active');
    });
  });

  /* Mobile sidebar toggle */
  var navToggle = document.getElementById('navToggle');
  var sidebar   = document.getElementById('sidebar');

  if (navToggle && sidebar) {
    navToggle.addEventListener('click', function () {
      sidebar.classList.toggle('is-open');
    });

    document.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        sidebar.classList.remove('is-open');
      });
    });
  }

});
