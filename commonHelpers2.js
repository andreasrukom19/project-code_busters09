/* empty css                      */import{a}from"./assets/vendor-a365bedd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();class u{constructor(){this.URL="https://food-boutique.b.goit.study/api",this.currentPage=1,this.perPage=9,this.searchQuerry="",this.category=""}getFoodList(){return a.get(`${this.URL}/products?page=${this.currentPage}&limit=${this.perPage}&keyword=${this.searchQuerry}&category=${this.category}`).then(t=>t.data)}findProductById(t){return a.get(`${this.URL}/products/${t}`).then(o=>o.data)}getPopular(){return a.get(`${this.URL}/products/popular?limit=${this.perPage}`).then(t=>t.data)}getDiscount(){return a.get(`${this.URL}/products/discount`).then(t=>t.data)}getCategories(){return a.get(`${this.URL}/products/categories`).then(t=>t.data)}resetPageCounter(){this.currentPage=1}incrementPage(){this.currentPage+=1}subscribe(t){a.post(`${this.URL}/subscription`,{email:t})}order(t,o){a.post(`${this.URL}/orders`,{email:t,products:o})}}const g=document.querySelector(".filter-box__list"),f=document.querySelector(".popular-products__list"),m=document.querySelector(".discount-products__list"),h=document.querySelector(".popular-products__list-responsive"),_=document.querySelector(".discount-products__list-responsive"),n=new u;n.getFoodList().then(e=>{g.innerHTML=$(e.results)}).catch(e=>{});n.getPopular().then(e=>{f.innerHTML=l(e),h.innerHTML=l(e)}).catch(e=>{});n.getDiscount().then(e=>{m.innerHTML=p(e),_.innerHTML=p(e)}).catch(e=>{});function $(e){return e.map(({name:t,img:o,category:i,price:r,popularity:s,size:c})=>`<li class="product-card">
      <div class="img-container"><a href="${o}"><img class="product-card__img" src="${o}" alt="${t}" loading="lazy" /></a>
      </div>
      <div class="info">
        <h2 class="info__title">${t}</h2>
        <div class="info-wrapper">
        <p class="info-wrapper__product">Category:<span>${i}</span></p>
        <p class="info-wrapper__product">Size:<span>${c}</span></p>
        <p class="info-wrapper__product">Popularity:<span>${s}</span></p>
        </div>
        <div class="info-wrapper__price-container" >
        <p class="info__price">$${r}</p>
        <img class="cart-img-products" src="../img/cart.svg" alt="cart" />
        </div>     
      </div>
    </li>`).join("")}function l(e){return e.map(({name:t,img:o,category:i,popularity:r,size:s})=>`      
      <li class="popular-item">
       <img class="popular-cart-img" src="../img/cartLight.svg" alt="cart" />  
      <div class="popular-img-container"><a href="${o}"><img class="popular-item__img" src="${o}" alt="${t}" loading="lazy" /></a>
      </div>
      <div class="popular-info">
        <h3 class="popular-info__title">${t}</h3>
        <div class="info-wrapper">
        <p class="info-wrapper__product">Category:<span>${i}</span></p>
        <p class="info-wrapper__product">Size:<span>${s}</span></p>
        <p class="info-wrapper__product">Popularity:<span>${r}</span></p>
        </div>             
      </div>
    </li>`).slice(0,5).join("")}function p(e){return e.map(({name:t,img:o,price:i})=>`      
      <li class="discount-item">
       <img class="discount-cheap" src="../img/discount.svg" alt="cart" />  
      <div class="discount-img-container"><a href="${o}"><img class="discount-item__img" src="${o}" alt="${t}" loading="lazy" /></a>
      </div>
      <div class="discount-info">
        <h3 class="discount-info__title">${t}</h3>
        <div class="discount-img-wrapper">
        <p class="discount-info__price">$${i}</p>
         <img class="cart-img-products" src="../img/cart.svg" alt="cart" />      
        </div>        
      </div>
    </li>`).slice(0,2).join("")}a.defaults.baseURL="https://food-boutique.b.goit.study/api";const v=new u;class y{constructor(){}saveAllToLocalStorage(){if(!localStorage.getItem("products"))return v.getFoodList().then(t=>{localStorage.setItem("products",JSON.stringify(t.results))})}addToCart(t){const o=JSON.parse(localStorage.getItem("products"));localStorage.getItem("cart")||localStorage.setItem("cart");const i=o.find(s=>s._id===t),r=JSON.parse(localStorage.getItem("cart")).push(i);localStorage.setItem("cart",JSON.stringify(`${r}`))}getFromStorage(t){return JSON.parse(localStorage.getItem(`${t}`))}removeFromCart(){}clearCart(){}}const d=new y;d.addToCart("640c2dd963a319ea671e383b");d.addToCart("640c2dd963a319ea671e3660");
//# sourceMappingURL=commonHelpers2.js.map
