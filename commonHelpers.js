import{s as r,u as g,i as u,f as L}from"./assets/icons-aa665c20.js";import"./assets/vendor-99d50140.js";const p="/project-code_busters09/assets/yellow_basket_desctop_1x-min-6400acde.png",$="/project-code_busters09/assets/yellow_basket_desctop_1x-min-6400acde.png",w="/project-code_busters09/assets/yellow_basket_mobile_1x-min-195418a1.png",M="/project-code_busters09/assets/yellow_basket_desctop_2x-min-91220a6c.png",S="/project-code_busters09/assets/yellow_basket_desctop_2x-min-91220a6c.png",q="/project-code_busters09/assets/yellow_basket_mobile_2x-min-566aede4.png",b=document.querySelector(".modal"),E=document.querySelector(".modal-content"),a=document.getElementById("cart-content");a.addEventListener("click",j);document.querySelector(".cart_products_container");const v=document.querySelector(".cart-quentity");let e=r.getFromStorage("cart");function j(t){t.target.closest(".cart-delete-all-button")&&(r.clearCart(),g(),v.textContent="Cart(0)",a.innerHTML=l())}function y(){if(e){const t=e.length;v.textContent=`Cart (${t})`}}y();function f(){let t=0;return e&&e.forEach(c=>{t+=c.price}),t.toFixed(2)}function T(){e&&e.length!==0?a.innerHTML=h():a.innerHTML=l()}T();const H=a.querySelector(".cart_products_list");_();function h(){const t=f();return`<div class="products_container">
  <div class="cart-add-products">      
    <div class="delete-all">        
      <button type="submit" class="cart-delete-all-button">Delete all            
        <svg class="cart_close_all" width="24" height="24">
          <use xlink:href="${u}#icon-ion_close-sharp"></use>
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
            <use xlink:href="${u}#icon-ion_close-sharp"></use>
          </svg>
        </button>

        <img class="cart-modal-img" src="${p}" alt="basket" />
        <div>
        <p class="cart-success">Order success</p>
        <p class="cart-modal-info">Thank you for shopping at Food Boutique. Your order has been received and is now being freshly prepared just for you! Get ready to indulge in nourishing goodness, delivered right to your doorstep. We're thrilled to be part of your journey to better health and happiness</p>
      </div>
      </div>
  </div>
  </div>`}function _(){if(e){const t=e.map(({_id:s,name:i,img:n,category:o,size:d,price:C})=>`      
    <li id="${s}" class="cart-list">
      <div class="obj-delete">
        <button class="cart-delete-button">
          <svg class="cart_close_all" width="18" height="18">
            <use xlink:href="${u}#icon-ion_close-sharp"></use>
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
            <p class="product-size">Size: <span class="colored-text">${d}</span></p>
          </div>
          <p class="product-price">$ ${C}</p>
        </div>
      </div>
    </li>`).join("");if(e.length===0)return;H.innerHTML=t,document.querySelectorAll(".cart-delete-button").forEach(s=>s.addEventListener("click",F))}}function F(t){const c=t.target.closest("li").id;r.removeFromCart(c),g(),e=r.getFromStorage("cart"),e.length===0&&(a.innerHTML=l());const s=document.querySelector(".cart-sum-number");s&&(s.textContent=f()),h(),_(),y()}function l(){return`  
  <div class="box-img">
    <picture>
      <source media="(min-width: 1440px)" srcset="
          ${p} 1x,
          ${M} 2x
        " type="image/png" />
      <source media="(min-width: 768px)" srcset="
          ${$} 1x,
          ${S} 2x
        " type="image/png" />
      <source media="(min-width: 320px)" srcset="
          ${w} 1x,
          ${q} 2x
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
</div>`}if(document.querySelector(".order-form")){let c=function(s){s.preventDefault();const i=r.getCart().map(o=>({productId:o._id,amount:1})),n=document.querySelector(".cart-email");n.value&&L.order(n.value,i).then(o=>{console.log(o.data.message);const d=o.data.message;r.clearCart(),g(),v.textContent="Cart(0)",a.innerHTML=l(),E.innerHTML=z(d),U()}).catch(o=>{console.log(o)}).finally()};document.querySelector(".order-form").addEventListener("submit",c)}function U(){b.style.display="block",document.body.classList.add("no-scroll"),document.addEventListener("keydown",k),window.addEventListener("click",x)}function m(){b.style.display="none",document.removeEventListener("keydown",k),window.removeEventListener("click",x),document.body.classList.remove("no-scroll")}function k(t){t.key==="Escape"&&m()}function x(t){(t.target.classList.contains("modal")||t.target.closest(".modal-btn-close"))&&m()}function z(t){return`
  <button class="modal-btn-close">X
</button>
<p>${t}</p>
`}
//# sourceMappingURL=commonHelpers.js.map
