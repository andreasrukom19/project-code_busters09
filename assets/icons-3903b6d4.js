import{a as l}from"./vendor-99d50140.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerpolicy&&(c.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?c.credentials="include":s.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(s){if(s.ep)return;s.ep=!0;const c=r(s);fetch(s.href,c)}})();class O{constructor(){}getOptions(){return JSON.parse(localStorage.getItem("options"))}setOptions(t){localStorage.setItem("options",JSON.stringify(t))}getCart(){return localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]}createAndSave(t,r){localStorage.setItem(t,JSON.stringify(r))}getFromStorage(t){return JSON.parse(localStorage.getItem(`${t}`))}saveCardsToLocalStorage(t){localStorage.setItem("products",JSON.stringify(t))}saveCategories(){if(!localStorage.getItem("categories"))return i.getCategories().then(t=>{console.log(t),localStorage.setItem("categories",JSON.stringify(t))})}defaultApiOptions(){const t={keyword:null,category:null,page:1,limit:6};localStorage.setItem("options",JSON.stringify(t))}setApiOptions(t,r){const o=JSON.parse(localStorage.getItem("options"));o[t]=r,localStorage.setItem("options",JSON.stringify(o))}addToCart(t){const o=JSON.parse(localStorage.getItem("products")).find(s=>s._id===t);this.addProductToCart(o)}addProductToCart(t){if(localStorage.getItem("cart")){const r=JSON.parse(localStorage.getItem("cart"));if(r.find(o=>t._id===o._id))return;r.push(t),localStorage.setItem("cart",JSON.stringify(r))}else{const r=[t];localStorage.setItem("cart",JSON.stringify(r))}}removeFromCart(t){const r=JSON.parse(localStorage.getItem("cart")),o=r.find(c=>c._id===t),s=r.indexOf(o);return r.splice(s,1),console.log(r),localStorage.setItem("cart",JSON.stringify(r))}clearCart(){localStorage.removeItem("cart")}saveOptionsToFoodService(t){i.perPage=t.limit,i.currentPage=t.page,i.category=t.category,i.searchQuerry=t.keyword}}class C{constructor(){this.URL="https://food-boutique.b.goit.study/api"}getFoodListWithOptions2(t){window.innerWidth>=768&&window.innerWidth<1440?(t.limit=8,p.setOptions(t)):window.innerWidth>=1440&&(t.limit=9,p.setOptions(t));const r={page:t.page,limit:t.limit,keyword:t.keyword!==null?t.keyword:void 0,category:t.category!==null?t.category:void 0};return Object.keys(r).forEach(o=>r[o]===void 0&&delete r[o]),l.get(`${this.URL}/products`,{params:r}).then(o=>o.data)}findProductById(t){return l.get(`${this.URL}/products/${t}`).then(r=>r.data)}getPopular(){return l.get(`${this.URL}/products/popular`).then(t=>t.data)}getDiscount(){return l.get(`${this.URL}/products/discount`).then(t=>t.data)}getCategories(){return l.get(`${this.URL}/products/categories`).then(t=>t.data)}subscribe(t){l.post(`${this.URL}/subscription`,{email:t})}order(t,r){l.post(`${this.URL}/orders`,{email:t,products:r})}}const T=new O,E=document.querySelector(".cart-title");function N(){return(T.getFromStorage("cart")??[]).length}function f(){let e=N();E.innerHTML=`cart (${e})`}f();const w="/project-code_busters09/assets/cart-a9135e8e.svg",S="/project-code_busters09/assets/cartLight-0b4d3d6f.svg",L="/project-code_busters09/assets/discount-b955391f.svg",P="/project-code_busters09/assets/checked-295f5189.svg";function M(){document.addEventListener("click",function(e){if(e.target.classList.contains("cart-img-products")||e.target.classList.contains("main-cart-icon")||e.target.classList.contains("popular-cart-img")){const t=e.target;t.src=P}})}function h(e){e.classList.add("visually-hidden")}function y(e){e.classList.remove("visually-hidden")}const _=document.querySelector(".no-products-message"),$=document.querySelector(".pagination"),J=document.querySelector(".filter-box__list"),k=document.querySelector(".popular-products__list"),H=document.querySelector(".discount-products__list"),R=document.querySelector(".popular-products__list-responsive"),U=document.querySelector(".discount-products__list-responsive"),p=new O,i=new C;document.addEventListener("click",function(e){e.target.tagName==="IMG"&&e.preventDefault()});p.defaultApiOptions();D();F();b();M();document.addEventListener("click",q);function q(e){if(e.target&&e.target.classList.contains("main-cart-icon")){const t=e.target.dataset.productId;p.addToCart(t),f()}else if(e.target&&(e.target.classList.contains("cart-img-products")||e.target.classList.contains("popular-cart-img"))){const t=e.target.dataset.productId;i.findProductById(t).then(r=>{p.addProductToCart(r),f()})}}function D(){const e=JSON.parse(localStorage.getItem("options"));i.getFoodListWithOptions2(e).then(t=>{t.results.length===0?(y(_),h($)):(h(_),y($)),console.log(t.results),J.innerHTML=x(t.results),p.saveCardsToLocalStorage(t.results)}).catch(t=>{})}function F(){i.getPopular().then(e=>{k.innerHTML=I(e),R.innerHTML=I(e)}).catch(e=>{})}function b(){i.getDiscount().then(e=>{H.innerHTML=v(e),U.innerHTML=v(e)}).catch(e=>{})}function x(e){return e.map(({_id:t,name:r,img:o,category:s,price:c,popularity:a,size:g,is10PercentOff:u})=>{const n=document.createElement("img");n.src=w,n.classList.add("main-cart-icon"),n.dataset.productId=t;const d=document.createElement("img");d.src=L,d.classList.add("discount-icon-products");const m=u?`${d.outerHTML}`:"";return`<li class="product-card" data-id=${t}>
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
               ${n.outerHTML}
            </div>     
          </div>
        </li>`}).join("")}function I(e){return e.map(({_id:t,name:r,img:o,category:s,popularity:c,size:a,is10PercentOff:g})=>{const u=document.createElement("img");u.src=S,u.classList.add("popular-cart-img"),u.dataset.productId=t;const n=document.createElement("img");n.src=S,n.classList.add("popular-cart-img-down");const d=document.createElement("img");d.src=L,d.classList.add("discount-icon-popular");const m=g?`${d.outerHTML}${n.outerHTML}`:`${u.outerHTML}`;return`      
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
        </li>`}).slice(0,5).join("")}function v(e){return e.map(({_id:t,name:r,img:o,price:s})=>{const c=document.createElement("img");c.src=w,c.classList.add("cart-img-products"),c.dataset.productId=t;const a=document.createElement("img");return a.src=L,a.classList.add("discount-cheap"),`      
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
    </li>`}).slice(0,2).join("")}const A="/project-code_busters09/assets/icons-d9095b3f.svg";export{D as c,i as f,A as i,p as s,f as u};
//# sourceMappingURL=icons-3903b6d4.js.map
