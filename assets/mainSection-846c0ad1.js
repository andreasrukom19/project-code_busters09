import{a}from"./vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();class w{constructor(){}createAndSave(t,e){localStorage.setItem(t,JSON.stringify(e))}getFromStorage(t){return JSON.parse(localStorage.getItem(`${t}`))}saveCardsToLocalStorage(t){localStorage.setItem("products",JSON.stringify(t))}saveCategories(){if(!localStorage.getItem("categories"))return c.getCategories().then(t=>{console.log(t),localStorage.setItem("categories",JSON.stringify(t))})}defaultApiOptions(){const t={keyword:null,category:null,page:1,limit:6};localStorage.setItem("options",JSON.stringify(t))}setApiOptions(t,e){const i=JSON.parse(localStorage.getItem("options"));i[t]=e,localStorage.setItem("options",JSON.stringify(i))}addToCart(t){const i=JSON.parse(localStorage.getItem("products")).find(s=>s._id===t);if(localStorage.getItem("cart")){const s=JSON.parse(localStorage.getItem("cart"));return s.push(i),localStorage.setItem("cart",JSON.stringify(s))}else return localStorage.setItem("cart",JSON.stringify([i]))}addProductToCart(t){if(localStorage.getItem("cart"))localStorage.getItem("cart");else{const e=[t];localStorage.setItem("cart",JSON.stringify(e))}{const e=JSON.parse(localStorage.getItem("cart"));if(e.find(i=>t._id===i._id)){console.log(t._id);return}else e.push(t),localStorage.setItem("cart",JSON.stringify(e))}}removeFromCart(t){const e=JSON.parse(localStorage.getItem("cart")),i=e.find(o=>o._id===t),s=e.indexOf(i);return e.splice(s,1),console.log(e),localStorage.setItem("cart",JSON.stringify(e))}clearCart(){localStorage.removeItem("cart")}saveOptionsToFoodService(t){c.perPage=t.limit,c.currentPage=t.page,c.category=t.category,c.searchQuerry=t.keyword}}class v{constructor(){this.URL="https://food-boutique.b.goit.study/api",this.currentPage=1,this.perPage=6,this.searchQuerry="",this.category=""}getBasicFoodList(){return window.innerWidth>=768&&window.innerWidth<1440?this.perPage=8:window.innerWidth>=1440&&(this.perPage=9),a.get(`${this.URL}/products?limit=${this.perPage}`).then(t=>t.data)}getBasicFoodList2(t){return window.innerWidth>=768&&window.innerWidth<1440?this.perPage=8:window.innerWidth>=1440&&(this.perPage=9),a.get(`${this.URL}/products?limit=${t.limit}`).then(e=>e.data)}getFoodListWithOptions2(t){return window.innerWidth>=768&&window.innerWidth<1440?this.perPage=8:window.innerWidth>=1440&&(this.perPage=9),a.get(`${this.URL}/products?page=${t.page}&limit=${t.limit}&keyword=${t.keyword}&category=${t.category}`).then(e=>e.data)}getFoodListWithOptions(){return window.innerWidth>=768&&window.innerWidth<1440?this.perPage=8:window.innerWidth>=1440&&(this.perPage=9),a.get(`${this.URL}/products?page=${this.currentPage}&limit=${this.perPage}&keyword=${this.searchQuerry}&category=${this.category}`).then(t=>t.data)}findProductById(t){return a.get(`${this.URL}/products/${t}`).then(e=>e.data)}getPopular(){return a.get(`${this.URL}/products/popular`).then(t=>t.data)}getDiscount(){return a.get(`${this.URL}/products/discount`).then(t=>t.data)}getCategories(){return a.get(`${this.URL}/products/categories`).then(t=>t.data)}resetPageCounter(){this.currentPage=1}incrementPage(){this.currentPage+=1}resetSearchQuerry(){this.searchQuerry=""}resetCategory(){this.category=""}subscribe(t){a.post(`${this.URL}/subscription`,{email:t})}order(t,e){a.post(`${this.URL}/orders`,{email:t,products:e})}}const y="/project-code_busters09/assets/cart-a9135e8e.svg",h="/project-code_busters09/assets/cartLight-0b4d3d6f.svg",f="/project-code_busters09/assets/discount-b955391f.svg",I="/project-code_busters09/assets/checked-295f5189.svg";function O(){document.addEventListener("click",function(r){if(r.target.classList.contains("cart-img-products")||r.target.classList.contains("main-cart-icon")||r.target.classList.contains("popular-cart-img")){const t=r.target;t.src=I}})}const $=document.querySelector(".filter-box__list"),P=document.querySelector(".popular-products__list"),N=document.querySelector(".discount-products__list"),T=document.querySelector(".popular-products__list-responsive"),C=document.querySelector(".discount-products__list-responsive"),p=new w,c=new v;document.addEventListener("click",function(r){r.target.tagName==="IMG"&&r.preventDefault()});p.defaultApiOptions();M();E();J();O();function M(){const r=JSON.parse(localStorage.getItem("options"));c.getBasicFoodList2(r).then(t=>{console.log(t),$.innerHTML=_(t.results),p.saveCardsToLocalStorage(t.results)}).catch(t=>{})}function W(){const r=p.getApiOptions();c.getFoodListWithOptions(r).then(t=>{$.innerHTML=_(t.results),p.saveCardsToLocalStorage(t.results)}).catch(t=>{})}function E(){c.getPopular().then(r=>{P.innerHTML=L(r),T.innerHTML=L(r)}).catch(r=>{})}function J(){c.getDiscount().then(r=>{N.innerHTML=S(r),C.innerHTML=S(r)}).catch(r=>{})}function _(r){return r.map(({_id:t,name:e,img:i,category:s,price:o,popularity:n,size:g,is10PercentOff:u})=>{const l=document.createElement("img");l.src=y,l.classList.add("main-cart-icon");const d=document.createElement("img");d.src=f,d.classList.add("discount-icon-products");const m=u?`${d.outerHTML}`:"";return`<li class="product-card" data-id=${t}>
        ${m}
          <div class="img-container"><a href="${i}"><img class="product-card__img" src="${i}" alt="${e}" loading="lazy" /></a>
          </div>
          <div class="info">      
            <h2 class="info__title">${e}</h2>
            <div class="info-wrapper">
              <p class="info-wrapper__product">Category:<span>${s}</span></p>
              <p class="info-wrapper__product">Size:<span>${g}</span></p>
              <p class="info-wrapper__product">Popularity:<span>${n}</span></p>
            </div>
            <div class="info-wrapper__price-container" >
              <p class="info__price">$${o}</p> 
               ${l.outerHTML}
            </div>     
          </div>
        </li>`}).join("")}function L(r){return r.map(({_id:t,name:e,img:i,category:s,popularity:o,size:n,is10PercentOff:g})=>{const u=document.createElement("img");u.src=h,u.classList.add("popular-cart-img");const l=document.createElement("img");l.src=h,l.classList.add("popular-cart-img-down");const d=document.createElement("img");d.src=f,d.classList.add("discount-icon-popular");const m=g?`${d.outerHTML}${l.outerHTML}`:`${u.outerHTML}`;return`      
        <li class="popular-item" data-id="${t}">
          ${m}
          <div class="popular-img-container"><img class="popular-item__img" src="${i}" alt="${e}" loading="lazy" /></div>
          <div class="popular-info">
            <h3 class="popular-info__title">${e}</h3>
            <div class="info-wrapper">
              <p class="info-wrapper__product">Category:<span>${s}</span></p>
              <p class="info-wrapper__product">Size:<span>${n}</span></p>
              <p class="info-wrapper__product">Popularity:<span>${o}</span></p>
            </div>             
          </div>
        </li>`}).slice(0,5).join("")}function S(r){return r.map(({_id:t,name:e,img:i,price:s})=>{const o=document.createElement("img");o.src=y,o.classList.add("cart-img-products");const n=document.createElement("img");return n.src=f,n.classList.add("discount-cheap"),`      
      <li class="discount-item" data-id="${t}">
   
       ${n.outerHTML} 
      <div class="discount-img-container"><a href="${i}"><img class="discount-item__img" src="${i}" alt="${e}" loading="lazy" /></a>
      </div>
      <div class="discount-info">
        <h3 class="discount-info__title">${e}</h3>
        <div class="discount-img-wrapper">
        <p class="discount-info__price">$${s}</p>
        ${o.outerHTML} 
        </div>        
      </div>
    </li>`}).slice(0,2).join("")}export{w as L,W as c,c as f,M as m,p as s};
//# sourceMappingURL=mainSection-846c0ad1.js.map
