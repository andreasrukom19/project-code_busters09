import{s as r,u as p,i as d,f as _}from"./assets/icons-abaca830.js";import"./assets/vendor-99d50140.js";const u="/project-code_busters09/assets/yellow_basket_desctop_1x-min-6400acde.png",k="/project-code_busters09/assets/yellow_basket_desctop_1x-min-6400acde.png",x="/project-code_busters09/assets/yellow_basket_mobile_1x-min-195418a1.png",C="/project-code_busters09/assets/yellow_basket_desctop_2x-min-91220a6c.png",$="/project-code_busters09/assets/yellow_basket_desctop_2x-min-91220a6c.png",L="/project-code_busters09/assets/yellow_basket_mobile_2x-min-566aede4.png",c=document.getElementById("cart-content");c.addEventListener("click",w);document.querySelector(".cart_products_container");const m=document.querySelector(".cart-quentity");let e=r.getFromStorage("cart");function w(t){t.target.closest(".cart-delete-all-button")&&(r.clearCart(),p(),m.textContent="Cart(0)",c.innerHTML=l())}function g(){if(e){const t=e.length;m.textContent=`Cart (${t})`}}g();function v(){let t=0;return e&&e.forEach(a=>{t+=a.price}),t.toFixed(2)}function S(){e.length!==0?c.innerHTML=b():c.innerHTML=l()}S();const M=c.querySelector(".cart_products_list");y();function b(){const t=v();return`<div class="products_container">
  <div class="cart-add-products">      
    <div class="delete-all">        
      <button type="submit" class="cart-delete-all-button">Delete all            
        <svg class="cart_close_all" width="24" height="24">
          <use xlink:href="${d}#icon-ion_close-sharp"></use>
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
        <button type="submit" id="checkoutButton" class="cart-checkout-button">Checkout</button>
      </div>
    </form>
    
    <div id="modal-cart" class="modal-cart-del" style="display: none;">
    <div class="modal-overlay">
      <div class="cart-modal-content">   
      <button class="cart-delete-modal">
          <svg class="cart_close_all" width="18" height="18">
            <use xlink:href="${d}#icon-ion_close-sharp"></use>
          </svg>
        </button>

        <img class="cart-modal-img" src="${u}" alt="basket" />
        <div>
        <p class="cart-success">Order success</p>
        <p class="cart-modal-info">Thank you for shopping at Food Boutique. Your order has been received and is now being freshly prepared just for you! Get ready to indulge in nourishing goodness, delivered right to your doorstep. We're thrilled to be part of your journey to better health and happiness</p>
      </div>
      </div>
  </div>
  </div>`}function y(){if(e){const t=e.map(({_id:s,name:i,img:n,category:o,size:h,price:f})=>`      
    <li id="${s}" class="cart-list">
      <div class="obj-delete">
        <button class="cart-delete-button">
          <svg class="cart_close_all" width="18" height="18">
            <use xlink:href="${d}#icon-ion_close-sharp"></use>
          </svg>
        </button>
      </div>
      <div class="cart-obj">
        <div class="add-img">
          <img src="${n}" alt="Product Image" class="product-image" wi>
        </div>
        <div class="add-img-info">
          <p class="product-name">${i}</p>
          <div class="product-category-size">
            <p class="product-category">Category: <span class="colored-text">${o}</span></p>
            <p class="product-size">Size: <span class="colored-text">${h}</span></p>
          </div>
          <p class="product-price">$ ${f}</p>
        </div>
      </div>
    </li>`).join("");if(e.length===0)return;M.innerHTML=t,document.querySelectorAll(".cart-delete-button").forEach(s=>s.addEventListener("click",E))}}function E(t){const a=t.target.closest("li").id;r.removeFromCart(a),p(),e=r.getFromStorage("cart"),e.length===0&&(c.innerHTML=l());const s=document.querySelector(".cart-sum-number");s&&(s.textContent=v()),b(),y(),g()}function l(){return`  
  <div class="box-img">
    <picture>
      <source media="(min-width: 1440px)" srcset="
          ${u} 1x,
          ${C} 2x
        " type="image/png" />
      <source media="(min-width: 768px)" srcset="
          ${k} 1x,
          ${$} 2x
        " type="image/png" />
      <source media="(min-width: 320px)" srcset="
          ${x} 1x,
          ${L} 2x
        " type="image/png" />
      <img class="cart-img" src="${u}" alt="basket" />
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
</div>`}if(document.querySelector(".order-form")){let a=function(s){s.preventDefault();const i=r.getCart().map(o=>({productId:o._id,amount:1})),n=document.querySelector(".cart-email");if(!n.value){alert("pls enter email");return}_.order(n.value,i).then(o=>{console.log(o.data),r.clearCart(),p(),m.textContent="Cart(0)",c.innerHTML=l()}).catch(o=>{console.log(o)})};document.querySelector(".order-form").addEventListener("submit",a)}window.document.getElementById("checkoutButton").addEventListener("click",j);window.document.querySelector(".cart-delete-modal").addEventListener("click",T);function j(t){t.preventDefault();const a=document.getElementById("email-cart");!a.checkValidity()||!a.value||q()}function q(){document.getElementById("modal-cart").style.display="block"}function T(){document.getElementById("modal-cart").style.display="none",c.innerHTML=l(),g()}
//# sourceMappingURL=commonHelpers.js.map
