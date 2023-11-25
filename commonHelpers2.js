/* empty css                      */import{a}from"./assets/vendor-a61d8330.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();class L{constructor(){}saveInStorage(e,r){localStorage.setItem(e,JSON.stringify(r))}saveAllToLocalStorage(e){localStorage.setItem("products",JSON.stringify(e))}saveCategories(){if(!localStorage.getItem("categories"))return i.getCategories().then(e=>{console.log(e),localStorage.setItem("categories",JSON.stringify(e))})}filter(){localStorage.setItem("filter","{keyword:null, category: null, page: 1, limit: 6}")}addToCart(e){const r=JSON.parse(localStorage.getItem("products"));localStorage.getItem("cart")||localStorage.setItem("cart","");const n=r.find(o=>o._id===e),s=JSON.parse(localStorage.getItem("cart")).push(n);localStorage.setItem("cart",JSON.stringify(`${s}`))}getFromStorage(e){return JSON.parse(localStorage.getItem(`${e}`))}removeFromCart(){}clearCart(){}}class y{constructor(){this.URL="https://food-boutique.b.goit.study/api",this.currentPage=1,this.perPage=6,this.searchQuerry="",this.category=""}getFoodList(){return window.innerWidth>=768&&window.innerWidth<1440?this.perPage=8:window.innerWidth>=1440&&(this.perPage=9),a.get(`${this.URL}/products?page=${this.currentPage}&limit=${this.perPage}&keyword=${this.searchQuerry}&category=${this.category}`).then(e=>e.data)}findProductById(e){return a.get(`${this.URL}/products/${e}`).then(r=>r.data)}getPopular(){return a.get(`${this.URL}/products/popular`).then(e=>e.data)}getDiscount(){return a.get(`${this.URL}/products/discount`).then(e=>e.data)}getCategories(){return a.get(`${this.URL}/products/categories`).then(e=>e.data)}resetPageCounter(){this.currentPage=1}incrementPage(){this.currentPage+=1}resetSearchQuerry(){this.searchQuerry=""}resetCategory(){this.category=""}subscribe(e){a.post(`${this.URL}/subscription`,{email:e})}order(e,r){a.post(`${this.URL}/orders`,{email:e,products:r})}}const _="/project-code_busters09/assets/icons-44b879f2.svg",S=document.querySelector(".filter-box__list"),$=document.querySelector(".popular-products__list"),w=document.querySelector(".discount-products__list"),P=document.querySelector(".popular-products__list-responsive"),C=document.querySelector(".discount-products__list-responsive"),I=new L,i=new y;document.addEventListener("click",function(t){if(t.target.classList.contains("cart-img-products")){const e=t.target,r="../img/checked.svg";e.src=r}});p();b();M();function p(){i.getFoodList().then(t=>{S.innerHTML=d(t.results),I.saveAllToLocalStorage(t.results)}).catch(t=>{})}function b(){i.getPopular().then(t=>{$.innerHTML=m(t),P.innerHTML=m(t)}).catch(t=>{})}function M(){i.getDiscount().then(t=>{w.innerHTML=h(t),C.innerHTML=h(t)}).catch(t=>{})}function d(t){return t.map(({_id:e,name:r,img:n,category:s,price:o,popularity:c,size:g,is10PercentOff:v})=>`<li class="product-card data-id="${e}">
        ${v?'<img class="discount-icon-products" src="../../assets/discount.svg" alt="Discount" />':""}
      <div class="img-container"><a href="${n}"><img class="product-card__img" src="${n}" alt="${r}" loading="lazy" /></a>
      </div>
      <div class="info">      
        <h2 class="info__title">${r}</h2>
        <div class="info-wrapper">
        <p class="info-wrapper__product">Category:<span>${s}</span></p>
        <p class="info-wrapper__product">Size:<span>${g}</span></p>
        <p class="info-wrapper__product">Popularity:<span>${c}</span></p>
        </div>
        <div class="info-wrapper__price-container" >
          <p class="info__price">$${o}</p>       
          <svg class="cart-img-products" width="34" height="34">
            <use href="${_}#icon-heroicons-solid_shopping-cart"></use>
          </svg>
        </div>     
      </div>
    </li>`).join("")}function m(t){return t.map(({_id:e,name:r,img:n,category:s,popularity:o,size:c,is10PercentOff:g})=>`      
      <li class="popular-item" data-id="${e}">
      ${g?'<img class="discount-icon-popular" src="./img/discount.svg" alt="Discount" />  <img class="popular-cart-img-down" src="./img/cartLight.svg" alt="cart" />':'<img class="popular-cart-img" src="./img/cartLight.svg" alt="cart" />'}
       
      <div class="popular-img-container"><img class="popular-item__img" src="${n}" alt="${r}" loading="lazy" />
      </div>
      <div class="popular-info">
        <h3 class="popular-info__title">${r}</h3>
        <div class="info-wrapper">
        <p class="info-wrapper__product">Category:<span>${s}</span></p>
        <p class="info-wrapper__product">Size:<span>${c}</span></p>
        <p class="info-wrapper__product">Popularity:<span>${o}</span></p>
        </div>             
      </div>
    </li>`).slice(0,5).join("")}function h(t){return t.map(({_id:e,name:r,img:n,price:s})=>`      
      <li class="discount-item" data-id="${e}">
       <img class="discount-cheap" src="./img/discount.svg" alt="cart" />  
      <div class="discount-img-container"><a href="${n}"><img class="discount-item__img" src="${n}" alt="${r}" loading="lazy" /></a>
      </div>
      <div class="discount-info">
        <h3 class="discount-info__title">${r}</h3>
        <div class="discount-img-wrapper">
        <p class="discount-info__price">$${s}</p>
         <img class="cart-img-products" src="./img/cart.svg" alt="cart" />      
        </div>        
      </div>
    </li>`).slice(0,2).join("")}window.addEventListener("resize",O);function O(){const t=window.innerWidth;t>=768&&t<1440&&i.perPage!==8?(i.perPage=8,p()):t>=1440&&i.perPage!==9?(i.perPage=9,p()):t<768&&i.perPage!==6&&(i.perPage=6,p())}const f=document.querySelector(".submit-form"),u=document.querySelector(".categories"),l=document.querySelector(".filter-box__list");document.addEventListener("DOMContentLoaded",function(){f.elements.search.value="",u.value=""});f.addEventListener("submit",t=>{t.preventDefault();const e=t.target.elements.search.value;i.searchQuerry=e,i.getFoodList().then(r=>{l.innerHTML=d(r.results)}).catch(r=>{throw console.error("Error fetching food list:",r.message),r})});u.addEventListener("change",function(){const t=u.value;u.value==="show-all"?(l.innerHTML="",i.getFoodList().then(e=>{l.innerHTML=d(e.results)})):(i.category=t,l.innerHTML="",i.getFoodList().then(e=>{l.innerHTML=d(e.results)}).catch(e=>{l.innerHTML=""}).finally(()=>{}))});i.getCategories().then(t=>{const e=document.createElement("option");e.value="",e.textContent="Categories",e.disabled=!0,e.selected=!0;const r=t.map(s=>{const o=document.createElement("option");return o.value=s,o.textContent=s,o}),n=T();r.push(n),u.appendChild(e),u.append(...r)});function T(){const t=document.createElement("option");return t.textContent="Show All",t.value="show-all",t}
//# sourceMappingURL=commonHelpers2.js.map
