const spinnerContainer = document.querySelector('.loader-container');

export function showSpinner() {
  if (spinnerContainer) {
    spinnerContainer.style.display = 'flex';
  }
}

export function hideSpinner() {
  if (spinnerContainer) {
    spinnerContainer.style.display = 'none';
  }
}
