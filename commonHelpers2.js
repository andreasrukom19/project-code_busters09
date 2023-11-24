/* empty css                      */import{a}from"./assets/vendor-a61d8330.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();class f{constructor(){this.URL="https://food-boutique.b.goit.study/api",this.currentPage=1,this.perPage=6,this.searchQuerry="",this.category=""}getFoodList(){return window.innerWidth>=768&&window.innerWidth<1440?this.perPage=8:window.innerWidth>=1440&&(this.perPage=9),a.get(`${this.URL}/products?page=${this.currentPage}&limit=${this.perPage}&keyword=${this.searchQuerry}&category=${this.category}`).then(e=>e.data)}findProductById(e){return a.get(`${this.URL}/products/${e}`).then(i=>i.data)}getPopular(){return a.get(`${this.URL}/products/popular`).then(e=>e.data)}getDiscount(){return a.get(`${this.URL}/products/discount`).then(e=>e.data)}getCategories(){return a.get(`${this.URL}/products/categories`).then(e=>e.data)}resetPageCounter(){this.currentPage=1}incrementPage(){this.currentPage+=1}subscribe(e){a.post(`${this.URL}/subscription`,{email:e})}order(e,i){a.post(`${this.URL}/orders`,{email:e,products:i})}}const h=document.querySelector(".filter-box__list"),m=document.querySelector(".popular-products__list"),_=document.querySelector(".discount-products__list"),$=document.querySelector(".popular-products__list-responsive"),v=document.querySelector(".discount-products__list-responsive"),c=new f;document.addEventListener("click",function(t){if(t.target.classList.contains("cart-img-products")){const e=t.target,i="../img/checked.svg";e.src=i}});p();y();L();function p(){c.getFoodList().then(t=>{h.innerHTML=P(t.results)}).catch(t=>{})}function y(){c.getPopular().then(t=>{m.innerHTML=d(t),$.innerHTML=d(t)}).catch(t=>{})}function L(){c.getDiscount().then(t=>{_.innerHTML=l(t),v.innerHTML=l(t)}).catch(t=>{})}function P(t){return t.map(({_id:e,name:i,img:o,category:r,price:s,popularity:n,size:u,is10PercentOff:g})=>`<li class="product-card data-id="${e}">
       ${g?'<img class="discount-icon-products" src="../../assets/discount.svg" alt="Discount" />':""}
      <div class="img-container"><a href="${o}"><img class="product-card__img" src="${o}" alt="${i}" loading="lazy" /></a>
      </div>
      <div class="info">      
        <h2 class="info__title">${i}</h2>
        <div class="info-wrapper">
        <p class="info-wrapper__product">Category:<span>${r}</span></p>
        <p class="info-wrapper__product">Size:<span>${u}</span></p>
        <p class="info-wrapper__product">Popularity:<span>${n}</span></p>
        </div>
        <div class="info-wrapper__price-container" >
        <p class="info__price">$${s}</p>       
          <img class="cart-img-products" src="/project-code_busters09/img/cart.svg" alt="cart" />
        </div>     
      </div>
    </li>`).join("")}function d(t){return t.map(({_id:e,name:i,img:o,category:r,popularity:s,size:n,is10PercentOff:u})=>`      
      <li class="popular-item" data-id="${e}">
      ${u?'<img class="discount-icon-popular" src="./img/discount.svg" alt="Discount" />  <img class="popular-cart-img-down" src="./img/cartLight.svg" alt="cart" />':'<img class="popular-cart-img" src="./img/cartLight.svg" alt="cart" />'}
       
      <div class="popular-img-container"><a href="${o}"><img class="popular-item__img" src="${o}" alt="${i}" loading="lazy" /></a>
      </div>
      <div class="popular-info">
        <h3 class="popular-info__title">${i}</h3>
        <div class="info-wrapper">
        <p class="info-wrapper__product">Category:<span>${r}</span></p>
        <p class="info-wrapper__product">Size:<span>${n}</span></p>
        <p class="info-wrapper__product">Popularity:<span>${s}</span></p>
        </div>             
      </div>
    </li>`).slice(0,5).join("")}function l(t){return t.map(({_id:e,name:i,img:o,price:r})=>`      
      <li class="discount-item" data-id="${e}">
       <img class="discount-cheap" src="./img/discount.svg" alt="cart" />  
      <div class="discount-img-container"><a href="${o}"><img class="discount-item__img" src="${o}" alt="${i}" loading="lazy" /></a>
      </div>
      <div class="discount-info">
        <h3 class="discount-info__title">${i}</h3>
        <div class="discount-img-wrapper">
        <p class="discount-info__price">$${r}</p>
         <img class="cart-img-products" src="./img/cart.svg" alt="cart" />      
        </div>        
      </div>
    </li>`).slice(0,2).join("")}window.addEventListener("resize",w);function w(){const t=window.innerWidth;t>=768&&t<1440&&c.perPage!==8?(c.perPage=8,p()):t>=1440&&c.perPage!==9?(c.perPage=9,p()):t<768&&c.perPage!==6&&(c.perPage=6,p())}
//# sourceMappingURL=commonHelpers2.js.map
