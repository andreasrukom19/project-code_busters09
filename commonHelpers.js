import{s as c}from"./assets/mainSection-939916f6.js";import"./assets/vendor-a61d8330.js";const a="/project-code_busters09/assets/yellow_basket_desctop_1x-min-6400acde.png",u="/project-code_busters09/assets/yellow_basket_desctop_1x-min-6400acde.png",p="/project-code_busters09/assets/yellow_basket_mobile_1x-min-195418a1.png",m="/project-code_busters09/assets/yellow_basket_desctop_2x-min-91220a6c.png",g="/project-code_busters09/assets/yellow_basket_desctop_2x-min-91220a6c.png",_="/project-code_busters09/assets/yellow_basket_mobile_2x-min-566aede4.png";document.querySelector(".cart-delete_all-button");document.querySelector(".cart_close_all");const r=document.getElementById("cart-content"),b=document.querySelector(".cart_products_list");document.querySelector(".cart_products_container");const v=document.querySelector(".cart-quentity"),y=document.querySelector(".cart-sum-number"),e=c.getFromStorage("cart");c.getFromStorage("cart");function h(){if(e){const t=e.length;v.textContent=`Cart (${t})`}}h();function x(){let t=0;e&&e.forEach(s=>(t+s.price,y.textContent=`${t}`))}x();function f(){const t=c.getFromStorage("cart");console.log(t),t?(r.innerHTML=k(),b.innerHTML=$(t)):r.innerHTML=S()}f();function k(){return`<div class="products_container">
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
    
  </div>`}function $(t){return t.map(({_id:s,name:o,img:i,category:l,size:n,price:d})=>`      
    <li class="discount-item" data-id="${s}">
    <div class="add-img">
              <img src="${i}" alt="Product Image" class="product-image">
          </div>
          <div class="add-img-info">
              <button class="cart-delete-button">
                <svg class="cart_close_all" width="18" height="18">
                    <use xlink:href="../img/icons.svg#icon-ion_close-sharp"></use>
                </svg>
              </button>
            <h2 class="product-name">${o}</h2>
                <div class="product-category-size">
                    <p class="product-category">Category: ${l}</p>
                    <p class="product-size">Size: ${n}</p>
                </div>
            <p class="product-price">${d}</p>
          </div>
          </li>`).join("")}function S(){return`  
  <div class="cart-img">
    <picture>
      <source media="(min-width: 1440px)" srcset="
          ${a} 1x,
          ${m} 2x
        " type="image/png" />
      <source media="(min-width: 768px)" srcset="
          ${u} 1x,
          ${g} 2x
        " type="image/png" />
      <source media="(min-width: 320px)" srcset="
          ${p} 1x,
          ${_} 2x
        " type="image/png" />
      <img class="cart-img" src="${a}" alt="basket" />
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
