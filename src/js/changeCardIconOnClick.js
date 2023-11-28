import checkedImage from '/img/checked.svg';

export function changeCardIconOnClick() {
  document.addEventListener('click', function (event) {
    if (
      event.target.classList.contains('cart-img-products') ||
      event.target.classList.contains('main-cart-icon') ||
      event.target.classList.contains('popular-cart-img') ||
      event.target.classList.contains('popular-cart-img-down')
    ) {
      const currentImage = event.target;
      currentImage.src = checkedImage;
      const productId = event.target.dataset.productId;
      const storedArray = localStorage.getItem('arrayChecked');
      const arrayChecked = storedArray ? JSON.parse(storedArray) : [];
      const isProductAlreadyChecked = arrayChecked.some(
        item => item._id === productId
      );
      if (!isProductAlreadyChecked) {
        arrayChecked.push({ _id: productId });
        localStorage.setItem('arrayChecked', JSON.stringify(arrayChecked));
      }
    }
  });
}
