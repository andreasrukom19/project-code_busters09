const form = document.getElementById('subscriptionForm');
const emailInput = document.getElementById('emailInput');

function sendFormData(event) {
  event.preventDefault();

  if (emailInput.checkValidity()) {
    const formData = new FormData(form);

    axios.post('https://food-boutique.b.goit.study/api/subscription', formData)
      .then(response => {
        console.log('Дані успішно відправлені на сервер:', response.data);
        emailInput.value = '';
      })
      .catch(error => {
        console.error('Помилка відправки даних на сервер:', error);
      });
  } else {
    console.log('Невірний формат електронної пошти');
  }
}

form.addEventListener('submit', sendFormData);