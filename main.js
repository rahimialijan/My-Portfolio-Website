const projectCard = document.getElementById('work-container');

const cardData = [
  {
    id: 1,
    image: 'Project-Images/ecommerce sit.PNG',
    title: 'Clothing Store eCommerce Website',
    technogies: ['Ruby on rails', 'CSS', 'HTML', 'JavScript'],
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum quia iure culpa assumenda et. Error saepe mollitia dignissimos sed maiores!',
    demoLink: 'https://rahimialijan.github.io/Ecommerce-Website-Full-Responsive/',
    sourceLink: 'https://github.com/rahimialijan/Ecommerce-Website-Full-Responsive',
  },
  {
    id: 2,
    image: 'Project-Images/booklist.PNG',
    title: 'JavaScript Online BookList App',
    technogies: ['Ruby on rails', 'CSS', 'HTML', 'JavScript'],
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum quia iure culpa assumenda et. Error saepe mollitia dignissimos sed maiores!',
    demoLink: 'https://rahimialijan.github.io/Ecommerce-Website-Full-Responsive/',
    sourceLink: 'https://github.com/rahimialijan/Ecommerce-Website-Full-Responsive',
  },
  {
    id: 3,
    image: 'Project-Images/educational sit.PNG',
    title: 'Website for educational centers',
    technogies: ['Ruby on rails', 'CSS', 'HTML', 'JavScript'],
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum quia iure culpa assumenda et. Error saepe mollitia dignissimos sed maiores!',
    demoLink: 'https://rahimialijan.github.io/Ecommerce-Website-Full-Responsive/',
    sourceLink: 'https://github.com/rahimialijan/Ecommerce-Website-Full-Responsive',
  },
  {
    id: 4,
    image: 'Project-Images/online clothes stor.PNG',
    title: 'Online Website for Clothes Stores',
    technogies: ['Ruby on rails', 'CSS', 'HTML', 'JavScript'],
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum quia iure culpa assumenda et. Error saepe mollitia dignissimos sed maiores!',
    demoLink: 'https://rahimialijan.github.io/Ecommerce-Website-Full-Responsive/',
    sourceLink: 'https://github.com/rahimialijan/Ecommerce-Website-Full-Responsive',
  },
  {
    id: 5,
    image: 'Project-Images/portfolio1.PNG',
    title: 'My Portfolio Website',
    technogies: ['Ruby on rails', 'CSS', 'HTML', 'JavScript'],
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum quia iure culpa assumenda et. Error saepe mollitia dignissimos sed maiores!',
    demoLink: 'https://rahimialijan.github.io/Ecommerce-Website-Full-Responsive/',
    sourceLink: 'https://github.com/rahimialijan/Ecommerce-Website-Full-Responsive',
  },
  {
    id: 6,
    image: 'Project-Images/my portfolio.PNG',
    title: 'My Microverse Portfolio Website',
    technogies: ['Ruby on rails', 'CSS', 'HTML', 'JavScript'],
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum quia iure culpa assumenda et. Error saepe mollitia dignissimos sed maiores!',
    demoLink: 'https://rahimialijan.github.io/Ecommerce-Website-Full-Responsive/',
    sourceLink: 'https://github.com/rahimialijan/Ecommerce-Website-Full-Responsive',
  }];

function generatCart() {
  projectCard.innerHTML = cardData.map((card) => {
    const {
<<<<<<< HEAD
      id, image, technogies, title,
=======
      id, image, technogies, title, desc, demoLink, sourceLink,
>>>>>>> 4413187c0d633bcb06dd0cd4b3da726500c5ffa0
    } = card;
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

    <div class="modal" id="modal${id}">
      <button data-close-button class="close-btn">&times;</button>
      <div class="modal-img-container">
        <img src="${image}" alt="">
     </div>
     <div class="heading-container">
      <h2>${title}</h2>
      <div class="btn-container">
          <button class="btn modal-btn"><a href="${demoLink}">See Live <img src="images/Icons/Icon-see-live.svg" alt=""></a></button>
          <button class="btn modal-btn"><a href="${sourceLink}">See Source <img src="images/modal-icon/livedemo.svg" alt=""></a></button>
      </div>
     </div>
    <ul class="modal-project-links">
        <li><a href="#">${technogies[0]}</a></li>
        <li><a href="#">${technogies[1]}</a></li>
        <li><a href="#">${technogies[2]}</a></li>
        <li><a href="#">${technogies[3]}</a></li>
    </ul>
    <p>${desc}</p>
  </div>
  <div id="overlay"></div>
  `;
  }).join('');
}
generatCart();

<<<<<<< HEAD
=======
// modal functions t
const openModalBtn = document.querySelectorAll('[data-modal-target]');
const closeModalBtn = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
const contactForm = document.querySelector('.contact');
const pageBody = document.getElementById('page-body');

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
  contactForm.classList.add('z-index');
  pageBody.classList.add('active');
}
function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
  contactForm.classList.remove('z-index');
  pageBody.classList.remove('active');
}
closeModalBtn.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});
openModalBtn.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

// mobile menu functionality is here
>>>>>>> 4413187c0d633bcb06dd0cd4b3da726500c5ffa0
const humburgerIcon = document.querySelector('.humburger');
const closeIcon = document.querySelector('.close-icon');
const navMenu = document.querySelector('.nav-menu');
const arrowbtn = document.querySelector('.action-arrow-down');
const navlinks = document.querySelectorAll('.nav-link');

if (humburgerIcon) {
  humburgerIcon.addEventListener('click', () => {
    arrowbtn.classList.add('display');
    navMenu.classList.add('active');
  });
}
if (navlinks) {
  navlinks.forEach((nav) => {
    nav.addEventListener('click', () => {
      arrowbtn.classList.remove('display');
      navMenu.classList.remove('active');
    });
  });
}

if (closeIcon) {
  closeIcon.addEventListener('click', () => {
    arrowbtn.classList.remove('display');
    navMenu.classList.remove('active');
  });
}

// form validations functionalty codes are here

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const sumbitError = document.getElementById('submit-error');

function nameValidation() {
  const name = document.getElementById('contact-name').value;
  if (name.length === 0) {
    nameError.innerHTML = 'insert your name';
    return false;
  }
  if (!name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)) {
    nameError.innerHTML = 'insert full name';
    return false;
  }
  nameError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
  return true;
}

function emailValidation() {
  const email = document.getElementById('contact-email').value;
  if (email.length === 0) {
    emailError.innerHTML = 'insert your email';
    return false;
  }
  if (!email.match(/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    emailError.innerHTML = 'Invalid Email';
    return false;
  }
  emailError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
  return true;
}
function messageValidation() {
  const message = document.getElementById('contact-message').value;
  const required = 30;
  const left = required - message.length;
  if (left > 0) {
    messageError.innerHTML = `${left} More characters required`;
    return false;
  }
  messageError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
  return true;
}
function formValidation() {
  if (!nameValidation() || !emailValidation() || !messageValidation()) {
    sumbitError.style.display = 'block';
    sumbitError.innerHTML = 'Please fill all fields';
    setTimeout(() => {
      sumbitError.style.display = 'none';
    }, 3000);
    return false;
  }
  return true;
}
formValidation();