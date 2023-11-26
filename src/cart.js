
import  { storage }  from './js/mainSection';
import imgURLdesc from './img/yellow_basket_desctop_1x-min.png';
import imgURLtablet from './img/yellow_basket_tablet_1x-min.png';
import imgURLmob from './img/yellow_basket_mobile_1x-min.png';
import imgURLdesc2x from './img/yellow_basket_desctop_2x-min.png';
import imgURLtab2x from './img/yellow_basket_tablet_2x-min.png';
import imgURLmob2x from './img/yellow_basket_mobile_2x-min.png';

const deleteBtn = document.querySelector(".cart-delete_all-button");
const deleteAllBtn = document.querySelector(".cart_close_all");
const cartContent = document.getElementById("cart-content");
const cartProductsList = document.querySelector(".cart_products_list");
const cartProductsContainer = document.querySelector('.cart_products_container');
console.log(cartContent);

// const storage = new LocalStorage();
// deleteBtn.addEventListener('click', storage.removeFromCart());

// deleteAllBtn.addEventListener('click', function() {
//   storage.removeFromCart();
//   cartContent.innerHTML = createCartMarkupDefault();;
// });


//функція загальної кількості продуктів, доданих у кошик

function totalQuantity() {
    const items = storage.getFromStorage();
    const totalCount = items.reduce((total, currentItem) => (
    total + currentItem
), 0)
    document.querySelector('h1').textContent = `Cart (${totalCount})`;
}

// Функція для розрахунку загальної вартості продуктів

function calculateTotalPrice() {
  const products = storage.getFromStorage('cart');
  console.log(products);
  const cartSumNumber = document.querySelector(".cart-sum-number");
  console.log(cartSumNumber);
    let totalPrice = 0;
    for (let i = 0; i < products.length; i++) {
        totalPrice += products[i].price;
      }
    cartSumNumber.textContent = `${totalPrice}`;
}

// calculateTotalPrice();



function checkLocalStorage() {
  
  const cart = storage.getFromStorage('cart');
  console.log(cart);
    if (cart)  {
      cartContent.innerHTML = createCartMarkup();
      cartProductsList.innerHTML = createCartMarkupProducts(cart);
    } else {
      cartContent.innerHTML = createCartMarkupDefault();
    }
  
}

checkLocalStorage();

function createCartMarkup () {
  return `<div class="products_container">
  <div class="cart-add-products">      
    <div class="delete-all">        
      <button type="submit" class="cart-delete-all-button">Delete all            
        <svg class="cart_close_all" width="24" height="24">
          <use xlink:href="../img/icons.svg#icon-ion_close-sharp"></use>
        </svg>            
      </button>          
    </div>        
    <div class="cart_products_container">       
      <div class="cart_products_list">                        
        <!-- Add your products here -->            
      </div>          
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
  return  products.map(({ _id, name, img, category, size, price }) => {
  return `      
    <li class="discount-item" data-id="${_id}">
    <div class="add-img">
              <img src="${img}" alt="Product Image" class="product-image">
          </div>
          <div class="add-img-info">
              <button class="cart-delete-button">
                <svg class="cart_close_all" width="18" height="18">
                    <use xlink:href="../img/icons.svg#icon-ion_close-sharp"></use>
                </svg>
              </button>
            <h2 class="product-name">${name}</h2>
                <div class="product-category-size">
                    <p class="product-category">Category: ${category}</p>
                    <p class="product-size">Size: ${size}</p>
                </div>
            <p class="product-price">${price}</p>
          </div>
          </li>`
  })  .join('');};

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

