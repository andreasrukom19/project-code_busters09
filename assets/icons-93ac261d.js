import{a as d}from"./vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=r(o);fetch(o.href,c)}})();class v{constructor(){}getOptions(){return JSON.parse(localStorage.getItem("options"))}setOptions(t){localStorage.setItem("options",JSON.stringify(t))}getCart(){return localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]}createAndSave(t,r){localStorage.setItem(t,JSON.stringify(r))}getFromStorage(t){return JSON.parse(localStorage.getItem(`${t}`))}saveCardsToLocalStorage(t){localStorage.setItem("products",JSON.stringify(t))}saveCategories(){if(!localStorage.getItem("categories"))return n.getCategories().then(t=>{console.log(t),localStorage.setItem("categories",JSON.stringify(t))})}defaultApiOptions(){const t={keyword:null,category:null,page:1,limit:6};localStorage.setItem("options",JSON.stringify(t))}setApiOptions(t,r){const s=JSON.parse(localStorage.getItem("options"));s[t]=r,localStorage.setItem("options",JSON.stringify(s))}addToCart(t){const s=JSON.parse(localStorage.getItem("products")).find(o=>o._id===t);this.addProductToCart(s)}addProductToCart(t){if(localStorage.getItem("cart"))localStorage.getItem("cart");else{const r=[t];localStorage.setItem("cart",JSON.stringify(r))}{const r=JSON.parse(localStorage.getItem("cart"));if(r.find(s=>t._id===s._id))return;r.push(t),localStorage.setItem("cart",JSON.stringify(r))}}removeFromCart(t){const r=JSON.parse(localStorage.getItem("cart")),s=r.find(c=>c._id===t),o=r.indexOf(s);return r.splice(o,1),console.log(r),localStorage.setItem("cart",JSON.stringify(r))}clearCart(){localStorage.removeItem("cart")}saveOptionsToFoodService(t){n.perPage=t.limit,n.currentPage=t.page,n.category=t.category,n.searchQuerry=t.keyword}}class E{constructor(){this.URL="https://food-boutique.b.goit.study/api"}getFoodListWithOptions2(t){window.innerWidth>=768&&window.innerWidth<1440?(t.limit=8,p.setOptions(t)):window.innerWidth>=1440&&(t.limit=9,p.setOptions(t));const r={page:t.page,limit:t.limit,keyword:t.keyword!==null?t.keyword:void 0,category:t.category!==null?t.category:void 0};return Object.keys(r).forEach(s=>r[s]===void 0&&delete r[s]),d.get(`${this.URL}/products`,{params:r}).then(s=>s.data)}findProductById(t){return d.get(`${this.URL}/products/${t}`).then(r=>r.data)}getPopular(){return d.get(`${this.URL}/products/popular`).then(t=>t.data)}getDiscount(){return d.get(`${this.URL}/products/discount`).then(t=>t.data)}getCategories(){return d.get(`${this.URL}/products/categories`).then(t=>t.data)}subscribe(t){d.post(`${this.URL}/subscription`,{email:t})}order(t,r){d.post(`${this.URL}/orders`,{email:t,products:r})}}const N=new v,M=document.querySelector(".cart-title");function P(){return(N.getFromStorage("cart")??[]).length}function O(){let e=P();M.innerHTML=`cart (${e})`}O();const w="/project-code_busters09/assets/cart-a9135e8e.svg",_="/project-code_busters09/assets/cartLight-0b4d3d6f.svg",y="/project-code_busters09/assets/discount-b955391f.svg",J="/project-code_busters09/assets/checked-295f5189.svg";function H(){document.addEventListener("click",function(e){if(e.target.classList.contains("cart-img-products")||e.target.classList.contains("main-cart-icon")||e.target.classList.contains("popular-cart-img")){const t=e.target;t.src=J}})}function g(e){e.classList.add("visually-hidden")}function m(e){e.classList.remove("visually-hidden")}const f=document.querySelector(".no-products-message"),L=document.querySelector(".pagination"),C=document.querySelector(".filter-box__list"),k=document.querySelector(".popular-products__list"),R=document.querySelector(".discount-products__list"),U=document.querySelector(".popular-products__list-responsive"),q=document.querySelector(".discount-products__list-responsive"),p=new v,n=new E;document.addEventListener("click",function(e){e.target.tagName==="IMG"&&e.preventDefault()});p.defaultApiOptions();F();b();x();H();document.addEventListener("click",D);function D(e){if(e.target&&(e.target.classList.contains("cart-img-products")||e.target.classList.contains("main-cart-icon")||e.target.classList.contains("popular-cart-img"))){const t=e.target.dataset.productId;p.addToCart(t),O()}}function z(){const e=JSON.parse(localStorage.getItem("options"));n.getFoodListWithOptions2(e).then(t=>{console.log(t),t.results.length===0?(m(f),g(L)):(g(f),m(L)),C.innerHTML=T(t.results),p.saveCardsToLocalStorage(t.results)}).catch(t=>{})}function F(){const e=JSON.parse(localStorage.getItem("options"));n.getFoodListWithOptions2(e).then(t=>{t.results.length===0?(m(f),g(L)):(g(f),m(L)),C.innerHTML=T(t.results),p.saveCardsToLocalStorage(t.results)}).catch(t=>{})}function b(){n.getPopular().then(e=>{k.innerHTML=$(e),U.innerHTML=$(e)}).catch(e=>{})}function x(){n.getDiscount().then(e=>{R.innerHTML=I(e),q.innerHTML=I(e)}).catch(e=>{})}function T(e){return e.map(({_id:t,name:r,img:s,category:o,price:c,popularity:a,size:S,is10PercentOff:u})=>{const i=document.createElement("img");i.src=w,i.classList.add("main-cart-icon"),i.dataset.productId=t;const l=document.createElement("img");l.src=y,l.classList.add("discount-icon-products");const h=u?`${l.outerHTML}`:"";return`<li class="product-card" data-id=${t}>
        ${h}
          <div class="img-container"><a href="${s}"><img class="product-card__img" src="${s}" alt="${r}" loading="lazy" /></a>
          </div>
          <div class="info">      
            <h2 class="info__title">${r}</h2>
            <div class="info-wrapper">
              <p class="info-wrapper__product">Category:<span>${o}</span></p>
              <p class="info-wrapper__product">Size:<span>${S}</span></p>
              <p class="info-wrapper__product">Popularity:<span>${a}</span></p>
            </div>
            <div class="info-wrapper__price-container" >
              <p class="info__price">$${c}</p> 
               ${i.outerHTML}
            </div>     
          </div>
        </li>`}).join("")}function $(e){return e.map(({_id:t,name:r,img:s,category:o,popularity:c,size:a,is10PercentOff:S})=>{const u=document.createElement("img");u.src=_,u.classList.add("popular-cart-img"),u.dataset.productId=t;const i=document.createElement("img");i.src=_,i.classList.add("popular-cart-img-down");const l=document.createElement("img");l.src=y,l.classList.add("discount-icon-popular");const h=S?`${l.outerHTML}${i.outerHTML}`:`${u.outerHTML}`;return`      
        <li class="popular-item" data-id="${t}">
          ${h}
          <div class="popular-img-container"><img class="popular-item__img" src="${s}" alt="${r}" loading="lazy" /></div>
          <div class="popular-info">
            <h3 class="popular-info__title">${r}</h3>
            <div class="info-wrapper">
              <p class="info-wrapper__product">Category:<span>${o}</span></p>
              <p class="info-wrapper__product">Size:<span>${a}</span></p>
              <p class="info-wrapper__product">Popularity:<span>${c}</span></p>
            </div>             
          </div>
        </li>`}).slice(0,5).join("")}function I(e){return e.map(({_id:t,name:r,img:s,price:o})=>{const c=document.createElement("img");c.src=w,c.classList.add("cart-img-products"),c.dataset.productId=t;const a=document.createElement("img");return a.src=y,a.classList.add("discount-cheap"),`      
      <li class="discount-item" data-id="${t}">
   
       ${a.outerHTML} 
      <div class="discount-img-container"><a href="${s}"><img class="discount-item__img" src="${s}" alt="${r}" loading="lazy" /></a>
      </div>
      <div class="discount-info">
        <h3 class="discount-info__title">${r}</h3>
        <div class="discount-img-wrapper">
        <p class="discount-info__price">$${o}</p>
        ${c.outerHTML} 
        </div>        
      </div>
    </li>`}).slice(0,2).join("")}const A="/project-code_busters09/assets/icons-d9095b3f.svg";export{F as c,n as f,A as i,z as m,p as s,O as u};
//# sourceMappingURL=icons-93ac261d.js.map
