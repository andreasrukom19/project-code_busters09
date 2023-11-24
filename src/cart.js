
let cartItemCount = 0;

function addCartContent() {
    let cartContent = document.getElementById("cart-content");

    cartContent.innerHTML = `
        <div class="products_container">
            <div class="delete_all">
                <button type="submit" class="cart-delete_all-button">Delete all
                    <svg class="cart_close_all" width="24" height="24">
                        <use xlink:href="../img/icons.svg#icon-ion_close-sharp"></use>
                    </svg>
                </button>
            </div>
            <div class="cart_products_container">
                <div class="cart_products_list">

                </div>
            </div>
            <div class="products_order_container">
                <p class="your_order">Your Order</p>
                <div>
                    <p class="cart_total">Total</p>
                    <div class="cart_total_sum">
                        <p class="cart_sum">Sum:</p>
                        <p class="cart_sum_number">$0</p>
                    </div>
                </div>
                <form class="order-form">
                     <input type="text" value="Mail: " placeholder="enter your email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$">
                     <button type="submit" class="cart-checkout-button">Checkout</button>
                </form>
            </div>
        </div>`;
}

//функція загальної кількості продуктів, доданих у кошик
function totalQuantity() {
    const totalCount = items.reduce((total, currentItem) => (
        total + currentItem.cant
    ), 0)
    document.querySelector('h1').textContent = `Cart (${totalCount})`;
}


// Функція для розрахунку загальної вартості продуктів
function calculateTotalPrice() {
  const products = JSON.parse(localStorage.getItem('products'));
  const cartSumNumber = document.querySelector(".cart_sum_number");
  
  let totalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    totalPrice += products[i].price;
  }
  cartSumNumber.textContent = `${totalPrice}`;
}

const deleteBtn = document.querySelector(".cart-delete_all-button");
const deleteAllBtn = document.querySelector(".cart_close_all");

deleteBtn.addEventListener('click', function() {
  calculateTotalPrice();
});

deleteAllBtn.addEventListener('click', function() {
  localStorage.clear();
  calculateTotalPrice();
});


calculateTotalPrice();

  //функцтя додавання товару у корзину
  function addProductToCart(product) {
    let cartItems = localStorage.getItem('cartItems');
    cartItems = cartItems ? JSON.parse(cartItems) : [];
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    const productHTML = `
      <div>
        <img src="${product.imageUrl}" alt="Product Image" class="product-image">
        <h2 class="product-name">${product.name}</h2>
        <p class="product-category">${product.category}</p>
        <p class="product-size">${product.size}</p>
        <p class="product-price">${product.price}</p>
        
        <button class="cart-delete-button" onclick="deleteProduct()">X
             <svg class="cart-delete-icon" width="18" height="18">
                 <use href="../img/icons.svg#iicon-ion_close-sharp"></use>
             </svg>
        </button>
      </div>
    `;
    
    const cartProductsList = document.querySelector('.cart_products_list');
    cartProductsList.innerHTML += productHTML;
  }