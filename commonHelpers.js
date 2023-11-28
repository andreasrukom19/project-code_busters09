import{s as c,u as i,i as n}from"./assets/icons-00702b3c.js";import"./assets/vendor-99d50140.js";const l="/project-code_busters09/assets/yellow_basket_desctop_1x-min-6400acde.png",h="/project-code_busters09/assets/yellow_basket_desctop_1x-min-6400acde.png",x="/project-code_busters09/assets/yellow_basket_mobile_1x-min-195418a1.png",k="/project-code_busters09/assets/yellow_basket_desctop_2x-min-91220a6c.png",$="/project-code_busters09/assets/yellow_basket_desctop_2x-min-91220a6c.png",C="/project-code_busters09/assets/yellow_basket_mobile_2x-min-566aede4.png",a=document.getElementById("cart-content");a.addEventListener("click",L);document.querySelector(".cart_products_container");const d=document.querySelector(".cart-quentity");let e=c.getFromStorage("cart");function L(t){t.target.closest(".cart-delete-all-button")&&(c.clearCart(),i(),d.textContent="Cart(0)",a.innerHTML=o())}function u(){if(e){const t=e.length;d.textContent=`Cart (${t})`}}u();function p(){let t=0;return e&&e.forEach(r=>{t+=r.price}),t.toFixed(2)}function w(){e?a.innerHTML=m():a.innerHTML=o()}w();const S=a.querySelector(".cart_products_list");g();function m(){const t=p();return`<div class="products_container">
  <div class="cart-add-products">      
    <div class="delete-all">        
      <button type="submit" class="cart-delete-all-button">Delete all            
        <svg class="cart_close_all" width="24" height="24">
          <use xlink:href="${n}#icon-ion_close-sharp"></use>
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

  </div>`}function g(){if(e){const t=e.map(({_id:s,name:v,img:_,category:b,size:y,price:f})=>`      
    <li id="${s}" class="cart-list">
      <div class="obj-delete">
        <button class="cart-delete-button">
          <svg class="cart_close_all" width="18" height="18">
            <use xlink:href="${n}#icon-ion_close-sharp"></use>
          </svg>
        </button>
      </div>
      <div class="cart-obj">
        <div class="add-img">
          <img src="${_}" alt="Product Image" class="product-image" wi>
        </div>
        <div class="add-img-info">
          <p class="product-name">${v}</p>
          <div class="product-category-size">
            <p class="product-category">Category: <span class="colored-text">${b}</span></p>
            <p class="product-size">Size: <span class="colored-text">${y}</span></p>
          </div>
          <p class="product-price">$ ${f}</p>
        </div>
      </div>
    </li>`).join("");S.innerHTML=t,document.querySelectorAll(".cart-delete-button").forEach(s=>s.addEventListener("click",j))}}function j(t){const r=t.target.closest("li").id;c.removeFromCart(r),i(),e=c.getFromStorage("cart"),e.length===0&&(c.clearCart(),a.innerHTML=o());const s=document.querySelector(".cart-sum-number");s&&(s.textContent=p()),m(),g(),u()}function o(){return`  
  <div class="cart-img">
    <picture>
      <source media="(min-width: 1440px)" srcset="
          ${l} 1x,
          ${k} 2x
        " type="image/png" />
      <source media="(min-width: 768px)" srcset="
          ${h} 1x,
          ${$} 2x
        " type="image/png" />
      <source media="(min-width: 320px)" srcset="
          ${x} 1x,
          ${C} 2x
        " type="image/png" />
      <img class="cart-img" src="${l}" alt="basket" />
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
