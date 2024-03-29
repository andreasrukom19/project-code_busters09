import { foodService, storage } from './js/mainSection';
import { updateCartCountTitle } from './js/header';

import imgURLdesc from './img/yellow_basket_desctop_1x-min.png';
import imgURLtablet from './img/yellow_basket_tablet_1x-min.png';
import imgURLmob from './img/yellow_basket_mobile_1x-min.png';
import imgURLdesc2x from './img/yellow_basket_desctop_2x-min.png';
import imgURLtab2x from './img/yellow_basket_tablet_2x-min.png';
import imgURLmob2x from './img/yellow_basket_mobile_2x-min.png';
import iconsURL from './img/icons.svg';
import modalImg from './img/cart-modal.png';
import { showSpinner, hideSpinner } from './js/spinner';

const modalCart = document.querySelector('.modal-cart-submit');
const modalCartContent = document.querySelector('.cart-modal-content');

const cartContent = document.getElementById('cart-content');
cartContent.addEventListener('click', clearCart);
const cartProductsContainer = document.querySelector(
  '.cart_products_container'
);
const cartHeader = document.querySelector('.cart-quentity');

let products = storage.getFromStorage('cart');

function clearCart(e) {
  if (!e.target.closest('.cart-delete-all-button')) {
    return;
  }
  storage.clearCart();
  updateCartCountTitle();
  cartHeader.textContent = 'Cart(0)';
  cartContent.innerHTML = createCartMarkupDefault();
}
function totalQuantity() {
  if (products) {
    const totalCount = products.length;
    cartHeader.textContent = `Cart (${totalCount})`;
  }
}
totalQuantity();

function calculateTotalPrice() {
  let total = 0;
  if (products) {
    products.forEach(product => {
      total += product.price;
    });
  }
  return total.toFixed(2);
}

function checkLocalStorage() {
  if (products && products.length !== 0) {
    cartContent.innerHTML = createCartMarkup();
  } else {
    cartContent.innerHTML = createCartMarkupDefault();
  }
}

checkLocalStorage();
const cartProductsList = cartContent.querySelector('.cart_products_list');
createCartMarkupProducts(products);

function createCartMarkup() {
  const total = calculateTotalPrice();
  return `<div class="products_container">
  <div class="cart-add-products">      
    <div class="delete-all">        
      <button type="submit" class="cart-delete-all-button">Delete all            
        <svg class="cart_close_all" width="24" height="24">
          <use xlink:href="${iconsURL}#icon-ion_close-sharp"></use>
        </svg>            
      </button>          
    </div>        
    <div class="cart_products_container">       
      <ul class="cart_products_list">                        
        <!-- Add your products here -->            
      </ul>          
    </div>      
  </div>      
  <div class="products_order_container">      
    <p class="your_order">Your Order</p>        
    <div class="total-count">          
      <div class="total-count-div">            
        <p class="cart-total">Total</p>            
        <div class="cart-total-sum">              
          <p class="cart-sum">Sum:</p>              
          <p class="cart-sum-number">$${total}</p>
        </div>
      </div>
    </div>

    <form class="order-form">
      <div class="cart-input">
        <label class="label-cart">
          <span class="label-mark">Mail:</span>
          <input
            type="email"
            class="cart-email"
            id="email"
            placeholder="enter your email"
            multiple>
        </label>
      </div>
      <div class="cart-btn">
        <button type="submit" class="cart-checkout-button">Checkout</button>
      </div>
    </form>
    `;
}

function createCartMarkupProducts() {
  if (products) {
    const markup = products
      .map(({ _id, name, img, category, size, price }) => {
        let updateCategory = category.replace(/_/g, ' ');
        return `
    <li id="${_id}" class="cart-list">
      <div class="obj-delete">
        <button class="cart-delete-button">
          <svg class="cart_close_all" width="18" height="18">
            <use xlink:href="${iconsURL}#icon-ion_close-sharp"></use>
          </svg>
        </button>
      </div>
      <div class="cart-obj">
        <div class="add-img">
          <img src="${img}" alt="Product Image" class="product-image" wi>
        </div>
        <div class="add-img-info">
          <p class="product-name">${name}</p>
          <div class="product-category-size">
            <p class="product-category">Category: <span class="colored-text">${updateCategory}</span></p>
            <p class="product-size">Size: <span class="colored-text">${size}</span></p>
          </div>
          <p class="product-price">$ ${price}</p>
        </div>
      </div>
    </li>`;
      })
      .join('');
    if (products.length === 0) return;
    cartProductsList.innerHTML = markup;
    const deleteBtns = document.querySelectorAll('.cart-delete-button');
    deleteBtns.forEach(btn => btn.addEventListener('click', onDeleteProduct));
  }
}

function onDeleteProduct(event) {
  const productId = event.target.closest('li').id;
  storage.removeFromCart(productId);
  updateCartCountTitle();
  products = storage.getFromStorage('cart');
  if (products.length === 0) {
    cartContent.innerHTML = createCartMarkupDefault();
  }

  const price = document.querySelector('.cart-sum-number');
  if (price) {
    price.textContent = calculateTotalPrice();
  }

  createCartMarkup();
  createCartMarkupProducts();
  totalQuantity();
}

function createCartMarkupDefault() {
  return `  
  <div class="box-img">
    <picture>
      <source media="(min-width: 1440px)" srcset="
          ${imgURLdesc} 1x,
          ${imgURLdesc2x} 2x
        " type="image/png" />
      <source media="(min-width: 768px)" srcset="
          ${imgURLtablet} 1x,
          ${imgURLtab2x} 2x
        " type="image/png" />
      <source media="(min-width: 320px)" srcset="
          ${imgURLmob} 1x,
          ${imgURLmob2x} 2x
        " type="image/png" />
      <img class="cart-img" src="${imgURLdesc}" alt="basket" />
    </picture>
  </div>
  <div class="cart-empty">
    <p class="cart-message">
      Your basket is <span class="hero-title-span">empty...</span>
    </p>
    <p class="cart-message-info">
      Go to the main page to select your favorite products and add them to
      the cart.
    </p>
  </div>
</div>`;
}

if (document.querySelector('.order-form')) {
  const orderForm = document.querySelector('.order-form');
  orderForm.addEventListener('submit', onCheckoutSubmit);

  function onCheckoutSubmit(e) {
    e.preventDefault();

    const totalCart = storage
      .getCart()
      .map(elem => ({ productId: elem._id, amount: 1 }));
    const emailInput = document.querySelector('.cart-email');
    if (!emailInput.value) {
      return;
    }

    foodService
      .order(emailInput.value, totalCart)
      .then(result => {
        const message = result.data.message;
        storage.clearCart();
        updateCartCountTitle();
        cartHeader.textContent = 'Cart(0)';
        cartContent.innerHTML = createCartMarkupDefault();
        modalCartContent.innerHTML = makeModalMarkup(message);
        openModal();
      })
      .catch(err => {
        console.log(err);
      })
      .finally();
  }
}

function openModal() {
  modalCart.style.display = 'block';
  document.body.classList.add('no-scroll');
  document.addEventListener('keydown', onEscCloseModal);
  window.addEventListener('click', onClickCloseModal);
}

function closeModal() {
  modalCart.style.display = 'none';
  document.removeEventListener('keydown', onEscCloseModal);
  window.removeEventListener('click', onClickCloseModal);
  document.body.classList.remove('no-scroll');
}

function onEscCloseModal(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
}

function onClickCloseModal(e) {
  if (e.target.classList.contains('cart-modal-content')) {
    closeModal();
  } else if (e.target.closest('.cart-delete-modal')) {
    closeModal();
  }
}

function makeModalMarkup(message) {
  let messageTitle = message.substring(
    0,
    message.indexOf('Thank you for shopping')
  );
  let messageText = message.substring(
    message.indexOf('Thank you for shopping')
  );
  messageTitle = messageTitle.toUpperCase().replace('!', '');
  return `
  <button class="cart-delete-modal">
    <svg class="cart_close_all" width="18" height="18">
      <use xlink:href="${iconsURL}#icon-ion_close-sharp"></use>
    </svg>
  </button>
  <img class="cart-modal-img" src="${modalImg}" alt="basket" />
  
  <h1 class="cart-success">${messageTitle}</h1>
  <p class="cart-modal-info">${messageText}</p>
  `;
}
