import{a as n}from"./assets/vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();class p{constructor(){this.URL="https://food-boutique.b.goit.study/api",this.currentPage=1,this.perPage=9,this.searchQuerry="",this.category=""}getFoodList(){return n.get(`${this.URL}/products?page=${this.currentPage}&limit=${this.perPage}&keyword=${this.searchQuerry}&category=${this.category}`).then(t=>t.data)}findProductById(t){return n.get(`${this.URL}/products/${t}`).then(i=>i.data)}getPopular(){return n.get(`${this.URL}/products/popular?limit=${this.perPage}`).then(t=>t.data)}getDiscount(){return n.get(`${this.URL}/products/discount`).then(t=>t.data)}getCategories(){return n.get(`${this.URL}/products/categories`).then(t=>t.data)}resetPageCounter(){this.currentPage=1}incrementPage(){this.currentPage+=1}subscribe(t){n.post(`${this.URL}/subscription`,{email:t})}order(t,i){n.post(`${this.URL}/orders`,{email:t,products:i})}}const u=document.querySelector(".filter-box__list"),l=document.querySelector(".popular-products__list"),d=document.querySelector(".discount-products__list"),c=new p;c.getFoodList().then(r=>{u.innerHTML=f(r.results)}).catch(r=>{});c.getPopular().then(r=>{l.innerHTML=h(r)}).catch(r=>{});c.getDiscount().then(r=>{console.log("data",r),d.innerHTML=g(r)}).catch(r=>{});function f(r){return r.map(({name:t,img:i,category:o,price:e,popularity:s,size:a})=>`<li class="product-card">
      <div class="img-container"><a href="${i}"><img class="product-card__img" src="${i}" alt="${t}" loading="lazy" /></a>
      </div>
      <div class="info">
        <h2 class="info__title">${t}</h2>
        <div class="info-wrapper">
        <p class="info-wrapper__product">Category:<span>${o}</span></p>
        <p class="info-wrapper__product">Size:<span>${a}</span></p>
        <p class="info-wrapper__product">Popularity:<span>${s}</span></p>
        </div>     
        <p class="info__price">$${e}</p>
      </div>
    </li>`).join("")}function h(r){return r.map(({name:t,img:i,category:o,popularity:e,size:s})=>`      
      <li class="popular-item">
      <div class="popular-img-container"><a href="${i}"><img class="popular-item__img" src="${i}" alt="${t}" loading="lazy" /></a>
      </div>
      <div class="popular-info">
        <h3 class="popular-info__title">${t}</h3>
        <div class="info-wrapper">
        <p class="info-wrapper__product">Category:<span>${o}</span></p>
        <p class="info-wrapper__product">Size:<span>${s}</span></p>
        <p class="info-wrapper__product">Popularity:<span>${e}</span></p>
        </div>             
      </div>
    </li>`).slice(0,5).join("")}function g(r){return r.map(({name:t,img:i,price:o})=>`      
      <li class="discount-item">
      <div class="discount-img-container"><a href="${i}"><img class="discount-item__img" src="${i}" alt="${t}" loading="lazy" /></a>
      </div>
      <div class="discount-info">
        <h3 class="discount-info__title">${t}</h3>        
        <p class="discount-info__price">$${o}</p>      
      </div>
    </li>`).slice(0,2).join("")}
//# sourceMappingURL=commonHelpers2.js.map
