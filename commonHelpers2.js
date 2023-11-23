/* empty css                      */import{a}from"./assets/vendor-a365bedd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();class p{constructor(){this.URL="https://food-boutique.b.goit.study/api",this.currentPage=1,this.perPage=9,this.searchQuerry="",this.category=""}getFoodList(){return a.get(`${this.URL}/products?page=${this.currentPage}&limit=${this.perPage}&keyword=${this.searchQuerry}&category=${this.category}`).then(t=>t.data)}findProductById(t){return a.get(`${this.URL}/products/${t}`).then(s=>s.data)}getPopular(){return a.get(`${this.URL}/products/popular?limit=${this.perPage}`).then(t=>t.data)}getDiscount(){return a.get(`${this.URL}/products/discount`).then(t=>t.data)}getCategories(){return a.get(`${this.URL}/products/categories`).then(t=>t.data)}resetPageCounter(){this.currentPage=1}incrementPage(){this.currentPage+=1}subscribe(t){a.post(`${this.URL}/subscription`,{email:t})}order(t,s){a.post(`${this.URL}/orders`,{email:t,products:s})}}const u=document.querySelector(".filter-box__list"),l=document.querySelector(".popular-products__list"),d=document.querySelector(".discount-products__list"),c=new p;c.getFoodList().then(r=>{u.innerHTML=f(r.results)}).catch(r=>{});c.getPopular().then(r=>{l.innerHTML=g(r)}).catch(r=>{});c.getDiscount().then(r=>{console.log("data",r),d.innerHTML=h(r)}).catch(r=>{});function f(r){return r.map(({name:t,img:s,category:i,price:e,popularity:o,size:n})=>`<li class="product-card">
      <div class="img-container"><a href="${s}"><img class="product-card__img" src="${s}" alt="${t}" loading="lazy" /></a>
      </div>
      <div class="info">
        <h2 class="info__title">${t}</h2>
        <div class="info-wrapper">
        <p class="info-wrapper__product">Category:<span>${i}</span></p>
        <p class="info-wrapper__product">Size:<span>${n}</span></p>
        <p class="info-wrapper__product">Popularity:<span>${o}</span></p>
        </div>     
        <p class="info__price">$${e}</p>
      </div>
    </li>`).join("")}function g(r){return r.map(({name:t,img:s,category:i,popularity:e,size:o})=>`      
      <li class="popular-item">
      <div class="popular-img-container"><a href="${s}"><img class="popular-item__img" src="${s}" alt="${t}" loading="lazy" /></a>
      </div>
      <div class="popular-info">
        <h3 class="popular-info__title">${t}</h3>
        <div class="info-wrapper">
        <p class="info-wrapper__product">Category:<span>${i}</span></p>
        <p class="info-wrapper__product">Size:<span>${o}</span></p>
        <p class="info-wrapper__product">Popularity:<span>${e}</span></p>
        </div>             
      </div>
    </li>`).slice(0,5).join("")}function h(r){return r.map(({name:t,img:s,price:i})=>`      
      <li class="discount-item">
      <div class="discount-img-container"><a href="${s}"><img class="discount-item__img" src="${s}" alt="${t}" loading="lazy" /></a>
      </div>
      <div class="discount-info">
        <h3 class="discount-info__title">${t}</h3>        
        <p class="discount-info__price">$${i}</p>      
      </div>
    </li>`).slice(0,2).join("")}a.defaults.baseURL="https://food-boutique.b.goit.study/api";new p;localStorage.getFromLocalStorage();
//# sourceMappingURL=commonHelpers2.js.map
