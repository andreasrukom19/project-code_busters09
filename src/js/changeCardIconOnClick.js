import checkedImage from '/img/checked.svg';

export function changeCardIconOnClick() {
  document.addEventListener('click', function (event) {
    if (
      event.target.classList.contains('cart-img-products') ||
      event.target.classList.contains('main-cart-icon') ||
      event.target.classList.contains('popular-cart-img')
    ) {
      const currentImage = event.target;
      currentImage.src = checkedImage;
    }
  });
}
