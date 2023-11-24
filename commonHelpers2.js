/* empty css                      */import{a}from"./assets/vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();class g{constructor(){this.URL="https://food-boutique.b.goit.study/api",this.currentPage=1,this.perPage=9,this.searchQuerry="",this.category=""}getFoodList(){return a.get(`${this.URL}/products?page=${this.currentPage}&limit=${this.perPage}&keyword=${this.searchQuerry}&category=${this.category}`).then(t=>t.data)}findProductById(t){return a.get(`${this.URL}/products/${t}`).then(e=>e.data)}getPopular(){return a.get(`${this.URL}/products/popular?limit=${this.perPage}`).then(t=>t.data)}getDiscount(){return a.get(`${this.URL}/products/discount`).then(t=>t.data)}getCategories(){return a.get(`${this.URL}/products/categories`).then(t=>t.data)}resetPageCounter(){this.currentPage=1}incrementPage(){this.currentPage+=1}subscribe(t){a.post(`${this.URL}/subscription`,{email:t})}order(t,e){a.post(`${this.URL}/orders`,{email:t,products:e})}}const m=document.querySelector(".filter-box__list"),f=document.querySelector(".popular-products__list"),h=document.querySelector(".discount-products__list"),_=document.querySelector(".popular-products__list-responsive"),$=document.querySelector(".discount-products__list-responsive"),u=new g;document.addEventListener("click",function(r){if(r.target.classList.contains("cart-img-products")){const t=r.target,e="../img/checked.svg";t.src=e}});u.getFoodList().then(r=>{m.innerHTML=v(r.results)}).catch(r=>{});u.getPopular().then(r=>{f.innerHTML=p(r),_.innerHTML=p(r)}).catch(r=>{});u.getDiscount().then(r=>{h.innerHTML=l(r),$.innerHTML=l(r)}).catch(r=>{});function v(r){return r.map(({_id:t,name:e,img:o,category:s,price:i,popularity:c,size:n,is10PercentOff:d})=>`<li class="product-card data-id="${t}">
       ${d?'<img class="discount-icon-products" src="../../assets/discount.svg" alt="Discount" />':""}
      <div class="img-container"><a href="${o}"><img class="product-card__img" src="${o}" alt="${e}" loading="lazy" /></a>
      </div>
      <div class="info">      
        <h2 class="info__title">${e}</h2>
        <div class="info-wrapper">
        <p class="info-wrapper__product">Category:<span>${s}</span></p>
        <p class="info-wrapper__product">Size:<span>${n}</span></p>
        <p class="info-wrapper__product">Popularity:<span>${c}</span></p>
        </div>
        <div class="info-wrapper__price-container" >
        <p class="info__price">$${i}</p>       
          <img class="cart-img-products" src="/project-code_busters09/img/cart.svg" alt="cart" />
        </div>     
      </div>
    </li>`).join("")}function p(r){return r.map(({_id:t,name:e,img:o,category:s,popularity:i,size:c,is10PercentOff:n})=>`      
      <li class="popular-item" data-id="${t}">
      ${n?'<img class="discount-icon-popular" src="./img/discount.svg" alt="Discount" />  <img class="popular-cart-img-down" src="./img/cartLight.svg" alt="cart" />':'<img class="popular-cart-img" src="./img/cartLight.svg" alt="cart" />'}
       
      <div class="popular-img-container"><a href="${o}"><img class="popular-item__img" src="${o}" alt="${e}" loading="lazy" /></a>
      </div>
      <div class="popular-info">
        <h3 class="popular-info__title">${e}</h3>
        <div class="info-wrapper">
        <p class="info-wrapper__product">Category:<span>${s}</span></p>
        <p class="info-wrapper__product">Size:<span>${c}</span></p>
        <p class="info-wrapper__product">Popularity:<span>${i}</span></p>
        </div>             
      </div>
    </li>`).slice(0,5).join("")}function l(r){return r.map(({_id:t,name:e,img:o,price:s})=>`      
      <li class="discount-item" data-id="${t}">
       <img class="discount-cheap" src="./img/discount.svg" alt="cart" />  
      <div class="discount-img-container"><a href="${o}"><img class="discount-item__img" src="${o}" alt="${e}" loading="lazy" /></a>
      </div>
      <div class="discount-info">
        <h3 class="discount-info__title">${e}</h3>
        <div class="discount-img-wrapper">
        <p class="discount-info__price">$${s}</p>
         <img class="cart-img-products" src="./img/cart.svg" alt="cart" />      
        </div>        
      </div>
    </li>`).slice(0,2).join("")}
//# sourceMappingURL=commonHelpers2.js.map
