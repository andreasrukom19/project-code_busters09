/* empty css                      */import{a}from"./assets/vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();class L{constructor(){}saveInStorage(t,r){localStorage.setItem(t,JSON.stringify(r))}saveAllToLocalStorage(t){localStorage.setItem("products",JSON.stringify(t))}saveCategories(){if(!localStorage.getItem("categories"))return i.getCategories().then(t=>{console.log(t),localStorage.setItem("categories",JSON.stringify(t))})}filter(){localStorage.setItem("filter","{keyword:null, category: null, page: 1, limit: 6}")}addToCart(t){const r=JSON.parse(localStorage.getItem("products"));localStorage.getItem("cart")||localStorage.setItem("cart","");const n=r.find(s=>s._id===t),o=JSON.parse(localStorage.getItem("cart")).push(n);localStorage.setItem("cart",JSON.stringify(`${o}`))}getFromStorage(t){return JSON.parse(localStorage.getItem(`${t}`))}removeFromCart(){}clearCart(){}}class _{constructor(){this.URL="https://food-boutique.b.goit.study/api",this.currentPage=1,this.perPage=6,this.searchQuerry="",this.category=""}getFoodList(){return window.innerWidth>=768&&window.innerWidth<1440?this.perPage=8:window.innerWidth>=1440&&(this.perPage=9),a.get(`${this.URL}/products?page=${this.currentPage}&limit=${this.perPage}&keyword=${this.searchQuerry}&category=${this.category}`).then(t=>t.data)}findProductById(t){return a.get(`${this.URL}/products/${t}`).then(r=>r.data)}getPopular(){return a.get(`${this.URL}/products/popular`).then(t=>t.data)}getDiscount(){return a.get(`${this.URL}/products/discount`).then(t=>t.data)}getCategories(){return a.get(`${this.URL}/products/categories`).then(t=>t.data)}resetPageCounter(){this.currentPage=1}incrementPage(){this.currentPage+=1}subscribe(t){a.post(`${this.URL}/subscription`,{email:t})}order(t,r){a.post(`${this.URL}/orders`,{email:t,products:r})}}const $=document.querySelector(".filter-box__list"),y=document.querySelector(".popular-products__list"),S=document.querySelector(".discount-products__list"),w=document.querySelector(".popular-products__list-responsive"),P=document.querySelector(".discount-products__list-responsive"),C=new L,i=new _;document.addEventListener("click",function(e){if(e.target.classList.contains("cart-img-products")){const t=e.target,r="../img/checked.svg";t.src=r}});p();I();M();function p(){i.getFoodList().then(e=>{$.innerHTML=d(e.results),C.saveAllToLocalStorage(e.results)}).catch(e=>{})}function I(){i.getPopular().then(e=>{y.innerHTML=m(e),w.innerHTML=m(e)}).catch(e=>{})}function M(){i.getDiscount().then(e=>{S.innerHTML=f(e),P.innerHTML=f(e)}).catch(e=>{})}function d(e){return e.map(({_id:t,name:r,img:n,category:o,price:s,popularity:c,size:g,is10PercentOff:v})=>`<li class="product-card data-id="${t}">
       ${v?'<img class="discount-icon-products" src="../../assets/discount.svg" alt="Discount" />':""}
      <div class="img-container"><a href="${n}"><img class="product-card__img" src="${n}" alt="${r}" loading="lazy" /></a>
      </div>
      <div class="info">      
        <h2 class="info__title">${r}</h2>
        <div class="info-wrapper">
        <p class="info-wrapper__product">Category:<span>${o}</span></p>
        <p class="info-wrapper__product">Size:<span>${g}</span></p>
        <p class="info-wrapper__product">Popularity:<span>${c}</span></p>
        </div>
        <div class="info-wrapper__price-container" >
        <p class="info__price">$${s}</p>       
          <img class="cart-img-products" src="/project-code_busters09/img/cart.svg" alt="cart" />
        </div>     
      </div>
    </li>`).join("")}function m(e){return e.map(({_id:t,name:r,img:n,category:o,popularity:s,size:c,is10PercentOff:g})=>`      
      <li class="popular-item" data-id="${t}">
      ${g?'<img class="discount-icon-popular" src="./img/discount.svg" alt="Discount" />  <img class="popular-cart-img-down" src="./img/cartLight.svg" alt="cart" />':'<img class="popular-cart-img" src="./img/cartLight.svg" alt="cart" />'}
       
      <div class="popular-img-container"><a href="${n}"><img class="popular-item__img" src="${n}" alt="${r}" loading="lazy" /></a>
      </div>
      <div class="popular-info">
        <h3 class="popular-info__title">${r}</h3>
        <div class="info-wrapper">
        <p class="info-wrapper__product">Category:<span>${o}</span></p>
        <p class="info-wrapper__product">Size:<span>${c}</span></p>
        <p class="info-wrapper__product">Popularity:<span>${s}</span></p>
        </div>             
      </div>
    </li>`).slice(0,5).join("")}function f(e){return e.map(({_id:t,name:r,img:n,price:o})=>`      
      <li class="discount-item" data-id="${t}">
       <img class="discount-cheap" src="./img/discount.svg" alt="cart" />  
      <div class="discount-img-container"><a href="${n}"><img class="discount-item__img" src="${n}" alt="${r}" loading="lazy" /></a>
      </div>
      <div class="discount-info">
        <h3 class="discount-info__title">${r}</h3>
        <div class="discount-img-wrapper">
        <p class="discount-info__price">$${o}</p>
         <img class="cart-img-products" src="./img/cart.svg" alt="cart" />      
        </div>        
      </div>
    </li>`).slice(0,2).join("")}window.addEventListener("resize",O);function O(){const e=window.innerWidth;e>=768&&e<1440&&i.perPage!==8?(i.perPage=8,p()):e>=1440&&i.perPage!==9?(i.perPage=9,p()):e<768&&i.perPage!==6&&(i.perPage=6,p())}const h=document.querySelector(".submit-form"),u=document.querySelector(".categories"),l=document.querySelector(".filter-box__list");document.addEventListener("DOMContentLoaded",function(){h.elements.search.value="",u.value=""});h.addEventListener("submit",e=>{e.preventDefault();const t=e.target.elements.search.value;i.searchQuerry=t,i.getFoodList().then(r=>{l.innerHTML=d(r.results)}).catch(r=>{throw console.error("Error fetching food list:",r.message),r})});u.addEventListener("change",function(){const e=u.value;u.value==="show-all"?(l.innerHTML="",i.getFoodList().then(t=>{l.innerHTML=d(t.results)})):(i.category=e,l.innerHTML="",i.getFoodList().then(t=>{l.innerHTML=d(t.results)}).catch(t=>{l.innerHTML=""}).finally(()=>{}))});i.getCategories().then(e=>{const t=document.createElement("option");t.value="",t.textContent="Categories",t.disabled=!0,t.selected=!0;const r=e.map(o=>{const s=document.createElement("option");return s.value=o,s.textContent=o,s}),n=b();r.push(n),u.appendChild(t),u.append(...r)});function b(){const e=document.createElement("option");return e.textContent="Show All",e.value="show-all",e}
//# sourceMappingURL=commonHelpers2.js.map
