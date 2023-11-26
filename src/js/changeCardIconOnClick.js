export function onClick() {
  document.addEventListener('click', function (event) {
    if (
      event.target.classList.contains('cart-img-products') ||
      event.target.classList.contains('main-cart-icon') ||
      event.target.classList.contains('popular-cart-img')
    ) {
      const currentImage = event.target;
      const newImagePath = '../img/checked.svg';
      currentImage.src = newImagePath;
    }
  });
}
