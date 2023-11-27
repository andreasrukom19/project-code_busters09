
import { storage } from './js/mainSection';

import imgURLdesc from './img/yellow_basket_desctop_1x-min.png';
import imgURLtablet from './img/yellow_basket_tablet_1x-min.png';
import imgURLmob from './img/yellow_basket_mobile_1x-min.png';
import imgURLdesc2x from './img/yellow_basket_desctop_2x-min.png';
import imgURLtab2x from './img/yellow_basket_tablet_2x-min.png';
import imgURLmob2x from './img/yellow_basket_mobile_2x-min.png';
import iconsURL from './img/icons.svg';

const deleteAllBtn = document.querySelector(".cart_close_all");
const cartContent = document.getElementById("cart-content");
const cartProductsContainer = document.querySelector('.cart_products_container');
const cartHeader = document.querySelector('.cart-quentity');

let products = storage.getFromStorage('cart');
console.log(products);


function totalQuantity() {
  if (products) {
    const totalCount = products.length;
    cartHeader.textContent = `Cart (${totalCount})`;
  }
}
totalQuantity()

// Функція для розрахунку загальної вартості продуктів

function calculateTotalPrice() {
  let cartSumNumber = document.querySelector('.cart-sum-number');
  let total = 0;
  if (products) {
    products.forEach(product => {
      total += product.price;
      return cartSumNumber.textContent = `$${total.toFixed(2)}`;
    });
  }
}
// calculateTotalPrice()

function checkLocalStorage() {
  if (products) {
    cartContent.innerHTML = createCartMarkup();
  } else {
    cartContent.innerHTML = createCartMarkupDefault();
  }
}

checkLocalStorage();
const cartProductsList = cartContent.querySelector('.cart_products_list');

createCartMarkupProducts(products);
calculateTotalPrice();



function createCartMarkup() {
  return `
  <div class="products_container">
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
          <p class="cart-sum-number">$0</p>              
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
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$">
        </label>
      </div>
      <div class="cart-btn">
        <button type="submit" id="checkoutButton" class="cart-checkout-button">Checkout</button>
      </div>
    </form>
    
    <div id="modal" class="modal">
      <div class="cart-modal-content">
        
      <button class="cart-delete-modal">
      <span class="close">&times;</span>
      
      </button>

        <img class="cart-modal-img" src="${imgURLdesc}" alt="basket" />
        <div>
        <p class="cart-success">Order success</p>
        <p class="cart-modal-info">Thank you for shopping at Food Boutique. Your order has been received and is now being freshly prepared just for you! Get ready to indulge in nourishing goodness, delivered right to your doorstep. We're thrilled to be part of your journey to better health and happiness</p>
      </div>
      </div>
  </div>`
}


function createCartMarkupProducts(products) {
  return products.map(({ name, img, category, size, price }) => {
    return `      
    <li class="cart-list">
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
<p class="product-category">Category: <span class="colored-text">${category}</span></p>
<p class="product-size">Size: <span class="colored-text">${size}</span></p>
</div>
<p class="product-price">$ ${price}</p>
</div>
</div></li>
          `
  }).join('')
}

function createCartMarkupDefault() {
  return `  
  <div class="cart-img">
    
      <img class="cart-img" src="${imgURLdesc}" alt="basket" />
   
  </div>
  <div class="cart-empty">
    <p class="cart-message">
      Your basket is <span class="hero-title-span">empty...</span>
    </p>
    <p class="cart-message-ihfo">
      Go to the main page to select your favorite products and add them to
      the cart.
    </p>
  </div>
</div>`
};


const checkoutButton = document.getElementById("checkoutButton");
checkoutButton.addEventListener("click", sendOrder);

const modal = document.getElementById("modal");
const closeModalButton = document.getElementsByClassName("close")[0];

function sendOrder(e) {
    e.preventDefault();
 const orderCreated = true; 

  if (orderCreated) 
  modal.style.display = "block";
  closeModalButton.onclick = function() {
    modal.style.display = "none";
  };

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    } 
  };
}
      
    