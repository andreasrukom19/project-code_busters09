import{s as r,u as m,i as g,f as L}from"./assets/icons-03779629.js";import"./assets/vendor-99d50140.js";const u="/project-code_busters09/assets/yellow_basket_desctop_1x-min-6400acde.png",$="/project-code_busters09/assets/yellow_basket_desctop_1x-min-6400acde.png",w="/project-code_busters09/assets/yellow_basket_mobile_1x-min-195418a1.png",M="/project-code_busters09/assets/yellow_basket_desctop_2x-min-91220a6c.png",S="/project-code_busters09/assets/yellow_basket_desctop_2x-min-91220a6c.png",T="/project-code_busters09/assets/yellow_basket_mobile_2x-min-566aede4.png",b=document.querySelector(".modal-cart-submit"),E=document.querySelector(".cart-modal-content"),o=document.getElementById("cart-content");o.addEventListener("click",q);document.querySelector(".cart_products_container");const v=document.querySelector(".cart-quentity");let e=r.getFromStorage("cart");function q(t){t.target.closest(".cart-delete-all-button")&&(r.clearCart(),m(),v.textContent="Cart(0)",o.innerHTML=l())}function f(){if(e){const t=e.length;v.textContent=`Cart (${t})`}}f();function y(){let t=0;return e&&e.forEach(s=>{t+=s.price}),t.toFixed(2)}function j(){e&&e.length!==0?o.innerHTML=_():o.innerHTML=l()}j();const H=o.querySelector(".cart_products_list");h();function _(){const t=y();return`<div class="products_container">
  <div class="cart-add-products">      
    <div class="delete-all">        
      <button type="submit" class="cart-delete-all-button">Delete all            
        <svg class="cart_close_all" width="24" height="24">
          <use xlink:href="${g}#icon-ion_close-sharp"></use>
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
            multiple>
        </label>
      </div>
      <div class="cart-btn">
        <button type="submit" class="cart-checkout-button">Checkout</button>
      </div>
    </form>
    `}function h(){if(e){const t=e.map(({_id:c,name:i,img:n,category:a,size:d,price:C})=>`      
    <li id="${c}" class="cart-list">
      <div class="obj-delete">
        <button class="cart-delete-button">
          <svg class="cart_close_all" width="18" height="18">
            <use xlink:href="${g}#icon-ion_close-sharp"></use>
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
            <p class="product-category">Category: <span class="colored-text">${a}</span></p>
            <p class="product-size">Size: <span class="colored-text">${d}</span></p>
          </div>
          <p class="product-price">$ ${C}</p>
        </div>
      </div>
    </li>`).join("");if(e.length===0)return;H.innerHTML=t,document.querySelectorAll(".cart-delete-button").forEach(c=>c.addEventListener("click",U))}}function U(t){const s=t.target.closest("li").id;r.removeFromCart(s),m(),e=r.getFromStorage("cart"),e.length===0&&(o.innerHTML=l());const c=document.querySelector(".cart-sum-number");c&&(c.textContent=y()),_(),h(),f()}function l(){return`  
  <div class="box-img">
    <picture>
      <source media="(min-width: 1440px)" srcset="
          ${u} 1x,
          ${M} 2x
        " type="image/png" />
      <source media="(min-width: 768px)" srcset="
          ${$} 1x,
          ${S} 2x
        " type="image/png" />
      <source media="(min-width: 320px)" srcset="
          ${w} 1x,
          ${T} 2x
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
</div>`}if(document.querySelector(".order-form")){let s=function(c){c.preventDefault();const i=r.getCart().map(a=>({productId:a._id,amount:1})),n=document.querySelector(".cart-email");n.value&&L.order(n.value,i).then(a=>{console.log(a.data.message);const d=a.data.message;r.clearCart(),m(),v.textContent="Cart(0)",o.innerHTML=l(),E.innerHTML=R(d),F()}).catch(a=>{console.log(a)}).finally()};document.querySelector(".order-form").addEventListener("submit",s)}function F(){b.style.display="block",document.body.classList.add("no-scroll"),document.addEventListener("keydown",k),window.addEventListener("click",x)}function p(){b.style.display="none",document.removeEventListener("keydown",k),window.removeEventListener("click",x),document.body.classList.remove("no-scroll")}function k(t){t.key==="Escape"&&p()}function x(t){(t.target.classList.contains("cart-modal-content")||t.target.closest(".cart-delete-modal"))&&p()}function R(t){let s=t.substring(0,t.indexOf("Thank you for shopping")),c=t.substring(t.indexOf("Thank you for shopping"));return s=s.toUpperCase().replace("!",""),`
  <button class="cart-delete-modal">
    <svg class="cart_close_all" width="18" height="18">
      <use xlink:href="${g}#icon-ion_close-sharp"></use>
    </svg>
  </button>
  <img class="cart-modal-img" src="${u}" alt="basket" />
  
  <h1 class="cart-success">${s}</h1>
  <p class="cart-modal-info">${c}</p>
  `}
//# sourceMappingURL=commonHelpers.js.map
