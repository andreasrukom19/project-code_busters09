/* empty css                      */import{a as c}from"./assets/vendor-a61d8330.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();class E{constructor(){}saveInStorage(e,o){localStorage.setItem(e,JSON.stringify(o))}saveAllToLocalStorage(e){localStorage.setItem("products",JSON.stringify(e))}saveCategories(){if(!localStorage.getItem("categories"))return i.getCategories().then(e=>{console.log(e),localStorage.setItem("categories",JSON.stringify(e))})}defaultApiOptions(){const e={keyword:null,category:null,page:1,limit:6};localStorage.setItem("options",JSON.stringify(e))}getApiOptions(){return JSON.parse(localStorage.getItem("options"))}setApiOptions(e,o){JSON.parse(localStorage.getItem("options")),options[e]=o}addToCart(e){const n=JSON.parse(localStorage.getItem("products")).find(s=>s._id===e);if(console.log(n),localStorage.getItem("cart")){const s=JSON.parse(localStorage.getItem("cart"));return localStorage.setItem("cart",JSON.stringify(s))}else return localStorage.setItem("cart",JSON.stringify(n))}getFromStorage(e){return JSON.parse(localStorage.getItem(`${e}`))}removeFromCart(e){localStorage.getItem("products"),JSON.parce(localStorage.getItem("cart"))}clearCart(){}saveOptionsToFoodService(e){i.perPage=e.limit,i.currentPage=e.page,i.category=e.category,i.searchQuerry=e.keyword}}class C{constructor(){this.URL="https://food-boutique.b.goit.study/api",this.currentPage=1,this.perPage=6,this.searchQuerry="",this.category=""}getBasicFoodList(){return window.innerWidth>=768&&window.innerWidth<1440?this.perPage=8:window.innerWidth>=1440&&(this.perPage=9),c.get(`${this.URL}/products?limit=${this.perPage}`).then(e=>e.data)}getFoodListWithOptions(){return window.innerWidth>=768&&window.innerWidth<1440?this.perPage=8:window.innerWidth>=1440&&(this.perPage=9),c.get(`${this.URL}/products?page=${this.currentPage}&limit=${this.perPage}&keyword=${this.searchQuerry}&category=${this.category}`).then(e=>e.data)}findProductById(e){return c.get(`${this.URL}/products/${e}`).then(o=>o.data)}getPopular(){return c.get(`${this.URL}/products/popular`).then(e=>e.data)}getDiscount(){return c.get(`${this.URL}/products/discount`).then(e=>e.data)}getCategories(){return c.get(`${this.URL}/products/categories`).then(e=>e.data)}resetPageCounter(){this.currentPage=1}incrementPage(){this.currentPage+=1}resetSearchQuerry(){this.searchQuerry=""}resetCategory(){this.category=""}subscribe(e){c.post(`${this.URL}/subscription`,{email:e})}order(e,o){c.post(`${this.URL}/orders`,{email:e,products:o})}}const O="/project-code_busters09/assets/cart-a9135e8e.svg",L="/project-code_busters09/assets/cartLight-0b4d3d6f.svg",v="/project-code_busters09/assets/discount-b955391f.svg",P=document.querySelector(".filter-box__list"),M=document.querySelector(".popular-products__list"),T=document.querySelector(".discount-products__list"),N=document.querySelector(".popular-products__list-responsive"),A=document.querySelector(".discount-products__list-responsive"),p=new E,i=new C;document.addEventListener("click",function(t){if(t.target.classList.contains("cart-img-products")){const e=t.target,o="../img/checked.svg";e.src=o}});y();H();k();function y(){i.getBasicFoodList().then(t=>{console.log(t),P.innerHTML=I(t.results),p.saveAllToLocalStorage(t.results),p.defaultApiOptions()}).catch(t=>{})}function m(){const t=p.getApiOptions();i.getFoodListWithOptions(t).then(e=>{P.innerHTML=I(e.results),p.saveAllToLocalStorage(e.results)}).catch(e=>{})}function H(){i.getPopular().then(t=>{M.innerHTML=S(t),N.innerHTML=S(t)}).catch(t=>{})}function k(){i.getDiscount().then(t=>{T.innerHTML=$(t),A.innerHTML=$(t)}).catch(t=>{})}function I(t){return t.map(({_id:e,name:o,img:n,category:s,price:r,popularity:a,size:h,is10PercentOff:g})=>{const l=document.createElement("img");l.src=O,l.classList.add("main-cart-icon");const d=document.createElement("img");d.src=v,d.classList.add("discount-icon-products");const f=g?`${d.outerHTML}`:"";return`<li class="product-card" data-id=${e}>
        ${f}
          <div class="img-container"><a href="${n}"><img class="product-card__img" src="${n}" alt="${o}" loading="lazy" /></a>
          </div>
          <div class="info">      
            <h2 class="info__title">${o}</h2>
            <div class="info-wrapper">
              <p class="info-wrapper__product">Category:<span>${s}</span></p>
              <p class="info-wrapper__product">Size:<span>${h}</span></p>
              <p class="info-wrapper__product">Popularity:<span>${a}</span></p>
            </div>
            <div class="info-wrapper__price-container" >
              <p class="info__price">$${r}</p> 
               ${l.outerHTML}
            </div>     
          </div>
        </li>`}).join("")}function S(t){return t.map(({_id:e,name:o,img:n,category:s,popularity:r,size:a,is10PercentOff:h})=>{const g=document.createElement("img");g.src=L,g.classList.add("popular-cart-img");const l=document.createElement("img");l.src=L,l.classList.add("popular-cart-img-down");const d=document.createElement("img");d.src=v,d.classList.add("discount-icon-popular");const f=h?`${d.outerHTML}${l.outerHTML}`:`${g.outerHTML}`;return`      
        <li class="popular-item" data-id="${e}">
          ${f}
          <div class="popular-img-container"><img class="popular-item__img" src="${n}" alt="${o}" loading="lazy" /></div>
          <div class="popular-info">
            <h3 class="popular-info__title">${o}</h3>
            <div class="info-wrapper">
              <p class="info-wrapper__product">Category:<span>${s}</span></p>
              <p class="info-wrapper__product">Size:<span>${a}</span></p>
              <p class="info-wrapper__product">Popularity:<span>${r}</span></p>
            </div>             
          </div>
        </li>`}).slice(0,5).join("")}function $(t){return t.map(({_id:e,name:o,img:n,price:s})=>{const r=document.createElement("img");r.src=O,r.classList.add("cart-img-products");const a=document.createElement("img");return a.src=v,a.classList.add("discount-cheap"),`      
      <li class="discount-item" data-id="${e}">
   
       ${a.outerHTML} 
      <div class="discount-img-container"><a href="${n}"><img class="discount-item__img" src="${n}" alt="${o}" loading="lazy" /></a>
      </div>
      <div class="discount-info">
        <h3 class="discount-info__title">${o}</h3>
        <div class="discount-img-wrapper">
        <p class="discount-info__price">$${s}</p>
        ${r.outerHTML} 
        </div>        
      </div>
    </li>`}).slice(0,2).join("")}window.addEventListener("resize",J);function J(){const t=window.innerWidth;t>=768&&t<1440&&i.perPage!==8?(i.perPage=8,m()):t>=1440&&i.perPage!==9?(i.perPage=9,m()):t<768&&i.perPage!==6&&(i.perPage=6,m())}const b=document.querySelector(".submit-form"),u=document.querySelector(".categories"),w=document.querySelector(".filter-box__list");document.addEventListener("DOMContentLoaded",function(){b.elements.search.value="",u.value=""});b.addEventListener("submit",t=>{t.preventDefault();const e=t.target.elements.search.value;i.searchQuerry=e;const o=p.getApiOptions();o.keyword=e||null,localStorage.setItem("options",JSON.stringify(o)),e?m():(i.resetSearchQuerry(),y())});u.addEventListener("change",function(){const t=u.value,e=p.getApiOptions();e.category=t||null,localStorage.setItem("options",JSON.stringify(e)),u.value==="show-all"?(w.innerHTML="",y()):(i.category=t,w.innerHTML="",m())});i.getCategories().then(t=>{const e=document.createElement("option");e.value="",e.textContent="Categories",e.disabled=!0,e.selected=!0;const o=t.map(s=>{const r=document.createElement("option");return r.value=s,r.textContent=s,r}),n=R();o.push(n),u.appendChild(e),u.append(...o)});function R(){const t=document.createElement("option");return t.textContent="Show All",t.value="show-all",t}const _=document.querySelector(".modal"),q=document.querySelector(".main-products");q.addEventListener("click",U);async function U(t){const e=t.target.closest("li");if(e){const o=await i.findProductById(e.dataset.id);console.log(o),_.innerHTML=F(o)}_.style.display="block"}function F(t){return`
  <div class="backdrop"></div>
  <div class='modal-content'>
  <button class='modal-btn-close'>
    <svg class='close-sharp' width='16' height='16'>
      <use href='./img/icons.svg#icon-ion_close-sharp'></use>
    </svg></button>
  <div class='modal-img-container'>
    <img src="${t.img}" alt="${t.name}" class="modal-image" /></div>
  <div class='modal-info'>
    <h2 class='modal-title'>${t.name}</h2>
    <div class='modal-info-wrapper'>
              <p class='modal-product'>Category: <span>${t.category}</span></p>
              <p class='modal-product'>Size: <span>${t.size}</span></p>
              <p class='modal-product'>Popularity: <span>${t.popularity}</span></p>
    </div>
    <p class='modal-info-desc'>${t.desc}</p>
  </div>
    <p class='modal-price'>$${t.price}</p>
    <button class="add-to-cart-btn">Add to
    <svg class='modal-cart' width='18' height='18'>
    <use href='./img/icons.svg#icon-heroicons-solid_shopping-cart'></use>
    </svg>
    </button>
  </div>`}
//# sourceMappingURL=commonHelpers2.js.map
