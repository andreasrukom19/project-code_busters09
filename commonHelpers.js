import{s as r,i as l}from"./assets/icons-93ac261d.js";import"./assets/vendor-a61d8330.js";const o="/project-code_busters09/assets/yellow_basket_desctop_1x-min-6400acde.png",u="/project-code_busters09/assets/yellow_basket_desctop_1x-min-6400acde.png",p="/project-code_busters09/assets/yellow_basket_mobile_1x-min-195418a1.png",m="/project-code_busters09/assets/yellow_basket_desctop_2x-min-91220a6c.png",g="/project-code_busters09/assets/yellow_basket_desctop_2x-min-91220a6c.png",_="/project-code_busters09/assets/yellow_basket_mobile_2x-min-566aede4.png";document.querySelector(".cart-delete_all-button");document.querySelector(".cart_close_all");const a=document.getElementById("cart-content");document.querySelector(".cart_products_container");const b=document.querySelector(".cart-quentity"),s=r.getFromStorage("cart");r.getFromStorage("cart");function v(){if(s){const t=s.length;b.textContent=`Cart (${t})`}}v();function y(){let t=document.querySelector(".cart-sum-number"),e=0;s&&s.forEach(c=>(e+=c.price,t.textContent=`${e}`))}function h(){const t=r.getFromStorage("cart");if(console.log(t),t){a.innerHTML=x();const e=a.querySelector(".cart_products_list");e.innerHTML=f(t)}else a.innerHTML=$()}h();y();function x(){return`<div class="products_container">
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
    
  </div>`}function f(t){return t.map(({name:e,img:c,category:i,size:n,price:d})=>`      
    <li class="cart-list">
    <div class="obj-delete">
<button class="cart-delete-button">
<svg class="cart_close_all" width="18" height="18">
<use xlink:href="${l}#icon-ion_close-sharp"></use>
</svg>
</button>
</div>
<div class="cart-obj">
<div class="add-img">
<img src="${c}" alt="Product Image" class="product-image" wi>
</div>
<div class="add-img-info">
<p class="product-name">${e}</p>
<div class="product-category-size">
<p class="product-category">Category: <span class="colored-text">${i}</span></p>
<p class="product-size">Size: <span class="colored-text">${n}</span></p>
</div>
<p class="product-price">$ ${d}</p>
</div>
</div></li>
          `).join("")}function $(){return`  
  <div class="cart-img">
    <picture>
      <source media="(min-width: 1440px)" srcset="
          ${o} 1x,
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
      <img class="cart-img" src="${o}" alt="basket" />
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
