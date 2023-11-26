/* empty css                      */import{a}from"./assets/vendor-a61d8330.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();class T{constructor(){}saveInStorage(e,o){localStorage.setItem(e,JSON.stringify(o))}getFromStorage(e){return JSON.parse(localStorage.getItem(`${e}`))}saveAllToLocalStorage(e){localStorage.setItem("products",JSON.stringify(e))}saveCategories(){if(!localStorage.getItem("categories"))return n.getCategories().then(e=>{console.log(e),localStorage.setItem("categories",JSON.stringify(e))})}defaultApiOptions(){const e={keyword:null,category:null,page:1,limit:6};localStorage.setItem("options",JSON.stringify(e))}addToCart(e){const i=JSON.parse(localStorage.getItem("products")).find(s=>s._id===e);if(localStorage.getItem("cart")){const s=JSON.parse(localStorage.getItem("cart"));return s.push(i),localStorage.setItem("cart",JSON.stringify(s))}else return localStorage.setItem("cart",JSON.stringify([i]))}removeFromCart(e){const o=JSON.parse(localStorage.getItem("cart")),i=o.find(r=>r._id===e),s=o.indexOf(i);return o.splice(s,1),console.log(o),localStorage.setItem("cart",JSON.stringify(o))}clearCart(){}saveOptionsToFoodService(e){n.perPage=e.limit,n.currentPage=e.page,n.category=e.category,n.searchQuerry=e.keyword}}class N{constructor(){this.URL="https://food-boutique.b.goit.study/api",this.currentPage=1,this.perPage=6,this.searchQuerry="",this.category=""}getBasicFoodList(){return window.innerWidth>=768&&window.innerWidth<1440?this.perPage=8:window.innerWidth>=1440&&(this.perPage=9),a.get(`${this.URL}/products?limit=${this.perPage}`).then(e=>e.data)}getFoodListWithOptions(){return window.innerWidth>=768&&window.innerWidth<1440?this.perPage=8:window.innerWidth>=1440&&(this.perPage=9),a.get(`${this.URL}/products?page=${this.currentPage}&limit=${this.perPage}&keyword=${this.searchQuerry}&category=${this.category}`).then(e=>e.data)}findProductById(e){return a.get(`${this.URL}/products/${e}`).then(o=>o.data)}getPopular(){return a.get(`${this.URL}/products/popular`).then(e=>e.data)}getDiscount(){return a.get(`${this.URL}/products/discount`).then(e=>e.data)}getCategories(){return a.get(`${this.URL}/products/categories`).then(e=>e.data)}resetPageCounter(){this.currentPage=1}incrementPage(){this.currentPage+=1}resetSearchQuerry(){this.searchQuerry=""}resetCategory(){this.category=""}subscribe(e){a.post(`${this.URL}/subscription`,{email:e})}order(e,o){a.post(`${this.URL}/orders`,{email:e,products:o})}}const E="/project-code_busters09/assets/cart-a9135e8e.svg",S="/project-code_busters09/assets/cartLight-0b4d3d6f.svg",y="/project-code_busters09/assets/discount-b955391f.svg",H="/project-code_busters09/assets/checked-295f5189.svg";function R(){document.addEventListener("click",function(t){if(t.target.classList.contains("cart-img-products")||t.target.classList.contains("main-cart-icon")||t.target.classList.contains("popular-cart-img")){const e=t.target;e.src=H}})}const I=document.querySelector(".filter-box__list"),q=document.querySelector(".popular-products__list"),A=document.querySelector(".discount-products__list"),F=document.querySelector(".popular-products__list-responsive"),D=document.querySelector(".discount-products__list-responsive"),p=new T,n=new N;document.addEventListener("click",function(t){t.target.tagName==="IMG"&&t.preventDefault()});v();J();U();R();function v(){n.getBasicFoodList().then(t=>{console.log(t),I.innerHTML=O(t.results),p.saveAllToLocalStorage(t.results),p.defaultApiOptions()}).catch(t=>{})}function m(){const t=p.getApiOptions();n.getFoodListWithOptions(t).then(e=>{I.innerHTML=O(e.results),p.saveAllToLocalStorage(e.results)}).catch(e=>{})}function J(){n.getPopular().then(t=>{q.innerHTML=$(t),F.innerHTML=$(t)}).catch(t=>{})}function U(){n.getDiscount().then(t=>{A.innerHTML=w(t),D.innerHTML=w(t)}).catch(t=>{})}function O(t){return t.map(({_id:e,name:o,img:i,category:s,price:r,popularity:c,size:f,is10PercentOff:g})=>{const l=document.createElement("img");l.src=E,l.classList.add("main-cart-icon");const d=document.createElement("img");d.src=y,d.classList.add("discount-icon-products");const h=g?`${d.outerHTML}`:"";return`<li class="product-card" data-id=${e}>
        ${h}
          <div class="img-container"><a href="${i}"><img class="product-card__img" src="${i}" alt="${o}" loading="lazy" /></a>
          </div>
          <div class="info">      
            <h2 class="info__title">${o}</h2>
            <div class="info-wrapper">
              <p class="info-wrapper__product">Category:<span>${s}</span></p>
              <p class="info-wrapper__product">Size:<span>${f}</span></p>
              <p class="info-wrapper__product">Popularity:<span>${c}</span></p>
            </div>
            <div class="info-wrapper__price-container" >
              <p class="info__price">$${r}</p> 
               ${l.outerHTML}
            </div>     
          </div>
        </li>`}).join("")}function $(t){return t.map(({_id:e,name:o,img:i,category:s,popularity:r,size:c,is10PercentOff:f})=>{const g=document.createElement("img");g.src=S,g.classList.add("popular-cart-img");const l=document.createElement("img");l.src=S,l.classList.add("popular-cart-img-down");const d=document.createElement("img");d.src=y,d.classList.add("discount-icon-popular");const h=f?`${d.outerHTML}${l.outerHTML}`:`${g.outerHTML}`;return`      
        <li class="popular-item" data-id="${e}">
          ${h}
          <div class="popular-img-container"><img class="popular-item__img" src="${i}" alt="${o}" loading="lazy" /></div>
          <div class="popular-info">
            <h3 class="popular-info__title">${o}</h3>
            <div class="info-wrapper">
              <p class="info-wrapper__product">Category:<span>${s}</span></p>
              <p class="info-wrapper__product">Size:<span>${c}</span></p>
              <p class="info-wrapper__product">Popularity:<span>${r}</span></p>
            </div>             
          </div>
        </li>`}).slice(0,5).join("")}function w(t){return t.map(({_id:e,name:o,img:i,price:s})=>{const r=document.createElement("img");r.src=E,r.classList.add("cart-img-products");const c=document.createElement("img");return c.src=y,c.classList.add("discount-cheap"),`      
      <li class="discount-item" data-id="${e}">
   
       ${c.outerHTML} 
      <div class="discount-img-container"><a href="${i}"><img class="discount-item__img" src="${i}" alt="${o}" loading="lazy" /></a>
      </div>
      <div class="discount-info">
        <h3 class="discount-info__title">${o}</h3>
        <div class="discount-img-wrapper">
        <p class="discount-info__price">$${s}</p>
        ${r.outerHTML} 
        </div>        
      </div>
    </li>`}).slice(0,2).join("")}window.addEventListener("resize",x);function x(){const t=window.innerWidth;t>=768&&t<1440&&n.perPage!==8?(n.perPage=8,m()):t>=1440&&n.perPage!==9?(n.perPage=9,m()):t<768&&n.perPage!==6&&(n.perPage=6,m())}const P=document.querySelector(".submit-form"),u=document.querySelector(".categories"),_=document.querySelector(".filter-box__list");document.addEventListener("DOMContentLoaded",function(){P.elements.search.value="",u.value=""});P.addEventListener("submit",t=>{t.preventDefault();const e=t.target.elements.search.value;n.searchQuerry=e;const o=p.getApiOptions();o.keyword=e||null,localStorage.setItem("options",JSON.stringify(o)),e?m():(n.resetSearchQuerry(),v())});u.addEventListener("change",function(){const t=u.value,e=p.getApiOptions();e.category=t||null,localStorage.setItem("options",JSON.stringify(e)),u.value==="show-all"?(_.innerHTML="",v()):(n.category=t,_.innerHTML="",m())});n.getCategories().then(t=>{const e=document.createElement("option");e.value="",e.textContent="Categories",e.disabled=!0,e.selected=!0;const o=t.map(s=>{const r=document.createElement("option");return r.value=s,r.textContent=s,r}),i=z();o.push(i),u.appendChild(e),u.append(...o)});function z(){const t=document.createElement("option");return t.textContent="Show All",t.value="show-all",t}const B={pagesRibbonEL:document.querySelector(".pag-ribbon")};B.pagesRibbonEL.addEventListener("click",W);function W(t){const e=t.target.closest("button").id;console.log(e)}const j=document.getElementById("subscriptionForm");j.addEventListener("submit",Q);function Q(t){t.preventDefault();const e=document.getElementById("emailInput");if(e.checkValidity()){const o=e.value;console.log(o),n.subscribe(o)}}const b="/project-code_busters09/assets/icons-ba4cd1e5.svg",C=document.querySelector(".modal"),V=document.querySelector(".modal-content"),G=document.querySelector(".main-products");G.addEventListener("click",K);async function K(t){if(t.target.classList.contains("main-cart-icon"))return;const e=t.target.closest("li");if(!e)return;const o=await n.findProductById(e.dataset.id);V.innerHTML=X(o),C.style.display="block",document.body.classList.add("no-scroll"),document.addEventListener("keydown",M),window.addEventListener("click",k)}function X(t){return`
  <button class="modal-btn-close">
  <svg class="close-sharp" width="16" height="16">
    <use href="${b}#icon-ion_close-sharp"></use>
  </svg>
</button>
<div class="modal-img-container">
  <img src="${t.img}" alt="${t.name}" class="modal-image" />
</div>
<div class="modal-info">
  <h2 class="modal-title">${t.name}</h2>
  <div class="modal-info-wrapper">
    <p class="modal-product">Category: <span>${t.category}</span></p>
    <p class="modal-product">Size: <span>${t.size}</span></p>
    <p class="modal-product">Popularity: <span>${t.popularity}</span></p>
  </div>
  <p class="modal-info-desc">${t.desc}</p>
</div>
<p class="modal-price">$${t.price}</p>
<button class="add-to-cart-btn">
  Add to
  <svg class="modal-cart" width="18" height="18">
    <use href="${b}#icon-heroicons-solid_shopping-cart"></use>
  </svg>
</button>
`}function M(t){t.key==="Escape"&&L()}function k(t){(t.target.classList.contains("modal")||t.target.closest(".modal-btn-close"))&&L()}function L(){C.style.display="none",document.removeEventListener("keydown",M),window.removeEventListener("click",k),document.body.classList.remove("no-scroll")}
//# sourceMappingURL=commonHelpers2.js.map
