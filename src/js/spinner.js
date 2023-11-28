const spinnerContainer = document.querySelector('.loader-container');

export function showSpinner() {
  spinnerContainer.style.display = 'flex';
}

export function hideSpinner() {
  spinnerContainer.style.display = 'none';
}

// function openModal() {
//   showSpinner();
//   setTimeout(() => {
//     hideSpinner();
//     document.querySelector('modal').style.display = 'block';
//   }, 3000);
// }

// function closeModal() {
//   document.querySelector('modal').style.display = 'none';
// }
