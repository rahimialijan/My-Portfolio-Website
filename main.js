
const humburgerIcon = document.querySelector('.humburger');
const closeIcon = document.querySelector('.close-icon');
const navMenu = document.querySelector('.nav-menu');
const arrowbtn = document.querySelector('.action-arrow-down');
const link1 = document.querySelector('.link1');
const link2 = document.querySelector('.link2');
const link3 = document.querySelector('.link3');

if (humburgerIcon) {
  humburgerIcon.addEventListener('click', () => {
    arrowbtn.classList.add('display');
    navMenu.classList.add('active');
  });
}
if (link1) {
  link1.addEventListener('click', () => {
    arrowbtn.classList.remove('display');
    navMenu.classList.remove('active');
  });
}
if (link2) {
  link2.addEventListener('click', () => {
    arrowbtn.classList.remove('display');
    navMenu.classList.remove('active');
  });
}
if (link3) {
  link3.addEventListener('click', () => {
    arrowbtn.classList.remove('display');
    navMenu.classList.remove('active');
  });
}
if (closeIcon) {
  closeIcon.addEventListener('click', () => {
    arrowbtn.classList.remove('display');
    navMenu.classList.remove('active');
  });
}
