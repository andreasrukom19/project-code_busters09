/* empty css                      */import{a as c}from"./assets/vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();class I{constructor(){}saveInStorage(t,r){localStorage.setItem(t,JSON.stringify(r))}saveAllToLocalStorage(t){localStorage.setItem("products",JSON.stringify(t))}saveCategories(){if(!localStorage.getItem("categories"))return s.getCategories().then(t=>{console.log(t),localStorage.setItem("categories",JSON.stringify(t))})}defaultApiOptions(){localStorage.setItem("options","{keyword:null, category: null, page: 1, limit: 6}")}getApiOptions(){return JSON.parse(localStorage.getItem("options"))}setApiOptions(t,r){const n=JSON.parse(localStorage.getItem("options"));n.key=r}addToCart(t){const n=JSON.parse(localStorage.getItem("products")).find(o=>o._id===t);if(console.log(n),localStorage.getItem("cart")){const o=JSON.parse(localStorage.getItem("cart"));return localStorage.setItem("cart",JSON.stringify(o))}else return localStorage.setItem("cart",JSON.stringify(n))}getFromStorage(t){return JSON.parse(localStorage.getItem(`${t}`))}removeFromCart(t){localStorage.getItem("products"),JSON.parce(localStorage.getItem("cart"))}clearCart(){}saveOptionsToFoodService(t){s.perPage=t.limit,s.currentPage=t.page,s.category=t.category,s.searchQuerry=t.keyword}}class P{constructor(){this.URL="https://food-boutique.b.goit.study/api",this.currentPage=1,this.perPage=6,this.searchQuerry="",this.category=""}getBasicFoodList(){return window.innerWidth>=768&&window.innerWidth<1440?this.perPage=8:window.innerWidth>=1440&&(this.perPage=9),c.get(`${this.URL}/products?limit=${this.perPage}`).then(t=>t.data)}getFoodListWithOptions(){return window.innerWidth>=768&&window.innerWidth<1440?this.perPage=8:window.innerWidth>=1440&&(this.perPage=9),c.get(`${this.URL}/products?page=${this.currentPage}&limit=${this.perPage}&keyword=${this.searchQuerry}&category=${this.category}`).then(t=>t.data)}findProductById(t){return c.get(`${this.URL}/products/${t}`).then(r=>r.data)}getPopular(){return c.get(`${this.URL}/products/popular`).then(t=>t.data)}getDiscount(){return c.get(`${this.URL}/products/discount`).then(t=>t.data)}getCategories(){return c.get(`${this.URL}/products/categories`).then(t=>t.data)}resetPageCounter(){this.currentPage=1}incrementPage(){this.currentPage+=1}resetSearchQuerry(){this.searchQuerry=""}resetCategory(){this.category=""}subscribe(t){c.post(`${this.URL}/subscription`,{email:t})}order(t,r){c.post(`${this.URL}/orders`,{email:t,products:r})}}const $=document.querySelector(".filter-box__list"),O=document.querySelector(".popular-products__list"),C=document.querySelector(".discount-products__list"),b=document.querySelector(".popular-products__list-responsive"),T=document.querySelector(".discount-products__list-responsive"),m=new I,s=new P;document.addEventListener("click",function(e){if(e.target.classList.contains("cart-img-products")){const t=e.target,r="../img/checked.svg";t.src=r}});M();k();D();function M(){s.getBasicFoodList().then(e=>{console.log(e),$.innerHTML=d(e.results),m.saveAllToLocalStorage(e.results),m.defaulApiOptions()}).catch(e=>{})}function g(){s.getFoodListWithOptions().then(e=>{$.innerHTML=d(e.results),m.saveAllToLocalStorage(e.results)}).catch(e=>{})}function k(){s.getPopular().then(e=>{O.innerHTML=f(e),b.innerHTML=f(e)}).catch(e=>{})}function D(){s.getDiscount().then(e=>{C.innerHTML=v(e),T.innerHTML=v(e)}).catch(e=>{})}function d(e){return e.map(({_id:t,name:r,img:n,category:o,price:i,popularity:a,size:p,is10PercentOff:h})=>`<li class="product-card" data-id=${t}>
        ${h?'<img class="discount-icon-products" src="../img/discount.svg" alt="Discount" />':""}
          <div class="img-container"><a href="${n}"><img class="product-card__img" src="${n}" alt="${r}" loading="lazy" /></a>
          </div>
          <div class="info">      
            <h2 class="info__title">${r}</h2>
            <div class="info-wrapper">
              <p class="info-wrapper__product">Category:<span>${o}</span></p>
              <p class="info-wrapper__product">Size:<span>${p}</span></p>
              <p class="info-wrapper__product">Popularity:<span>${a}</span></p>
            </div>
            <div class="info-wrapper__price-container" >
              <p class="info__price">$${i}</p> 
              <img src="./img/cart.svg" alt="cart" class="main-cart-icon"/>
            </div>     
          </div>
        </li>`).join("")}function f(e){return e.map(({_id:t,name:r,img:n,category:o,popularity:i,size:a,is10PercentOff:p})=>`      
        <li class="popular-item" data-id="${t}">
          ${p?'<img class="discount-icon-popular" src="./img/discount.svg" alt="Discount" /><img class="popular-cart-img-down" src="./img/cartLight.svg" alt="cart" />':'<img class="popular-cart-img" src="./img/cartLight.svg" alt="cart" />'}
          <div class="popular-img-container"><img class="popular-item__img" src="${n}" alt="${r}" loading="lazy" /></div>
          <div class="popular-info">
            <h3 class="popular-info__title">${r}</h3>
            <div class="info-wrapper">
              <p class="info-wrapper__product">Category:<span>${o}</span></p>
              <p class="info-wrapper__product">Size:<span>${a}</span></p>
              <p class="info-wrapper__product">Popularity:<span>${i}</span></p>
            </div>             
          </div>
        </li>`).slice(0,5).join("")}function v(e){return e.map(({_id:t,name:r,img:n,price:o})=>`      
      <li class="discount-item" data-id="${t}">
   
       <img class="discount-cheap" src="./img/discount.svg" alt="Discount" /> 
      <div class="discount-img-container"><a href="${n}"><img class="discount-item__img" src="${n}" alt="${r}" loading="lazy" /></a>
      </div>
      <div class="discount-info">
        <h3 class="discount-info__title">${r}</h3>
        <div class="discount-img-wrapper">
        <p class="discount-info__price">$${o}</p>
         <img class="cart-img-products" src="./img/cart.svg" alt="cart" /> 
        </div>        
      </div>
    </li>`).slice(0,2).join("")}window.addEventListener("resize",E);function E(){const e=window.innerWidth;e>=768&&e<1440&&s.perPage!==8?(s.perPage=8,g()):e>=1440&&s.perPage!==9?(s.perPage=9,g()):e<768&&s.perPage!==6&&(s.perPage=6,g())}const S=document.querySelector(".submit-form"),u=document.querySelector(".categories"),l=document.querySelector(".filter-box__list");document.addEventListener("DOMContentLoaded",function(){S.elements.search.value="",u.value=""});S.addEventListener("submit",e=>{e.preventDefault();const t=e.target.elements.search.value;s.searchQuerry=t,s.getFoodList().then(r=>{l.innerHTML=d(r.results)}).catch(r=>{throw console.error("Error fetching food list:",r.message),r})});u.addEventListener("change",function(){const e=u.value;u.value==="show-all"?(l.innerHTML="",s.getFoodList().then(t=>{l.innerHTML=d(t.results)})):(s.category=e,l.innerHTML="",s.getFoodList().then(t=>{l.innerHTML=d(t.results)}).catch(t=>{l.innerHTML=""}).finally(()=>{}))});s.getCategories().then(e=>{const t=document.createElement("option");t.value="",t.textContent="Categories",t.disabled=!0,t.selected=!0;const r=e.map(o=>{const i=document.createElement("option");return i.value=o,i.textContent=o,i}),n=F();r.push(n),u.appendChild(t),u.append(...r)});function F(){const e=document.createElement("option");return e.textContent="Show All",e.value="show-all",e}const y=document.querySelector(".modal"),N=document.querySelector(".main-products");N.addEventListener("click",A);async function A(e){const t=e.target.closest("li");if(t){const r=await s.findProductById(t.dataset.id);console.log(r),y.innerHTML=H(r)}y.style.display="block"}function H(e){return`
  <div class="backdrop"></div>
  <div class='modal-content'>
  <button class='modal-btn-close'>
    <svg class='close-sharp' width='16' height='16'>
      <use href='./img/icons.svg#icon-ion_close-sharp'></use>
    </svg></button>
  <div class='modal-img-container'>
    <img src="${e.img}" alt="${e.name}" class="modal-image" /></div>
  <div class='modal-info'>
    <h2 class='modal-title'>${e.name}</h2>
    <div class='modal-info-wrapper'>
              <p class='modal-product'>Category: <span>${e.category}</span></p>
              <p class='modal-product'>Size: <span>${e.size}</span></p>
              <p class='modal-product'>Popularity: <span>${e.popularity}</span></p>
    </div>
    <p class='modal-info-desc'>${e.desc}</p>
  </div>
    <p class='modal-price'>$${e.price}</p>
    <button class="add-to-cart-btn">Add to
    <svg class='modal-cart' width='18' height='18'>
    <use href='./img/icons.svg#icon-heroicons-solid_shopping-cart'></use>
    </svg>
    </button>
  </div>`}
//# sourceMappingURL=commonHelpers2.js.map
