import{s as c,u as d,i as m,f as h}from"./assets/icons-e2989b7d.js";import"./assets/vendor-99d50140.js";const p="/project-code_busters09/assets/yellow_basket_desctop_1x-min-6400acde.png",x="/project-code_busters09/assets/yellow_basket_desctop_1x-min-6400acde.png",C="/project-code_busters09/assets/yellow_basket_mobile_1x-min-195418a1.png",k="/project-code_busters09/assets/yellow_basket_desctop_2x-min-91220a6c.png",$="/project-code_busters09/assets/yellow_basket_desctop_2x-min-91220a6c.png",L="/project-code_busters09/assets/yellow_basket_mobile_2x-min-566aede4.png",r=document.getElementById("cart-content");r.addEventListener("click",S);document.querySelector(".cart_products_container");const u=document.querySelector(".cart-quentity");let e=c.getFromStorage("cart");function S(t){t.target.closest(".cart-delete-all-button")&&(c.clearCart(),d(),u.textContent="Cart(0)",r.innerHTML=n())}function g(){if(e){const t=e.length;u.textContent=`Cart (${t})`}}g();function v(){let t=0;return e&&e.forEach(o=>{t+=o.price}),t.toFixed(2)}function w(){e?r.innerHTML=b():r.innerHTML=n()}w();const M=r.querySelector(".cart_products_list");_();function b(){const t=v();return`<div class="products_container">
  <div class="cart-add-products">      
    <div class="delete-all">        
      <button type="submit" class="cart-delete-all-button">Delete all            
        <svg class="cart_close_all" width="24" height="24">
          <use xlink:href="${m}#icon-ion_close-sharp"></use>
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

  </div>`}function _(){if(e){const t=e.map(({_id:a,name:i,img:l,category:s,size:f,price:y})=>`      
    <li id="${a}" class="cart-list">
      <div class="obj-delete">
        <button class="cart-delete-button">
          <svg class="cart_close_all" width="18" height="18">
            <use xlink:href="${m}#icon-ion_close-sharp"></use>
          </svg>
        </button>
      </div>
      <div class="cart-obj">
        <div class="add-img">
          <img src="${l}" alt="Product Image" class="product-image" wi>
        </div>
        <div class="add-img-info">
          <p class="product-name">${i}</p>
          <div class="product-category-size">
            <p class="product-category">Category: <span class="colored-text">${s}</span></p>
            <p class="product-size">Size: <span class="colored-text">${f}</span></p>
          </div>
          <p class="product-price">$ ${y}</p>
        </div>
      </div>
    </li>`).join("");M.innerHTML=t,document.querySelectorAll(".cart-delete-button").forEach(a=>a.addEventListener("click",j))}}function j(t){const o=t.target.closest("li").id;c.removeFromCart(o),d(),e=c.getFromStorage("cart"),e.length===0&&(c.clearCart(),r.innerHTML=n());const a=document.querySelector(".cart-sum-number");a&&(a.textContent=v()),b(),_(),g()}function n(){return`  
  <div class="cart-img">
    <picture>
      <source media="(min-width: 1440px)" srcset="
          ${p} 1x,
          ${k} 2x
        " type="image/png" />
      <source media="(min-width: 768px)" srcset="
          ${x} 1x,
          ${$} 2x
        " type="image/png" />
      <source media="(min-width: 320px)" srcset="
          ${C} 1x,
          ${L} 2x
        " type="image/png" />
      <img class="cart-img" src="${p}" alt="basket" />
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
</div>`}if(document.querySelector(".order-form")){let o=function(a){a.preventDefault();const i=c.getCart().map(s=>({productId:s._id,amount:1})),l=document.querySelector(".cart-email");if(!l.value){alert("pls enter email");return}h.order(l.value,i).then(s=>{console.log(s.data),c.clearCart(),d(),u.textContent="Cart(0)",r.innerHTML=n()}).catch(s=>{console.log(s)})};document.querySelector(".order-form").addEventListener("submit",o)}
//# sourceMappingURL=commonHelpers.js.map
