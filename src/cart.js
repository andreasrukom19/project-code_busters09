
import { storage } from './js/mainSection';

import imgURLdesc from './img/yellow_basket_desctop_1x-min.png';
import imgURLtablet from './img/yellow_basket_tablet_1x-min.png';
import imgURLmob from './img/yellow_basket_mobile_1x-min.png';
import imgURLdesc2x from './img/yellow_basket_desctop_2x-min.png';
import imgURLtab2x from './img/yellow_basket_tablet_2x-min.png';
import imgURLmob2x from './img/yellow_basket_mobile_2x-min.png';

const deleteBtn = document.querySelector(".cart-delete_all-button");
const deleteAllBtn = document.querySelector(".cart_close_all");
const cartContent = document.getElementById("cart-content");

const cartProductsContainer = document.querySelector('.cart_products_container');
const cartHeader = document.querySelector('.cart-quentity');

// console.log(cartContent);

// const storage = new LocalStorage();
// deleteBtn.addEventListener('click', storage.removeFromCart());

// deleteAllBtn.addEventListener('click', function() {
//   storage.removeFromCart();
//   cartContent.innerHTML = createCartMarkupDefault();;
// });


//функція загальної кількості продуктів, доданих у кошик
const products = storage.getFromStorage('cart');
const cart = storage.getFromStorage('cart');

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
      return cartSumNumber.textContent = `${total}`;
    });
  }
}
// calculateTotalPrice()

function checkLocalStorage() {

  const cart = storage.getFromStorage('cart');
  console.log(cart);

  if (cart) {
    cartContent.innerHTML = createCartMarkup(cart);
    const cartProductsList = cartContent.querySelector('.cart_products_list');
    cartProductsList.innerHTML = createCartMarkupProducts(cart);
  } else {
    cartContent.innerHTML = createCartMarkupDefault();
  }
}

checkLocalStorage();
calculateTotalPrice();

function createCartMarkup() {
  return `<div class="products_container">
  <div class="cart-add-products">      
    <div class="delete-all">        
      <button type="submit" class="cart-delete-all-button">Delete all            
        <svg class="cart_close_all" width="24" height="24">
          <use xlink:href="./img/icons.svg#icon-ion_close-sharp"></use>
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
        <button type="submit" class="cart-checkout-button">Checkout</button>
      </div>
    </form>
    
  </div>`
}


function createCartMarkupProducts(products) {
  return products.map(({ name, img, category, size, price }) => {
    return `      
    <li class="cart-list">
    <div class="obj-delete">
<button class="cart-delete-button">
<svg class="cart_close_all" width="18" height="18">
<use xlink:href="../img/icons.svg#icon-ion_close-sharp"></use>
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
    <p class="cart-message-ihfo">
      Go to the main page to select your favorite products and add them to
      the cart.
    </p>
  </div>
</div>`
};

//scroll
// if (storage.getFromStorage('cart')) {
//   const products = storage.getFromStorage('cart');
// if (products.length > 3) {
//   const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {    
//       if (entry.isIntersecting) {
//           cartProductsContainer.classList.add('scroll');
//       } else {
//           cartProductsContainer.classList.remove('scroll');
//         }
//   });
// });
//   observer.observe(cartProductsList);
// }
// }

