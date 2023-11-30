import { foodService } from './mainSection';
import Swal from 'sweetalert2';
const subscriptionForm = document.getElementById('subscriptionForm');
subscriptionForm.addEventListener('submit', sendFormData);

function sendFormData(event) {
  event.preventDefault();

  const emailInput = document.getElementById('emailInput');

  if (emailInput) {
    const email = emailInput.value;
    if (email !== '')
      foodService
        .subscribe(email)
        .then(response => {
          if (response.status === 201) {
            console.log(response.data.message);
            Swal.fire({
              title: 'Subscription is complete',
              text: response.data.message,
              icon: 'success',
              confirmButtonText: 'Back to products',
            });
            clearFormFields(subscriptionForm);
          }

          console.log('Subscription successful:', response);
        })
        .catch(error => {
          console.error('Error subscribing:', error);
          console.log(error.response);
          if (error.response.status === 409) {
            Swal.fire({
              title: 'Already subscribed!',
              text: 'Your email is already subscribed!',
              icon: 'info',
              confirmButtonText: 'Back to products',
            });
          } else if (error.response.status === 400) {
            Swal.fire({
              title: 'Error',
              text: 'Invalid email',
              icon: 'error',
              confirmButtonText: 'Back to products',
            });
          }
        });
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
