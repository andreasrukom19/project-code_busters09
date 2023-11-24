/* empty css                      */import{a as c}from"./assets/vendor-a365bedd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerpolicy&&(e.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?e.credentials="include":r.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(r){if(r.ep)return;r.ep=!0;const e=i(r);fetch(r.href,e)}})();class l{constructor(){this.URL="https://food-boutique.b.goit.study/api",this.currentPage=1,this.perPage=9,this.searchQuerry="",this.category=""}getFoodList(){return c.get(`${this.URL}/products?page=${this.currentPage}&limit=${this.perPage}&keyword=${this.searchQuerry}&category=${this.category}`).then(t=>t.data)}findProductById(t){return c.get(`${this.URL}/products/${t}`).then(i=>i.data)}getPopular(){return c.get(`${this.URL}/products/popular?limit=${this.perPage}`).then(t=>t.data)}getDiscount(){return c.get(`${this.URL}/products/discount`).then(t=>t.data)}getCategories(){return c.get(`${this.URL}/products/categories`).then(t=>t.data)}resetPageCounter(){this.currentPage=1}incrementPage(){this.currentPage+=1}subscribe(t){c.post(`${this.URL}/subscription`,{email:t})}order(t,i){c.post(`${this.URL}/orders`,{email:t,products:i})}}const g=document.querySelector(".filter-box__list"),f=document.querySelector(".popular-products__list"),m=document.querySelector(".discount-products__list"),h=document.querySelector(".popular-products__list-responsive"),_=document.querySelector(".discount-products__list-responsive"),n=new l;n.getFoodList().then(s=>{g.innerHTML=$(s.results)}).catch(s=>{});n.getPopular().then(s=>{f.innerHTML=u(s),h.innerHTML=u(s)}).catch(s=>{});n.getDiscount().then(s=>{m.innerHTML=p(s),_.innerHTML=p(s)}).catch(s=>{});function $(s){return s.map(({name:t,img:i,category:o,price:r,popularity:e,size:a,is10PercentOff:d})=>`<li class="product-card">
       ${d?'<img class="discount-icon-products" src="../img/discount.svg" alt="Discount" />':""}
      <div class="img-container"><a href="${i}"><img class="product-card__img" src="${i}" alt="${t}" loading="lazy" /></a>
      </div>
      <div class="info">      
        <h2 class="info__title">${t}</h2>
        <div class="info-wrapper">
        <p class="info-wrapper__product">Category:<span>${o}</span></p>
        <p class="info-wrapper__product">Size:<span>${a}</span></p>
        <p class="info-wrapper__product">Popularity:<span>${e}</span></p>
        </div>
        <div class="info-wrapper__price-container" >
        <p class="info__price">$${r}</p>       
        <img class="cart-img-products" src="../img/cart.svg" alt="cart" />
        </div>     
      </div>
    </li>`).join("")}function u(s){return s.map(({name:t,img:i,category:o,popularity:r,size:e,is10PercentOff:a})=>`      
      <li class="popular-item">
      ${a?'<img class="discount-icon-popular" src="../img/discount.svg" alt="Discount" />  <img class="popular-cart-img-down" src="../img/cartLight.svg" alt="cart" />':'<img class="popular-cart-img" src="../img/cartLight.svg" alt="cart" />'}
       
      <div class="popular-img-container"><a href="${i}"><img class="popular-item__img" src="${i}" alt="${t}" loading="lazy" /></a>
      </div>
      <div class="popular-info">
        <h3 class="popular-info__title">${t}</h3>
        <div class="info-wrapper">
        <p class="info-wrapper__product">Category:<span>${o}</span></p>
        <p class="info-wrapper__product">Size:<span>${e}</span></p>
        <p class="info-wrapper__product">Popularity:<span>${r}</span></p>
        </div>             
      </div>
    </li>`).slice(0,5).join("")}function p(s){return s.map(({name:t,img:i,price:o})=>`      
      <li class="discount-item">
       <img class="discount-cheap" src="../img/discount.svg" alt="cart" />  
      <div class="discount-img-container"><a href="${i}"><img class="discount-item__img" src="${i}" alt="${t}" loading="lazy" /></a>
      </div>
      <div class="discount-info">
        <h3 class="discount-info__title">${t}</h3>
        <div class="discount-img-wrapper">
        <p class="discount-info__price">$${o}</p>
         <img class="cart-img-products" src="../img/cart.svg" alt="cart" />      
        </div>        
      </div>
    </li>`).slice(0,2).join("")}c.defaults.baseURL="https://food-boutique.b.goit.study/api";new l;localStorage.getFromLocalStorage();
//# sourceMappingURL=commonHelpers2.js.map
