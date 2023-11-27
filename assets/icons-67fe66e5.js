import{a as d}from"./vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerpolicy&&(c.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?c.credentials="include":s.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(s){if(s.ep)return;s.ep=!0;const c=r(s);fetch(s.href,c)}})();class v{constructor(){}getOptions(){return JSON.parse(localStorage.getItem("options"))}setOptions(t){localStorage.setItem("options",JSON.stringify(t))}getCart(){return localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]}createAndSave(t,r){localStorage.setItem(t,JSON.stringify(r))}getFromStorage(t){return JSON.parse(localStorage.getItem(`${t}`))}saveCardsToLocalStorage(t){localStorage.setItem("products",JSON.stringify(t))}saveCategories(){if(!localStorage.getItem("categories"))return n.getCategories().then(t=>{console.log(t),localStorage.setItem("categories",JSON.stringify(t))})}defaultApiOptions(){const t={keyword:null,category:null,page:1,limit:6};localStorage.setItem("options",JSON.stringify(t))}setApiOptions(t,r){const o=JSON.parse(localStorage.getItem("options"));o[t]=r,localStorage.setItem("options",JSON.stringify(o))}addToCart(t){const o=JSON.parse(localStorage.getItem("products")).find(s=>s._id===t);this.addProductToCart(o)}addProductToCart(t){if(localStorage.getItem("cart"))localStorage.getItem("cart");else{const r=[t];localStorage.setItem("cart",JSON.stringify(r))}{const r=JSON.parse(localStorage.getItem("cart"));if(r.find(o=>t._id===o._id))return;r.push(t),localStorage.setItem("cart",JSON.stringify(r))}}removeFromCart(t){const r=JSON.parse(localStorage.getItem("cart")),o=r.find(c=>c._id===t),s=r.indexOf(o);return r.splice(s,1),console.log(r),localStorage.setItem("cart",JSON.stringify(r))}clearCart(){localStorage.removeItem("cart")}saveOptionsToFoodService(t){n.perPage=t.limit,n.currentPage=t.page,n.category=t.category,n.searchQuerry=t.keyword}}class C{constructor(){this.URL="https://food-boutique.b.goit.study/api"}getFoodListWithOptions2(t){window.innerWidth>=768&&window.innerWidth<1440?(t.limit=8,p.setOptions(t)):window.innerWidth>=1440&&(t.limit=9,p.setOptions(t));const r={page:t.page,limit:t.limit,keyword:t.keyword!==null?t.keyword:void 0,category:t.category!==null?t.category:void 0};return Object.keys(r).forEach(o=>r[o]===void 0&&delete r[o]),d.get(`${this.URL}/products`,{params:r}).then(o=>o.data)}findProductById(t){return d.get(`${this.URL}/products/${t}`).then(r=>r.data)}getPopular(){return d.get(`${this.URL}/products/popular`).then(t=>t.data)}getDiscount(){return d.get(`${this.URL}/products/discount`).then(t=>t.data)}getCategories(){return d.get(`${this.URL}/products/categories`).then(t=>t.data)}subscribe(t){d.post(`${this.URL}/subscription`,{email:t})}order(t,r){d.post(`${this.URL}/orders`,{email:t,products:r})}}const T=new v,E=document.querySelector(".cart-title");function N(){return(T.getFromStorage("cart")??[]).length}function O(){let e=N();E.innerHTML=`cart (${e})`}O();const w="/project-code_busters09/assets/cart-a9135e8e.svg",L="/project-code_busters09/assets/cartLight-0b4d3d6f.svg",f="/project-code_busters09/assets/discount-b955391f.svg",M="/project-code_busters09/assets/checked-295f5189.svg";function P(){document.addEventListener("click",function(e){if(e.target.classList.contains("cart-img-products")||e.target.classList.contains("main-cart-icon")||e.target.classList.contains("popular-cart-img")){const t=e.target;t.src=M}})}function S(e){e.classList.add("visually-hidden")}function h(e){e.classList.remove("visually-hidden")}const y=document.querySelector(".no-products-message"),_=document.querySelector(".pagination"),J=document.querySelector(".filter-box__list"),k=document.querySelector(".popular-products__list"),H=document.querySelector(".discount-products__list"),R=document.querySelector(".popular-products__list-responsive"),U=document.querySelector(".discount-products__list-responsive"),p=new v,n=new C;document.addEventListener("click",function(e){e.target.tagName==="IMG"&&e.preventDefault()});p.defaultApiOptions();D();F();b();P();document.addEventListener("click",q);function q(e){if(e.target&&(e.target.classList.contains("cart-img-products")||e.target.classList.contains("main-cart-icon")||e.target.classList.contains("popular-cart-img"))){const t=e.target.dataset.productId;p.addToCart(t),O()}}function D(){const e=JSON.parse(localStorage.getItem("options"));n.getFoodListWithOptions2(e).then(t=>{t.results.length===0?(h(y),S(_)):(S(y),h(_)),console.log(t.results),J.innerHTML=x(t.results),p.saveCardsToLocalStorage(t.results)}).catch(t=>{})}function F(){n.getPopular().then(e=>{k.innerHTML=$(e),R.innerHTML=$(e)}).catch(e=>{})}function b(){n.getDiscount().then(e=>{H.innerHTML=I(e),U.innerHTML=I(e)}).catch(e=>{})}function x(e){return e.map(({_id:t,name:r,img:o,category:s,price:c,popularity:a,size:g,is10PercentOff:u})=>{const i=document.createElement("img");i.src=w,i.classList.add("main-cart-icon"),i.dataset.productId=t;const l=document.createElement("img");l.src=f,l.classList.add("discount-icon-products");const m=u?`${l.outerHTML}`:"";return`<li class="product-card" data-id=${t}>
        ${m}
          <div class="img-container"><a href="${o}"><img class="product-card__img" src="${o}" alt="${r}" loading="lazy" /></a>
          </div>
          <div class="info">      
            <h2 class="info__title">${r}</h2>
            <div class="info-wrapper">
              <p class="info-wrapper__product">Category:<span>${s}</span></p>
              <p class="info-wrapper__product">Size:<span>${g}</span></p>
              <p class="info-wrapper__product">Popularity:<span>${a}</span></p>
            </div>
            <div class="info-wrapper__price-container" >
              <p class="info__price">$${c}</p> 
               ${i.outerHTML}
            </div>     
          </div>
        </li>`}).join("")}function $(e){return e.map(({_id:t,name:r,img:o,category:s,popularity:c,size:a,is10PercentOff:g})=>{const u=document.createElement("img");u.src=L,u.classList.add("popular-cart-img"),u.dataset.productId=t;const i=document.createElement("img");i.src=L,i.classList.add("popular-cart-img-down");const l=document.createElement("img");l.src=f,l.classList.add("discount-icon-popular");const m=g?`${l.outerHTML}${i.outerHTML}`:`${u.outerHTML}`;return`      
        <li class="popular-item" data-id="${t}">
          ${m}
          <div class="popular-img-container"><img class="popular-item__img" src="${o}" alt="${r}" loading="lazy" /></div>
          <div class="popular-info">
            <h3 class="popular-info__title">${r}</h3>
            <div class="info-wrapper">
              <p class="info-wrapper__product">Category:<span>${s}</span></p>
              <p class="info-wrapper__product">Size:<span>${a}</span></p>
              <p class="info-wrapper__product">Popularity:<span>${c}</span></p>
            </div>             
          </div>
        </li>`}).slice(0,5).join("")}function I(e){return e.map(({_id:t,name:r,img:o,price:s})=>{const c=document.createElement("img");c.src=w,c.classList.add("cart-img-products"),c.dataset.productId=t;const a=document.createElement("img");return a.src=f,a.classList.add("discount-cheap"),`      
      <li class="discount-item" data-id="${t}">
   
       ${a.outerHTML} 
      <div class="discount-img-container"><a href="${o}"><img class="discount-item__img" src="${o}" alt="${r}" loading="lazy" /></a>
      </div>
      <div class="discount-info">
        <h3 class="discount-info__title">${r}</h3>
        <div class="discount-img-wrapper">
        <p class="discount-info__price">$${s}</p>
        ${c.outerHTML} 
        </div>        
      </div>
    </li>`}).slice(0,2).join("")}const A="/project-code_busters09/assets/icons-d9095b3f.svg";export{D as c,n as f,A as i,p as s,O as u};
//# sourceMappingURL=icons-67fe66e5.js.map
