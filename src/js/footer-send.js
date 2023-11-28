import { foodService } from './mainSection.js';
const subscriptionForm = document.getElementById('subscriptionForm');
subscriptionForm.addEventListener('submit', sendFormData);

function sendFormData(event) {
  event.preventDefault();

  const emailInput = document.getElementById('emailInput');

  if (emailInput.checkValidity()) {
    const email = emailInput.value;
    console.log(email);

    foodService.subscribe(email)
    
       .then(response => {
        console.log('Subscription successful:', response);
        clearFormFields(subscriptionForm); 
      })
      .catch(error => {
        console.error('Error subscribing:', error);
       
      });
  } else {
    console.log('Invalid email format');

  }
}

function clearFormFields(form) {
  
  Array.from(form.elements).forEach(element => {
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
      element.value = ''; 
    } else if (element.tagName === 'SELECT') {
      element.selectedIndex = 0; 
    }
   
  });
}


