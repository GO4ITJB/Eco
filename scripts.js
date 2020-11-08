// Menu links
const menu = document.getElementById('menu');
const closeIcon = document.getElementById("nav__toggle");

menu.addEventListener('click', handleMenuClick);

function handleMenuClick(event) {
  if (event.target instanceof HTMLAnchorElement) {
    closeIcon.checked = false;
  }
};


// Parallax
var image = document.getElementsByClassName('hero__img');
new simpleParallax(image, {
scale: 1.2,
});