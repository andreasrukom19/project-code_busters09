/* empty css                      */import{a}from"./assets/vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();class T{constructor(){}createAndSaveInStorage(t,o){localStorage.setItem(`${t}`,JSON.stringify(o))}getFromStorage(t){return JSON.parse(localStorage.getItem(`${t}`))}saveCardsToLocalStorage(t){localStorage.setItem("products",JSON.stringify(t))}saveCategories(){if(!localStorage.getItem("categories"))return i.getCategories().then(t=>{console.log(t),localStorage.setItem("categories",JSON.stringify(t))})}defaultApiOptions(){const t={keyword:null,category:null,page:1,limit:6};localStorage.setItem("options",JSON.stringify(t))}setApiOptions(t,o){const n=JSON.parse(localStorage.getItem("options"));n[t]=o,console.log(n)}addToCart(t){const n=JSON.parse(localStorage.getItem("products")).find(s=>s._id===t);if(localStorage.getItem("cart")){const s=JSON.parse(localStorage.getItem("cart"));return s.push(n),localStorage.setItem("cart",JSON.stringify(s))}else return localStorage.setItem("cart",JSON.stringify([n]))}removeFromCart(t){const o=JSON.parse(localStorage.getItem("cart")),n=o.find(r=>r._id===t),s=o.indexOf(n);return o.splice(s,1),console.log(o),localStorage.setItem("cart",JSON.stringify(o))}clearCart(){localStorage.removeItem("cart")}getFromStorage(t){return JSON.parse(localStorage.getItem(`${t}`))}saveOptionsToFoodService(t){i.perPage=t.limit,i.currentPage=t.page,i.category=t.category,i.searchQuerry=t.keyword}}class N{constructor(){this.URL="https://food-boutique.b.goit.study/api",this.currentPage=1,this.perPage=6,this.searchQuerry="",this.category=""}getBasicFoodList(){return window.innerWidth>=768&&window.innerWidth<1440?this.perPage=8:window.innerWidth>=1440&&(this.perPage=9),a.get(`${this.URL}/products?limit=${this.perPage}`).then(t=>t.data)}getFoodListWithOptions(){return window.innerWidth>=768&&window.innerWidth<1440?this.perPage=8:window.innerWidth>=1440&&(this.perPage=9),a.get(`${this.URL}/products?page=${this.currentPage}&limit=${this.perPage}&keyword=${this.searchQuerry}&category=${this.category}`).then(t=>t.data)}findProductById(t){return a.get(`${this.URL}/products/${t}`).then(o=>o.data)}getPopular(){return a.get(`${this.URL}/products/popular`).then(t=>t.data)}getDiscount(){return a.get(`${this.URL}/products/discount`).then(t=>t.data)}getCategories(){return a.get(`${this.URL}/products/categories`).then(t=>t.data)}resetPageCounter(){this.currentPage=1}incrementPage(){this.currentPage+=1}resetSearchQuerry(){this.searchQuerry=""}resetCategory(){this.category=""}subscribe(t){a.post(`${this.URL}/subscription`,{email:t})}order(t,o){a.post(`${this.URL}/orders`,{email:t,products:o})}}const I="/project-code_busters09/assets/cart-a9135e8e.svg",S="/project-code_busters09/assets/cartLight-0b4d3d6f.svg",y="/project-code_busters09/assets/discount-b955391f.svg",A="/project-code_busters09/assets/checked-295f5189.svg";function H(){document.addEventListener("click",function(e){if(e.target.classList.contains("cart-img-products")||e.target.classList.contains("main-cart-icon")||e.target.classList.contains("popular-cart-img")){const t=e.target;t.src=A}})}const O=document.querySelector(".filter-box__list"),R=document.querySelector(".popular-products__list"),q=document.querySelector(".discount-products__list"),F=document.querySelector(".popular-products__list-responsive"),J=document.querySelector(".discount-products__list-responsive"),p=new T,i=new N;document.addEventListener("click",function(e){e.target.tagName==="IMG"&&e.preventDefault()});v();D();U();H();function v(){i.getBasicFoodList().then(e=>{console.log(e),O.innerHTML=E(e.results),p.saveAllToLocalStorage(e.results),p.defaultApiOptions()}).catch(e=>{})}function m(){const e=p.getApiOptions();i.getFoodListWithOptions(e).then(t=>{O.innerHTML=E(t.results),p.saveAllToLocalStorage(t.results)}).catch(t=>{})}function D(){i.getPopular().then(e=>{R.innerHTML=$(e),F.innerHTML=$(e)}).catch(e=>{})}function U(){i.getDiscount().then(e=>{q.innerHTML=w(e),J.innerHTML=w(e)}).catch(e=>{})}function E(e){return e.map(({_id:t,name:o,img:n,category:s,price:r,popularity:c,size:f,is10PercentOff:g})=>{const l=document.createElement("img");l.src=I,l.classList.add("main-cart-icon");const d=document.createElement("img");d.src=y,d.classList.add("discount-icon-products");const h=g?`${d.outerHTML}`:"";return`<li class="product-card" data-id=${t}>
        ${h}
          <div class="img-container"><a href="${n}"><img class="product-card__img" src="${n}" alt="${o}" loading="lazy" /></a>
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
        </li>`}).join("")}function $(e){return e.map(({_id:t,name:o,img:n,category:s,popularity:r,size:c,is10PercentOff:f})=>{const g=document.createElement("img");g.src=S,g.classList.add("popular-cart-img");const l=document.createElement("img");l.src=S,l.classList.add("popular-cart-img-down");const d=document.createElement("img");d.src=y,d.classList.add("discount-icon-popular");const h=f?`${d.outerHTML}${l.outerHTML}`:`${g.outerHTML}`;return`      
        <li class="popular-item" data-id="${t}">
          ${h}
          <div class="popular-img-container"><img class="popular-item__img" src="${n}" alt="${o}" loading="lazy" /></div>
          <div class="popular-info">
            <h3 class="popular-info__title">${o}</h3>
            <div class="info-wrapper">
              <p class="info-wrapper__product">Category:<span>${s}</span></p>
              <p class="info-wrapper__product">Size:<span>${c}</span></p>
              <p class="info-wrapper__product">Popularity:<span>${r}</span></p>
            </div>             
          </div>
        </li>`}).slice(0,5).join("")}function w(e){return e.map(({_id:t,name:o,img:n,price:s})=>{const r=document.createElement("img");r.src=I,r.classList.add("cart-img-products");const c=document.createElement("img");return c.src=y,c.classList.add("discount-cheap"),`      
      <li class="discount-item" data-id="${t}">
   
       ${c.outerHTML} 
      <div class="discount-img-container"><a href="${n}"><img class="discount-item__img" src="${n}" alt="${o}" loading="lazy" /></a>
      </div>
      <div class="discount-info">
        <h3 class="discount-info__title">${o}</h3>
        <div class="discount-img-wrapper">
        <p class="discount-info__price">$${s}</p>
        ${r.outerHTML} 
        </div>        
      </div>
    </li>`}).slice(0,2).join("")}window.addEventListener("resize",B);function B(){const e=window.innerWidth;e>=768&&e<1440&&i.perPage!==8?(i.perPage=8,m()):e>=1440&&i.perPage!==9?(i.perPage=9,m()):e<768&&i.perPage!==6&&(i.perPage=6,m())}const C=document.querySelector(".submit-form"),u=document.querySelector(".categories"),_=document.querySelector(".filter-box__list");document.addEventListener("DOMContentLoaded",function(){C.elements.search.value="",u.value=""});C.addEventListener("submit",e=>{e.preventDefault();const t=e.target.elements.search.value;i.searchQuerry=t;const o=p.getApiOptions();o.keyword=t||null,localStorage.setItem("options",JSON.stringify(o)),t?m():(i.resetSearchQuerry(),v())});u.addEventListener("change",function(){const e=u.value,t=p.getApiOptions();t.category=e||null,localStorage.setItem("options",JSON.stringify(t)),u.value==="show-all"?(_.innerHTML="",v()):(i.category=e,_.innerHTML="",m())});i.getCategories().then(e=>{const t=document.createElement("option");t.value="",t.textContent="Categories",t.disabled=!0,t.selected=!0;const o=e.map(s=>{const r=document.createElement("option");return r.value=s,r.textContent=s,r}),n=x();o.push(n),u.appendChild(t),u.append(...o)});function x(){const e=document.createElement("option");return e.textContent="Show All",e.value="show-all",e}const z={pagesRibbonEL:document.querySelector(".pag-ribbon")};z.pagesRibbonEL.addEventListener("click",W);function W(e){const t=e.target.closest("button").id;console.log(t)}const j=document.getElementById("subscriptionForm");j.addEventListener("submit",Q);function Q(e){e.preventDefault();const t=document.getElementById("emailInput");if(t.checkValidity()){const o=t.value;console.log(o),i.subscribe(o)}}const b="/project-code_busters09/assets/icons-ba4cd1e5.svg",P=document.querySelector(".modal"),V=document.querySelector(".modal-content"),G=document.querySelector(".main-products");G.addEventListener("click",K);async function K(e){if(e.target.classList.contains("main-cart-icon")||e.target.classList.contains("cart-img-products")||e.target.classList.contains("popular-cart-img"))return;const t=e.target.closest("li");if(!t)return;const o=await i.findProductById(t.dataset.id);console.log("ID",o),V.innerHTML=Y(o),Z(),document.querySelector(".add-to-cart-btn").addEventListener("click",X)}function X(){this.firstChild.textContent="Added to"}function Y(e){return`
  <button class="modal-btn-close">
  <svg class="close-sharp" width="16" height="16">
    <use href="${b}#icon-ion_close-sharp"></use>
  </svg>
</button>
<div class="modal-img-container">
  <img src="${e.img}" alt="${e.name}" class="modal-image" />
</div>
<div class="modal-info">
  <h2 class="modal-title">${e.name}</h2>
  <div class="modal-info-wrapper">
    <p class="modal-product">Category: <span>${e.category}</span></p>
    <p class="modal-product">Size: <span>${e.size}</span></p>
    <p class="modal-product">Popularity: <span>${e.popularity}</span></p>
  </div>
  <p class="modal-info-desc">${e.desc}</p>
</div>
<p class="modal-price">$${e.price}</p>
<button class="add-to-cart-btn">
  Add to
  <svg class="modal-cart" width="18" height="18">
    <use href="${b}#icon-heroicons-solid_shopping-cart"></use>
  </svg>
</button>
`}function M(e){e.key==="Escape"&&L()}function k(e){(e.target.classList.contains("modal")||e.target.closest(".modal-btn-close"))&&L()}function Z(){P.style.display="block",document.body.classList.add("no-scroll"),document.addEventListener("keydown",M),window.addEventListener("click",k)}function L(){P.style.display="none",document.removeEventListener("keydown",M),window.removeEventListener("click",k),document.body.classList.remove("no-scroll")}
//# sourceMappingURL=commonHelpers2.js.map
