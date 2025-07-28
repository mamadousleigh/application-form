const form=document.getElementById('contact-form');
const firstNameInput=document.getElementById('first-name');
const lastNameInput=document.getElementById('last-name');
const emailInput=document.getElementById('email');
const messageInput=document.getElementById('message');

form.addEventListener('submit', (e)=> {
  e.preventDefault();

  const firstName=firstNameInput.value.trim();
  const lastName=lastNameInput.value.trim();
  const email=emailInput.value.trim();
  const message=messageInput.value.trim();
  // validate first name

if(!firstName) {
    firstNameInput.classList.add('error-border');
    firstNameInput.nextElementSibling.textContent='First name is required';

  }else{
     firstNameInput.classList.remove('error-border');
    firstNameInput.nextElementSibling.textContent='';
    // firstNameInput.classList.add('success-border');
   
    
  }
if(!lastName) {
    lastNameInput.classList.add('error-border');
    lastNameInput.nextElementSibling.textContent='last name is required';
  }else{
    lastNameInput.classList.remove('error-border');
    lastNameInput.nextElementSibling.textContent='';
    // lastNameInput.classList.add('success-border');
  }
  // validate email
  const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!emailPattern.test(email)) {
    emailInput.classList.add('error-border');
    emailInput.nextElementSibling.textContent='Email is required';
  }else{
    emailInput.classList.remove('error-border');
    emailInput.nextElementSibling.textContent='';
    // emailInput.classList.add('success-border');
  }
  // validate message
if(!message) {
    messageInput.classList.add('error-border');
    messageInput.nextElementSibling.textContent='Message is required';
  }else{
    messageInput.classList.remove('error-border');
    messageInput.nextElementSibling.textContent='';
    messageInput.classList.add('success-border');
  }
  // if all fields are valid, submit the form 
  if(firstName && lastName && emailPattern.test(email) && message) {
    alert('Form submitted successfully!');
  } else {
    alert('Please fill in all required fields correctly.');
  }
//  reset the form  
  form.reset();

})