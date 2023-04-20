const contactForm = document.getElementById('contact-submit');
const nameInput = document.getElementById('contact-name');
const emailInput = document.getElementById('contact-email');
const messageInput = document.getElementById('contact-message');

const formInfo = JSON.parse(localStorage.getItem('contactInfo'));
if (formInfo) {
  nameInput.value = formInfo.name;
  emailInput.value = formInfo.email;
  messageInput.value = formInfo.message;
}

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;
  // if the value are valid return
  if (!name || !email || !message) {
    return;
  }
  // save to data to localStorage.
  const contactIfo = {
    name,
    email,
    message,
  };
  localStorage.setItem('contactInfo', JSON.stringify(contactIfo));
});
