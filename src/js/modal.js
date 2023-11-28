import { foodService } from './mainSection';
import { storage } from './mainSection';
import iconUrl from '../img/icons.svg';
import { updateCartCountTitle } from './header';
import { hideSpinner, showSpinner } from './spinner';

const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const listItems = document.querySelector('.main-products');

let productData;

listItems.addEventListener('click', onCardClick);

async function onCardClick(e) {
  if (
    e.target.classList.contains('main-cart-icon') ||
    e.target.classList.contains('cart-img-products') ||
    e.target.classList.contains('popular-cart-img')
  ) {
    return;
  }

  const card = e.target.closest('li');
  if (!card) return;
  showSpinner();
  productData = await foodService.findProductById(card.dataset.id);
  const cartList = storage.getCart();

  modalContent.innerHTML = makeModalMarkup(productData);

  const addToCartBtn = document.querySelector('.add-to-cart-btn');
  addToCartBtn.removeEventListener('click', onCartBtnClick);
  addToCartBtn.addEventListener('click', onCartBtnClick);
  const isInCartList = cartList.some(
    cartElem => cartElem._id === productData._id
  );
  if (isInCartList) {
    addToCartBtn.firstChild.textContent = 'Remove from';
  }
  hideSpinner();
  openModal();
}

function onCartBtnClick() {
  const cartList = storage.getCart();
  console.log(cartList);
  const isInCartList = cartList.some(
    cartElem => cartElem._id === productData._id
  );

  if (isInCartList) {
    removeFromCart();
  } else {
    addToCart();
  }
}

function BtnNameSwitcher() {
  const btn = document.querySelector('.add-to-cart-btn');
  if (btn.firstChild.textContent === 'Add to') {
    btn.firstChild.textContent = 'Remove from';
  } else {
    btn.firstChild.textContent = 'Add to';
  }
}

function addToCart() {
  storage.addProductToCart(productData);
  updateCartCountTitle();
  BtnNameSwitcher();
}

function removeFromCart() {
  storage.removeFromCart(productData._id);
  updateCartCountTitle();
  BtnNameSwitcher();
}

function makeModalMarkup(product) {
  return `
  <button class="modal-btn-close">
  <svg class="close-sharp" width="16" height="16">
    <use href="${iconUrl}#icon-ion_close-sharp"></use>
  </svg>
</button>
<div class="modal-img-container">
  <img src="${product.img}" alt="${product.name}" class="modal-image" />
</div>
<div class="modal-info">
  <h2 class="modal-title">${product.name}</h2>
  <div class="modal-info-wrapper">
    <p class="modal-product">Category: <span>${product.category}</span></p>
    <p class="modal-product">Size: <span>${product.size}</span></p>
    <p class="modal-product">Popularity: <span>${product.popularity}</span></p>
  </div>
  <p class="modal-info-desc">${product.desc}</p>
</div>
<p class="modal-price">$${product.price}</p>
<button class="add-to-cart-btn">Add to<svg class="modal-cart" width="18" height="18">
    <use href="${iconUrl}#icon-heroicons-solid_shopping-cart"></use>
  </svg>
</button>
`;
}

function onEscCloseModal(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
}

function onClickCloseModal(e) {
  if (e.target.classList.contains('modal')) {
    // закриття по кліку по бекдропу
    closeModal();
  } else if (e.target.closest('.modal-btn-close')) {
    // закриття по кліку по кнопці з класом '.modal-btn-close'
    closeModal();
  }
}

function openModal() {
  modal.style.display = 'block';
  document.body.classList.add('no-scroll');
  document.addEventListener('keydown', onEscCloseModal);
  window.addEventListener('click', onClickCloseModal);
}

function closeModal() {
  modal.style.display = 'none';
  document.removeEventListener('keydown', onEscCloseModal);
  window.removeEventListener('click', onClickCloseModal);
  document.body.classList.remove('no-scroll');
}
