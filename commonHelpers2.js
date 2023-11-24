/* empty css                      */import{a as n}from"./assets/vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();class f{constructor(){}saveInStorage(t,s){localStorage.setItem(t,JSON.stringify(s))}saveAllToLocalStorage(t){localStorage.setItem("products",JSON.stringify(t))}saveCategories(){if(!localStorage.getItem("categories"))return a.getCategories().then(t=>{console.log(t),localStorage.setItem("categories",JSON.stringify(t))})}filter(){localStorage.setItem("filter","{keyword:null, category: null, page: 1, limit: 6}")}addToCart(t){const s=JSON.parse(localStorage.getItem("products"));localStorage.getItem("cart")||localStorage.setItem("cart","");const i=s.find(o=>o._id===t),r=JSON.parse(localStorage.getItem("cart")).push(i);localStorage.setItem("cart",JSON.stringify(`${r}`))}getFromStorage(t){return JSON.parse(localStorage.getItem(`${t}`))}removeFromCart(){}clearCart(){}}class m{constructor(){this.URL="https://food-boutique.b.goit.study/api",this.currentPage=1,this.perPage=6,this.searchQuerry="",this.category=""}getFoodList(){return window.innerWidth>=768&&window.innerWidth<1440?this.perPage=8:window.innerWidth>=1440&&(this.perPage=9),n.get(`${this.URL}/products?page=${this.currentPage}&limit=${this.perPage}&keyword=${this.searchQuerry}&category=${this.category}`).then(t=>t.data)}findProductById(t){return n.get(`${this.URL}/products/${t}`).then(s=>s.data)}getPopular(){return n.get(`${this.URL}/products/popular`).then(t=>t.data)}getDiscount(){return n.get(`${this.URL}/products/discount`).then(t=>t.data)}getCategories(){return n.get(`${this.URL}/products/categories`).then(t=>t.data)}resetPageCounter(){this.currentPage=1}incrementPage(){this.currentPage+=1}subscribe(t){n.post(`${this.URL}/subscription`,{email:t})}order(t,s){n.post(`${this.URL}/orders`,{email:t,products:s})}}const h=document.querySelector(".filter-box__list"),_=document.querySelector(".popular-products__list"),$=document.querySelector(".discount-products__list"),v=document.querySelector(".popular-products__list-responsive"),y=document.querySelector(".discount-products__list-responsive"),S=new f,a=new m;document.addEventListener("click",function(e){if(e.target.classList.contains("cart-img-products")){const t=e.target,s="../img/checked.svg";t.src=s}});l();L();w();function l(){a.getFoodList().then(e=>{h.innerHTML=P(e.results),S.saveAllToLocalStorage(e.results)}).catch(e=>{})}function L(){a.getPopular().then(e=>{_.innerHTML=p(e),v.innerHTML=p(e)}).catch(e=>{})}function w(){a.getDiscount().then(e=>{$.innerHTML=d(e),y.innerHTML=d(e)}).catch(e=>{})}function P(e){return e.map(({_id:t,name:s,img:i,category:r,price:o,popularity:c,size:u,is10PercentOff:g})=>`<li class="product-card data-id="${t}">
       ${g?'<img class="discount-icon-products" src="../../assets/discount.svg" alt="Discount" />':""}
      <div class="img-container"><a href="${i}"><img class="product-card__img" src="${i}" alt="${s}" loading="lazy" /></a>
      </div>
      <div class="info">      
        <h2 class="info__title">${s}</h2>
        <div class="info-wrapper">
        <p class="info-wrapper__product">Category:<span>${r}</span></p>
        <p class="info-wrapper__product">Size:<span>${u}</span></p>
        <p class="info-wrapper__product">Popularity:<span>${c}</span></p>
        </div>
        <div class="info-wrapper__price-container" >
        <p class="info__price">$${o}</p>       
          <img class="cart-img-products" src="/project-code_busters09/img/cart.svg" alt="cart" />
        </div>     
      </div>
    </li>`).join("")}function p(e){return e.map(({_id:t,name:s,img:i,category:r,popularity:o,size:c,is10PercentOff:u})=>`      
      <li class="popular-item" data-id="${t}">
      ${u?'<img class="discount-icon-popular" src="./img/discount.svg" alt="Discount" />  <img class="popular-cart-img-down" src="./img/cartLight.svg" alt="cart" />':'<img class="popular-cart-img" src="./img/cartLight.svg" alt="cart" />'}
       
      <div class="popular-img-container"><a href="${i}"><img class="popular-item__img" src="${i}" alt="${s}" loading="lazy" /></a>
      </div>
      <div class="popular-info">
        <h3 class="popular-info__title">${s}</h3>
        <div class="info-wrapper">
        <p class="info-wrapper__product">Category:<span>${r}</span></p>
        <p class="info-wrapper__product">Size:<span>${c}</span></p>
        <p class="info-wrapper__product">Popularity:<span>${o}</span></p>
        </div>             
      </div>
    </li>`).slice(0,5).join("")}function d(e){return e.map(({_id:t,name:s,img:i,price:r})=>`      
      <li class="discount-item" data-id="${t}">
       <img class="discount-cheap" src="./img/discount.svg" alt="cart" />  
      <div class="discount-img-container"><a href="${i}"><img class="discount-item__img" src="${i}" alt="${s}" loading="lazy" /></a>
      </div>
      <div class="discount-info">
        <h3 class="discount-info__title">${s}</h3>
        <div class="discount-img-wrapper">
        <p class="discount-info__price">$${r}</p>
         <img class="cart-img-products" src="./img/cart.svg" alt="cart" />      
        </div>        
      </div>
    </li>`).slice(0,2).join("")}window.addEventListener("resize",I);function I(){const e=window.innerWidth;e>=768&&e<1440&&a.perPage!==8?(a.perPage=8,l()):e>=1440&&a.perPage!==9?(a.perPage=9,l()):e<768&&a.perPage!==6&&(a.perPage=6,l())}
//# sourceMappingURL=commonHelpers2.js.map
