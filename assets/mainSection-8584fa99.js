import{a as d}from"./vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function e(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=e(o);fetch(o.href,c)}})();class y{constructor(){}getOptions(){return JSON.parse(localStorage.getItem("options"))}setOptions(t){localStorage.setItem("options",JSON.stringify(t))}createAndSave(t,e){localStorage.setItem(t,JSON.stringify(e))}getFromStorage(t){return JSON.parse(localStorage.getItem(`${t}`))}saveCardsToLocalStorage(t){localStorage.setItem("products",JSON.stringify(t))}saveCategories(){if(!localStorage.getItem("categories"))return i.getCategories().then(t=>{console.log(t),localStorage.setItem("categories",JSON.stringify(t))})}defaultApiOptions(){const t={keyword:null,category:null,page:1,limit:6};localStorage.setItem("options",JSON.stringify(t))}setApiOptions(t,e){const s=JSON.parse(localStorage.getItem("options"));s[t]=e,localStorage.setItem("options",JSON.stringify(s))}addToCart(t){const s=JSON.parse(localStorage.getItem("products")).find(o=>o._id===t);if(localStorage.getItem("cart")){const o=JSON.parse(localStorage.getItem("cart"));return o.push(s),localStorage.setItem("cart",JSON.stringify(o))}else return localStorage.setItem("cart",JSON.stringify([s]))}addProductToCart(t){if(localStorage.getItem("cart"))localStorage.getItem("cart");else{const e=[t];localStorage.setItem("cart",JSON.stringify(e))}{const e=JSON.parse(localStorage.getItem("cart"));if(e.find(s=>t._id===s._id)){console.log(t._id);return}else e.push(t),localStorage.setItem("cart",JSON.stringify(e))}}removeFromCart(t){const e=JSON.parse(localStorage.getItem("cart")),s=e.find(c=>c._id===t),o=e.indexOf(s);return e.splice(o,1),console.log(e),localStorage.setItem("cart",JSON.stringify(e))}clearCart(){localStorage.removeItem("cart")}saveOptionsToFoodService(t){i.perPage=t.limit,i.currentPage=t.page,i.category=t.category,i.searchQuerry=t.keyword}}class v{constructor(){this.URL="https://food-boutique.b.goit.study/api"}getFoodListWithOptions2(t){window.innerWidth>=768&&window.innerWidth<1440?(t.limit=8,u.setOptions(t)):window.innerWidth>=1440&&(t.limit=9,u.setOptions(t));const e={page:t.page,limit:t.limit,keyword:t.keyword!==null?t.keyword:void 0,category:t.category!==null?t.category:void 0};return Object.keys(e).forEach(s=>e[s]===void 0&&delete e[s]),d.get(`${this.URL}/products`,{params:e}).then(s=>s.data)}findProductById(t){return d.get(`${this.URL}/products/${t}`).then(e=>e.data)}getPopular(){return d.get(`${this.URL}/products/popular`).then(t=>t.data)}getDiscount(){return d.get(`${this.URL}/products/discount`).then(t=>t.data)}getCategories(){return d.get(`${this.URL}/products/categories`).then(t=>t.data)}subscribe(t){d.post(`${this.URL}/subscription`,{email:t})}order(t,e){d.post(`${this.URL}/orders`,{email:t,products:e})}}const w=new y,T=document.querySelector(".cart-title");function C(){return(w.getFromStorage("cart")??[]).length}function _(){let r=C();T.innerHTML=`cart (${r})`}_();const $="/project-code_busters09/assets/cart-a9135e8e.svg",S="/project-code_busters09/assets/cartLight-0b4d3d6f.svg",f="/project-code_busters09/assets/discount-b955391f.svg",N="/project-code_busters09/assets/checked-295f5189.svg";function E(){document.addEventListener("click",function(r){if(r.target.classList.contains("cart-img-products")||r.target.classList.contains("main-cart-icon")||r.target.classList.contains("popular-cart-img")){const t=r.target;t.src=N}})}const I=document.querySelector(".filter-box__list"),J=document.querySelector(".popular-products__list"),M=document.querySelector(".discount-products__list"),P=document.querySelector(".popular-products__list-responsive"),k=document.querySelector(".discount-products__list-responsive"),u=new y,i=new v;document.addEventListener("click",function(r){r.target.tagName==="IMG"&&r.preventDefault()});u.defaultApiOptions();R();U();D();E();document.addEventListener("click",H);function H(r){if(r.target&&r.target.classList.contains("main-cart-icon")){const t=r.target.dataset.productId;u.addToCart(t),_()}}function q(){const r=JSON.parse(localStorage.getItem("options"));i.getFoodListWithOptions2(r).then(t=>{console.log(t),I.innerHTML=O(t.results),u.saveCardsToLocalStorage(t.results)}).catch(t=>{})}function R(){const r=JSON.parse(localStorage.getItem("options"));i.getFoodListWithOptions2(r).then(t=>{I.innerHTML=O(t.results),u.saveCardsToLocalStorage(t.results)}).catch(t=>{})}function U(){i.getPopular().then(r=>{J.innerHTML=L(r),P.innerHTML=L(r)}).catch(r=>{})}function D(){i.getDiscount().then(r=>{M.innerHTML=h(r),k.innerHTML=h(r)}).catch(r=>{})}function O(r){return r.map(({_id:t,name:e,img:s,category:o,price:c,popularity:a,size:g,is10PercentOff:p})=>{const n=document.createElement("img");n.src=$,n.classList.add("main-cart-icon"),n.dataset.productId=t;const l=document.createElement("img");l.src=f,l.classList.add("discount-icon-products");const m=p?`${l.outerHTML}`:"";return`<li class="product-card" data-id=${t}>
        ${m}
          <div class="img-container"><a href="${s}"><img class="product-card__img" src="${s}" alt="${e}" loading="lazy" /></a>
          </div>
          <div class="info">      
            <h2 class="info__title">${e}</h2>
            <div class="info-wrapper">
              <p class="info-wrapper__product">Category:<span>${o}</span></p>
              <p class="info-wrapper__product">Size:<span>${g}</span></p>
              <p class="info-wrapper__product">Popularity:<span>${a}</span></p>
            </div>
            <div class="info-wrapper__price-container" >
              <p class="info__price">$${c}</p> 
               ${n.outerHTML}
            </div>     
          </div>
        </li>`}).join("")}function L(r){return r.map(({_id:t,name:e,img:s,category:o,popularity:c,size:a,is10PercentOff:g})=>{const p=document.createElement("img");p.src=S,p.classList.add("popular-cart-img");const n=document.createElement("img");n.src=S,n.classList.add("popular-cart-img-down");const l=document.createElement("img");l.src=f,l.classList.add("discount-icon-popular");const m=g?`${l.outerHTML}${n.outerHTML}`:`${p.outerHTML}`;return`      
        <li class="popular-item" data-id="${t}">
          ${m}
          <div class="popular-img-container"><img class="popular-item__img" src="${s}" alt="${e}" loading="lazy" /></div>
          <div class="popular-info">
            <h3 class="popular-info__title">${e}</h3>
            <div class="info-wrapper">
              <p class="info-wrapper__product">Category:<span>${o}</span></p>
              <p class="info-wrapper__product">Size:<span>${a}</span></p>
              <p class="info-wrapper__product">Popularity:<span>${c}</span></p>
            </div>             
          </div>
        </li>`}).slice(0,5).join("")}function h(r){return r.map(({_id:t,name:e,img:s,price:o})=>{const c=document.createElement("img");c.src=$,c.classList.add("cart-img-products");const a=document.createElement("img");return a.src=f,a.classList.add("discount-cheap"),`      
      <li class="discount-item" data-id="${t}">
   
       ${a.outerHTML} 
      <div class="discount-img-container"><a href="${s}"><img class="discount-item__img" src="${s}" alt="${e}" loading="lazy" /></a>
      </div>
      <div class="discount-info">
        <h3 class="discount-info__title">${e}</h3>
        <div class="discount-img-wrapper">
        <p class="discount-info__price">$${o}</p>
        ${c.outerHTML} 
        </div>        
      </div>
    </li>`}).slice(0,2).join("")}export{R as c,i as f,q as m,u as s,_ as u};
//# sourceMappingURL=mainSection-8584fa99.js.map
