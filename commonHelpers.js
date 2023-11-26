import{s as l}from"./assets/mainSection-846c0ad1.js";import"./assets/vendor-a61d8330.js";document.querySelector(".cart-delete_all-button");document.querySelector(".cart_close_all");const e=document.getElementById("cart-content"),n=document.querySelector(".cart_products_list");document.querySelector(".cart_products_container");console.log(e);function d(){const t=l.getFromStorage("cart");console.log(t),t?e.innerHTML=m():(e.innerHTML=p(),n.innerHTML=u(t))}d();function p(){return`<div class="products_container">
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
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$">
        </label>
      </div>
      <div class="cart-btn">
        <button type="submit" class="cart-checkout-button">Checkout</button>
      </div>
    </form>
    
  </div>`}function u(t){return t.map(({_id:s,name:a,img:c,category:r,size:i,price:o})=>`      
    <li class="discount-item" data-id="${s}">
    <div class="add-img">
              <img src="${c}" alt="Product Image" class="product-image">
          </div>
          <div class="add-img-info">
              <button class="cart-delete-button">
                <svg class="cart_close_all" width="18" height="18">
                    <use xlink:href="../img/icons.svg#icon-ion_close-sharp"></use>
                </svg>
              </button>
            <h2 class="product-name">${a}</h2>
                <div class="product-category-size">
                    <p class="product-category">Category: ${r}</p>
                    <p class="product-size">Size: ${i}</p>
                </div>
            <p class="product-price">${o}</p>
          </div>
          </li>`).join("")}function m(){return`  
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
</div>`}
//# sourceMappingURL=commonHelpers.js.map
