
const projectCard = document.getElementById('work-container');

const cardData = [
  {
    id: 1,
    image: "Project-Images/ecommerce sit.PNG",
    title: 'Clothing Store eCommerce Website',
    technogies: ['Ruby on rails', 'CSS', 'HTML', 'JavScript'],
  },
  {
    id: 2,
    image: "Project-Images/booklist.PNG",
    title: 'JavaScript Online BookList App',
    technogies: ['Ruby on rails', 'CSS', 'HTML', 'JavScript'],
  },
  {
    id: 3,
    image: "Project-Images/educational sit.PNG",
    title: 'Website for educational centers',
    technogies: ['Ruby on rails', 'CSS', 'HTML', 'JavScript'],
  },
  {
    id: 4,
    image: "Project-Images/online clothes stor.PNG",
    title: 'Online Website for Clothes Stores',
    technogies: ['Ruby on rails', 'CSS', 'HTML', 'JavScript'],
  },
  {
    id: 5,
    image: "Project-Images/portfolio1.PNG",
    title: 'My Portfolio Website',
    technogies: ['Ruby on rails', 'CSS', 'HTML', 'JavScript'],
  },
  {
    id: 6,
    image: "Project-Images/my portfolio.PNG",
    title: 'My Microverse Portfolio Website',
    technogies: ['Ruby on rails', 'CSS', 'HTML', 'JavScript'],
  }];

function generatCart() {
  projectCard.innerHTML = cardData.map((card) => {
    const { id, image, technogies, title } = card;
    return `
    <div class="cart-container">
      <div class="img-container"><img src="${image}" alt="project image"></div>
      <div class="cart-datails">
        <h2 class="project-title">${title}</h2>
        <ul class="project-links">
            <li><a href="#">${technogies[0]}</a></li>
            <li><a href="#">${technogies[1]}</a></li>
            <li><a href="#">${technogies[2]}</a></li>
            <li><a href="#">${technogies[3]}</a></li>
        </ul>
        <button data-modal-target="#modal${id}" class="btn">See Project</button>
      </div>
    </div>
  `;
  }).join('');
}
generatCart();










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
