
import  LocalStorage  from './local-storages';

let cartItemCount = 0;
const deleteBtn = document.querySelector(".cart-delete_all-button");
const deleteAllBtn = document.querySelector(".cart_close_all");
const cartContent = document.getElementById("cart-content");
const cartProductsList = document.querySelector(".cart_products_list");
const cartProductsContainer = document.querySelector('.cart_products_container');


deleteBtn.addEventListener('click', removeFromCart());
deleteAllBtn.addEventListener('click', function() {
  removeFromCart();
  cartContent.innerHTML = createCartMarkupDefault();;
});



//функція загальної кількості продуктів, доданих у кошик

function totalQuantity() {
    const items = LocalStorage.getFromStorage();
    const totalCount = items.reduce((total, currentItem) => (
    total + currentItem.cant
), 0)
    document.querySelector('h1').textContent = `Cart (${totalCount})`;
}

// Функція для розрахунку загальної вартості продуктів

function calculateTotalPrice() {
  getFromStorage();
    const cartSumNumber = document.querySelector(".cart_sum_number");
    let totalPrice = 0;
    for (let i = 0; i < products.length; i++) {
        totalPrice += products[i].price;
      }
    cartSumNumber.textContent = `${totalPrice}`;
}

calculateTotalPrice();




async function checkLocalStorage() {
  try {
    const cart = LocalStorage.getFromStorage(); 
    if (cart) {
      cartContent.innerHTML = createCartMarkup(cart);
     cartProductsList.innerHTML = createCartMarkupProducts(cart.products);
    } else {
      cartContent.innerHTML = createCartMarkupDefault();
    }
  } catch (error) {
    console.error(error);
  }
}



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
  return products
  .map(
    ({ _id, name, img, category, size, price }) => `      
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
)};
function createCartMarkupDefault() {
  return `  
  <div class="cart-img">
    <picture>
      <source media="(min-width: 1440px)" srcset="
          ./img/yellow_basket_desctop_1x-min.png 1x,
          ./img/yellow_basket_desctop_2x-min.png 2x
        " type="image/png" />
      <source media="(min-width: 768px)" srcset="
          ./img/yellow_basket_tablet_1x-min.png 1x,
          ./img/yellow_basket_tablet_2x-min.png 2x
        " type="image/png" />
      <source media="(min-width: 320px)" srcset="
          ./img/yellow_basket_mobile_1x-min.png 1x,
          ./img/yellow_basket_mobile_2x-min.png 2x
        " type="image/png" />
      <img class="cart-img" src="./img/yellow_basket_desctop_1x-min.png" alt="basket" />
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
if (localStorage.getFromStorage('cart_products_list')) {
const products = JSON.parse(localStorage.getFromStorage('cart_products_list'));
if (products.length > 3) {



const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {    
      if (entry.isIntersecting) {
          cartProductsContainer.classList.add('scroll');
      } else {
          cartProductsContainer.classList.remove('scroll');
        }
});
});
observer.observe(cartProductsList);
}
}