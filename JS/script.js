'use strict';

const overlay = document.querySelector('.overlay');
const navBar = document.querySelector('.navbar-mobile-menu');
const menu = document.querySelector('.hamburger');
const menuBar = document.querySelector('.open-close-menu');

const ShowMobileMenu = () => {
  if (navBar.style.display === 'none') {
    navBar.style.display = 'block';
    overlay.style.display = 'block';
    menu.classList.add('active');
  } else {
    navBar.style.display = 'none';
    overlay.style.display = 'none';
    menu.classList.remove('active');
  }
};

const toggleMobileMenu = () => {
  if (menu.classList.contains('active')) {
    menuBar.src = './images/icon-close.svg';
  } else {
    menuBar.src = './images/icon-hamburger.svg';
  }
};
menu.addEventListener('click', function () {
  ShowMobileMenu();
  toggleMobileMenu();
});
