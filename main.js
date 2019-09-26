const header = document.querySelector('.header');
const btn = document.querySelector('.header__hidemenu-link');
const logo = document.querySelector('.header__logo-link');
const searchLink = document.querySelector('.header__search-link');
const userLink = document.querySelector('.header__user-link');
const menu = document.querySelector('.menu');

btn.addEventListener("click", function() {
  event.preventDefault();
  if(btn.classList.contains('header__hidemenu-link--open')) {
      btn.classList.remove("header__hidemenu-link--open");
      header.classList.remove("header--open");
      logo.classList.remove("header__logo-link--open");
      searchLink.classList.remove("header__search-link--open");
      userLink.classList.remove("header__user-link--open");
      menu.style.left = '-1000px';
  } else {
    btn.classList.add("header__hidemenu-link--open");
    header.classList.add("header--open");
    logo.classList.add("header__logo-link--open");
    searchLink.classList.add("header__search-link--open");
    userLink.classList.add("header__user-link--open");
    menu.style.left = '0';
  }
})