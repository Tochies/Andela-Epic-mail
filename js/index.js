// Toggler for the navigation menu
let navItem = document.getElementById('nav-menu');
let navBarToggle = document.getElementById('navbar-toggle-js');

navBarToggle.addEventListener('click', function () {
  navItem.classList.toggle('active');
});