import {foodService} from './mainSection.js';
const subscriptionForm = document.getElementById('subscriptionForm');

function sendFormData(event) {
  event.preventDefault();

  const emailInput = document.getElementById('emailInput');

  if (emailInput.checkValidity()) {
    const email = emailInput.value;

    foodService.subscribe(email)
      .then(response => {
        console.log('Subscription successful:', response);
      })
      .catch(error => {
        console.error('Error subscribing:', error);
    
      });
  } else {
    console.log('Invalid email format');
  }
}


subscriptionForm.addEventListener('submit', sendFormData);