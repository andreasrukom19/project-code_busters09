/* empty css                      */import{a}from"./assets/vendor-a61d8330.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();class P{constructor(){}saveInStorage(e,r){localStorage.setItem(e,JSON.stringify(r))}saveAllToLocalStorage(e){localStorage.setItem("products",JSON.stringify(e))}saveCategories(){if(!localStorage.getItem("categories"))return o.getCategories().then(e=>{console.log(e),localStorage.setItem("categories",JSON.stringify(e))})}defaultApiOptions(){localStorage.setItem("options","{keyword:null, category: null, page: 1, limit: 6}")}getApiOptions(){return JSON.parse(localStorage.getItem("options"))}setApiOptions(e,r){const n=JSON.parse(localStorage.getItem("options"));n.key=r}addToCart(e){const n=JSON.parse(localStorage.getItem("products")).find(s=>s._id===e);if(console.log(n),localStorage.getItem("cart")){const s=JSON.parse(localStorage.getItem("cart"));return localStorage.setItem("cart",JSON.stringify(s))}else return localStorage.setItem("cart",JSON.stringify(n))}getFromStorage(e){return JSON.parse(localStorage.getItem(`${e}`))}removeFromCart(e){localStorage.getItem("products"),JSON.parce(localStorage.getItem("cart"))}clearCart(){}saveOptionsToFoodService(e){o.perPage=e.limit,o.currentPage=e.page,o.category=e.category,o.searchQuerry=e.keyword}}class O{constructor(){this.URL="https://food-boutique.b.goit.study/api",this.currentPage=1,this.perPage=6,this.searchQuerry="",this.category=""}getBasicFoodList(){return window.innerWidth>=768&&window.innerWidth<1440?this.perPage=8:window.innerWidth>=1440&&(this.perPage=9),a.get(`${this.URL}/products?limit=${this.perPage}`).then(e=>e.data)}getFoodListWithOptions(){return window.innerWidth>=768&&window.innerWidth<1440?this.perPage=8:window.innerWidth>=1440&&(this.perPage=9),a.get(`${this.URL}/products?page=${this.currentPage}&limit=${this.perPage}&keyword=${this.searchQuerry}&category=${this.category}`).then(e=>e.data)}findProductById(e){return a.get(`${this.URL}/products/${e}`).then(r=>r.data)}getPopular(){return a.get(`${this.URL}/products/popular`).then(e=>e.data)}getDiscount(){return a.get(`${this.URL}/products/discount`).then(e=>e.data)}getCategories(){return a.get(`${this.URL}/products/categories`).then(e=>e.data)}resetPageCounter(){this.currentPage=1}incrementPage(){this.currentPage+=1}resetSearchQuerry(){this.searchQuerry=""}resetCategory(){this.category=""}subscribe(e){a.post(`${this.URL}/subscription`,{email:e})}order(e,r){a.post(`${this.URL}/orders`,{email:e,products:r})}}const L="/project-code_busters09/assets/cart-a9135e8e.svg",S=document.querySelector(".filter-box__list"),b=document.querySelector(".popular-products__list"),C=document.querySelector(".discount-products__list"),I=document.querySelector(".popular-products__list-responsive"),M=document.querySelector(".discount-products__list-responsive"),m=new P,o=new O;document.addEventListener("click",function(t){if(t.target.classList.contains("cart-img-products")){const e=t.target,r="../img/checked.svg";e.src=r}});T();k();E();function T(){o.getBasicFoodList().then(t=>{console.log(t),S.innerHTML=u(t.results),m.saveAllToLocalStorage(t.results),m.defaulApiOptions()}).catch(t=>{})}function g(){o.getFoodListWithOptions().then(t=>{S.innerHTML=u(t.results),m.saveAllToLocalStorage(t.results)}).catch(t=>{})}function k(){o.getPopular().then(t=>{b.innerHTML=f(t),I.innerHTML=f(t)}).catch(t=>{})}function E(){o.getDiscount().then(t=>{C.innerHTML=v(t),M.innerHTML=v(t)}).catch(t=>{})}const $=document.createElement("img");$.src=L;document.body.appendChild($);function u(t){return t.map(({_id:e,name:r,img:n,category:s,price:i,popularity:c,size:p,is10PercentOff:_})=>{const h=document.createElement("img");return h.src=L,`<li class="product-card" data-id=${e}>
          ${_?'<img class="discount-icon-products" src="../../assets/discount.svg" alt="Discount" />':""}
          <div class="img-container"><a href="${n}"><img class="product-card__img" src="${n}" alt="${r}" loading="lazy" /></a>
          </div>
          <div class="info">      
            <h2 class="info__title">${r}</h2>
            <div class="info-wrapper">
              <p class="info-wrapper__product">Category:<span>${s}</span></p>
              <p class="info-wrapper__product">Size:<span>${p}</span></p>
              <p class="info-wrapper__product">Popularity:<span>${c}</span></p>
            </div>
            <div class="info-wrapper__price-container" >
              <p class="info__price">$${i}</p> 
              ${h.outerHTML}
            </div>     
          </div>
        </li>`}).join("")}function f(t){return t.map(({_id:e,name:r,img:n,category:s,popularity:i,size:c,is10PercentOff:p})=>`      
      <li class="popular-item" data-id="${e}">
      ${p?'<img class="discount-icon-popular" src="./img/discount.svg" alt="Discount" />  <img class="popular-cart-img-down" src="./img/cartLight.svg" alt="cart" />':'<img class="popular-cart-img" src="./img/cartLight.svg" alt="cart" />'}
       
      <div class="popular-img-container"><img class="popular-item__img" src="${n}" alt="${r}" loading="lazy" />
      </div>
      <div class="popular-info">
        <h3 class="popular-info__title">${r}</h3>
        <div class="info-wrapper">
        <p class="info-wrapper__product">Category:<span>${s}</span></p>
        <p class="info-wrapper__product">Size:<span>${c}</span></p>
        <p class="info-wrapper__product">Popularity:<span>${i}</span></p>
        </div>             
      </div>
    </li>`).slice(0,5).join("")}function v(t){return t.map(({_id:e,name:r,img:n,price:s})=>`      
      <li class="discount-item" data-id="${e}">
       <img class="discount-cheap" src="./img/discount.svg" alt="cart" />  
      <div class="discount-img-container"><a href="${n}"><img class="discount-item__img" src="${n}" alt="${r}" loading="lazy" /></a>
      </div>
      <div class="discount-info">
        <h3 class="discount-info__title">${r}</h3>
        <div class="discount-img-wrapper">
        <p class="discount-info__price">$${s}</p>
         <img class="cart-img-products" src="./img/cart.svg" alt="cart" />      
        </div>        
      </div>
    </li>`).slice(0,2).join("")}window.addEventListener("resize",F);function F(){const t=window.innerWidth;t>=768&&t<1440&&o.perPage!==8?(o.perPage=8,g()):t>=1440&&o.perPage!==9?(o.perPage=9,g()):t<768&&o.perPage!==6&&(o.perPage=6,g())}const w=document.querySelector(".submit-form"),d=document.querySelector(".categories"),l=document.querySelector(".filter-box__list");document.addEventListener("DOMContentLoaded",function(){w.elements.search.value="",d.value=""});w.addEventListener("submit",t=>{t.preventDefault();const e=t.target.elements.search.value;o.searchQuerry=e,o.getFoodList().then(r=>{l.innerHTML=u(r.results)}).catch(r=>{throw console.error("Error fetching food list:",r.message),r})});d.addEventListener("change",function(){const t=d.value;d.value==="show-all"?(l.innerHTML="",o.getFoodList().then(e=>{l.innerHTML=u(e.results)})):(o.category=t,l.innerHTML="",o.getFoodList().then(e=>{l.innerHTML=u(e.results)}).catch(e=>{l.innerHTML=""}).finally(()=>{}))});o.getCategories().then(t=>{const e=document.createElement("option");e.value="",e.textContent="Categories",e.disabled=!0,e.selected=!0;const r=t.map(s=>{const i=document.createElement("option");return i.value=s,i.textContent=s,i}),n=H();r.push(n),d.appendChild(e),d.append(...r)});function H(){const t=document.createElement("option");return t.textContent="Show All",t.value="show-all",t}const y=document.querySelector(".modal"),N=document.querySelector(".main-products");N.addEventListener("click",A);async function A(t){const e=t.target.closest("li");if(e){const r=await o.findProductById(e.dataset.id);console.log(r),y.innerHTML=q(r)}y.style.display="block"}function q(t){return`
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
