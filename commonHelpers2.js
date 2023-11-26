/* empty css                      */import{a as c}from"./assets/vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();class O{constructor(){}saveInStorage(t,s){localStorage.setItem(t,JSON.stringify(s))}saveAllToLocalStorage(t){localStorage.setItem("products",JSON.stringify(t))}saveCategories(){if(!localStorage.getItem("categories"))return i.getCategories().then(t=>{console.log(t),localStorage.setItem("categories",JSON.stringify(t))})}defaultApiOptions(){const t={keyword:null,category:null,page:1,limit:6};localStorage.setItem("options",JSON.stringify(t))}getApiOptions(){return JSON.parse(localStorage.getItem("options"))}setApiOptions(t,s){JSON.parse(localStorage.getItem("options")),options[t]=s}addToCart(t){const n=JSON.parse(localStorage.getItem("products")).find(o=>o._id===t);if(console.log(n),localStorage.getItem("cart")){const o=JSON.parse(localStorage.getItem("cart"));return localStorage.setItem("cart",JSON.stringify(o))}else return localStorage.setItem("cart",JSON.stringify(n))}getFromStorage(t){return JSON.parse(localStorage.getItem(`${t}`))}removeFromCart(t){localStorage.getItem("products"),JSON.parce(localStorage.getItem("cart"))}clearCart(){}saveOptionsToFoodService(t){i.perPage=t.limit,i.currentPage=t.page,i.category=t.category,i.searchQuerry=t.keyword}}class P{constructor(){this.URL="https://food-boutique.b.goit.study/api",this.currentPage=1,this.perPage=6,this.searchQuerry="",this.category=""}getBasicFoodList(){return window.innerWidth>=768&&window.innerWidth<1440?this.perPage=8:window.innerWidth>=1440&&(this.perPage=9),c.get(`${this.URL}/products?limit=${this.perPage}`).then(t=>t.data)}getFoodListWithOptions(){return window.innerWidth>=768&&window.innerWidth<1440?this.perPage=8:window.innerWidth>=1440&&(this.perPage=9),c.get(`${this.URL}/products?page=${this.currentPage}&limit=${this.perPage}&keyword=${this.searchQuerry}&category=${this.category}`).then(t=>t.data)}findProductById(t){return c.get(`${this.URL}/products/${t}`).then(s=>s.data)}getPopular(){return c.get(`${this.URL}/products/popular`).then(t=>t.data)}getDiscount(){return c.get(`${this.URL}/products/discount`).then(t=>t.data)}getCategories(){return c.get(`${this.URL}/products/categories`).then(t=>t.data)}resetPageCounter(){this.currentPage=1}incrementPage(){this.currentPage+=1}resetSearchQuerry(){this.searchQuerry=""}resetCategory(){this.category=""}subscribe(t){c.post(`${this.URL}/subscription`,{email:t})}order(t,s){c.post(`${this.URL}/orders`,{email:t,products:s})}}const S=document.querySelector(".filter-box__list"),C=document.querySelector(".popular-products__list"),b=document.querySelector(".discount-products__list"),T=document.querySelector(".popular-products__list-responsive"),N=document.querySelector(".discount-products__list-responsive"),u=new O,i=new P;document.addEventListener("click",function(e){if(e.target.classList.contains("cart-img-products")){const t=e.target,s="../img/checked.svg";t.src=s}});g();A();D();function g(){i.getBasicFoodList().then(e=>{console.log(e),S.innerHTML=$(e.results),u.saveAllToLocalStorage(e.results),u.defaultApiOptions()}).catch(e=>{})}function d(){const e=u.getApiOptions();i.getFoodListWithOptions(e).then(t=>{S.innerHTML=$(t.results),u.saveAllToLocalStorage(t.results)}).catch(t=>{})}function A(){i.getPopular().then(e=>{C.innerHTML=h(e),T.innerHTML=h(e)}).catch(e=>{})}function D(){i.getDiscount().then(e=>{b.innerHTML=f(e),N.innerHTML=f(e)}).catch(e=>{})}function $(e){return e.map(({_id:t,name:s,img:n,category:o,price:r,popularity:a,size:p,is10PercentOff:m})=>`<li class="product-card" data-id=${t}>
        ${m?'<img class="discount-icon-products" src="../img/discount.svg" alt="Discount" />':""}
          <div class="img-container"><a href="${n}"><img class="product-card__img" src="${n}" alt="${s}" loading="lazy" /></a>
          </div>
          <div class="info">      
            <h2 class="info__title">${s}</h2>
            <div class="info-wrapper">
              <p class="info-wrapper__product">Category:<span>${o}</span></p>
              <p class="info-wrapper__product">Size:<span>${p}</span></p>
              <p class="info-wrapper__product">Popularity:<span>${a}</span></p>
            </div>
            <div class="info-wrapper__price-container" >
              <p class="info__price">$${r}</p> 
              <img src="./img/cart.svg" alt="cart" class="main-cart-icon"/>
            </div>     
          </div>
        </li>`).join("")}function h(e){return e.map(({_id:t,name:s,img:n,category:o,popularity:r,size:a,is10PercentOff:p})=>`      
        <li class="popular-item" data-id="${t}">
          ${p?'<img class="discount-icon-popular" src="./img/discount.svg" alt="Discount" /><img class="popular-cart-img-down" src="./img/cartLight.svg" alt="cart" />':'<img class="popular-cart-img" src="./img/cartLight.svg" alt="cart" />'}
          <div class="popular-img-container"><img class="popular-item__img" src="${n}" alt="${s}" loading="lazy" /></div>
          <div class="popular-info">
            <h3 class="popular-info__title">${s}</h3>
            <div class="info-wrapper">
              <p class="info-wrapper__product">Category:<span>${o}</span></p>
              <p class="info-wrapper__product">Size:<span>${a}</span></p>
              <p class="info-wrapper__product">Popularity:<span>${r}</span></p>
            </div>             
          </div>
        </li>`).slice(0,5).join("")}function f(e){return e.map(({_id:t,name:s,img:n,price:o})=>`      
      <li class="discount-item" data-id="${t}">
   
       <img class="discount-cheap" src="./img/discount.svg" alt="Discount" /> 
      <div class="discount-img-container"><a href="${n}"><img class="discount-item__img" src="${n}" alt="${s}" loading="lazy" /></a>
      </div>
      <div class="discount-info">
        <h3 class="discount-info__title">${s}</h3>
        <div class="discount-img-wrapper">
        <p class="discount-info__price">$${o}</p>
         <img class="cart-img-products" src="./img/cart.svg" alt="cart" /> 
        </div>        
      </div>
    </li>`).slice(0,2).join("")}window.addEventListener("resize",M);function M(){const e=window.innerWidth;e>=768&&e<1440&&i.perPage!==8?(i.perPage=8,d()):e>=1440&&i.perPage!==9?(i.perPage=9,d()):e<768&&i.perPage!==6&&(i.perPage=6,d())}const w=document.querySelector(".submit-form"),l=document.querySelector(".categories"),v=document.querySelector(".filter-box__list");document.addEventListener("DOMContentLoaded",function(){w.elements.search.value="",l.value=""});w.addEventListener("submit",e=>{e.preventDefault();const t=e.target.elements.search.value;i.searchQuerry=t;const s=u.getApiOptions();s.keyword=t||null,localStorage.setItem("options",JSON.stringify(s)),t?d():(i.resetSearchQuerry(),g())});l.addEventListener("change",function(){const e=l.value,t=u.getApiOptions();t.category=e||null,localStorage.setItem("options",JSON.stringify(t)),l.value==="show-all"?(v.innerHTML="",g()):(i.category=e,v.innerHTML="",d())});i.getCategories().then(e=>{const t=document.createElement("option");t.value="",t.textContent="Categories",t.disabled=!0,t.selected=!0;const s=e.map(o=>{const r=document.createElement("option");return r.value=o,r.textContent=o,r}),n=k();s.push(n),l.appendChild(t),l.append(...s)});function k(){const e=document.createElement("option");return e.textContent="Show All",e.value="show-all",e}const y=document.querySelector(".modal"),E=document.querySelector(".main-products");E.addEventListener("click",J);async function J(e){const t=e.target.closest("li");if(t){const s=await i.findProductById(t.dataset.id);console.log(s),y.innerHTML=q(s)}y.style.display="block"}function q(e){return`
  <div class="backdrop"></div>
  <div class='modal-content'>
  <button class='modal-btn-close'>
    <svg class='close-sharp' width='16' height='16'>
      <use href='./img/icons.svg#icon-ion_close-sharp'></use>
    </svg></button>
  <div class='modal-img-container'>
    <img src="${e.img}" alt="${e.name}" class="modal-image" /></div>
  <div class='modal-info'>
    <h2 class='modal-title'>${e.name}</h2>
    <div class='modal-info-wrapper'>
              <p class='modal-product'>Category: <span>${e.category}</span></p>
              <p class='modal-product'>Size: <span>${e.size}</span></p>
              <p class='modal-product'>Popularity: <span>${e.popularity}</span></p>
    </div>
    <p class='modal-info-desc'>${e.desc}</p>
  </div>
    <p class='modal-price'>$${e.price}</p>
    <button class="add-to-cart-btn">Add to
    <svg class='modal-cart' width='18' height='18'>
    <use href='./img/icons.svg#icon-heroicons-solid_shopping-cart'></use>
    </svg>
    </button>
  </div>`}
//# sourceMappingURL=commonHelpers2.js.map
