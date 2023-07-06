'use strict';

console.log('test');

/**
 * add event on element
 */
// 封装函数
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    console.log(elem);
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



// 获取dom
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
  document.body.classList.toggle("active");
}
// 点击右上角图标 弹出navbar
addEventOnElem(navToggler, "click", toggleNavbar);


// 吸顶效果 如果过滚动超过100px就显示吸顶
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = function () {
  // console.log(window.scrollY);
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElemOnScroll);