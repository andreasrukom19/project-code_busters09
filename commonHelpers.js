import{s as c,i as l}from"./assets/icons-03eba1ee.js";import"./assets/vendor-99d50140.js";const r="/project-code_busters09/assets/yellow_basket_desctop_1x-min-6400acde.png",_="/project-code_busters09/assets/yellow_basket_desctop_1x-min-6400acde.png",v="/project-code_busters09/assets/yellow_basket_mobile_1x-min-195418a1.png",b="/project-code_busters09/assets/yellow_basket_desctop_2x-min-91220a6c.png",y="/project-code_busters09/assets/yellow_basket_desctop_2x-min-91220a6c.png",h="/project-code_busters09/assets/yellow_basket_mobile_2x-min-566aede4.png";document.querySelector(".cart_close_all");const o=document.getElementById("cart-content");document.querySelector(".cart_products_container");const f=document.querySelector(".cart-quentity");let e=c.getFromStorage("cart");console.log(e);function x(){if(e){const t=e.length;f.textContent=`Cart (${t})`}}x();function $(){let t=0;return e&&e.forEach(s=>{t+=s.price}),t.toFixed(2)}function i(){e?o.innerHTML=w():o.innerHTML=C()}i();const k=o.querySelector(".cart_products_list");n();function w(){const t=$();return`<div class="products_container">
  <div class="cart-add-products">      
    <div class="delete-all">        
      <button type="submit" class="cart-delete-all-button">Delete all            
        <svg class="cart_close_all" width="24" height="24">
          <use xlink:href="${l}#icon-ion_close-sharp"></use>
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
          <p class="cart-sum-number">$${t}</p>
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

  </div>`}function n(){if(e){const t=e.map(({_id:a,name:d,img:u,category:p,size:m,price:g})=>`      
    <li id="${a}" class="cart-list">
      <div class="obj-delete">
        <button class="cart-delete-button">
          <svg class="cart_close_all" width="18" height="18">
            <use xlink:href="${l}#icon-ion_close-sharp"></use>
          </svg>
        </button>
      </div>
      <div class="cart-obj">
        <div class="add-img">
          <img src="${u}" alt="Product Image" class="product-image" wi>
        </div>
        <div class="add-img-info">
          <p class="product-name">${d}</p>
          <div class="product-category-size">
            <p class="product-category">Category: <span class="colored-text">${p}</span></p>
            <p class="product-size">Size: <span class="colored-text">${m}</span></p>
          </div>
          <p class="product-price">$ ${g}</p>
        </div>
      </div>
    </li>`).join("");k.innerHTML=t,document.querySelectorAll(".cart-delete-button").forEach(a=>a.addEventListener("click",L))}}function L(t){const s=t.target.closest("li").id;c.removeFromCart(s),e=c.getFromStorage("cart"),e.length===0&&c.clearCart(),i(),n()}function C(){return`  
  <div class="cart-img">
    <picture>
      <source media="(min-width: 1440px)" srcset="
          ${r} 1x,
          ${b} 2x
        " type="image/png" />
      <source media="(min-width: 768px)" srcset="
          ${_} 1x,
          ${y} 2x
        " type="image/png" />
      <source media="(min-width: 320px)" srcset="
          ${v} 1x,
          ${h} 2x
        " type="image/png" />
      <img class="cart-img" src="${r}" alt="basket" />
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
