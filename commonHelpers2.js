/* empty css                      */import{a}from"./assets/vendor-a61d8330.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();class S{constructor(){}saveInStorage(e,r){localStorage.setItem(e,JSON.stringify(r))}saveAllToLocalStorage(e){localStorage.setItem("products",JSON.stringify(e))}saveCategories(){if(!localStorage.getItem("categories"))return s.getCategories().then(e=>{console.log(e),localStorage.setItem("categories",JSON.stringify(e))})}defaultApiOptions(){localStorage.setItem("options","{keyword:null, category: null, page: 1, limit: 6}")}getApiOptions(){return JSON.parse(localStorage.getItem("options"))}setApiOptions(e,r){const n=JSON.parse(localStorage.getItem("options"));n.key=r}addToCart(e){const n=JSON.parse(localStorage.getItem("products")).find(o=>o._id===e);if(console.log(n),localStorage.getItem("cart")){const o=JSON.parse(localStorage.getItem("cart"));return localStorage.setItem("cart",JSON.stringify(o))}else return localStorage.setItem("cart",JSON.stringify(n))}getFromStorage(e){return JSON.parse(localStorage.getItem(`${e}`))}removeFromCart(e){localStorage.getItem("products"),JSON.parce(localStorage.getItem("cart"))}clearCart(){}saveOptionsToFoodService(e){s.perPage=e.limit,s.currentPage=e.page,s.category=e.category,s.searchQuerry=e.keyword}}class w{constructor(){this.URL="https://food-boutique.b.goit.study/api",this.currentPage=1,this.perPage=6,this.searchQuerry="",this.category=""}getBasicFoodList(){return window.innerWidth>=768&&window.innerWidth<1440?this.perPage=8:window.innerWidth>=1440&&(this.perPage=9),a.get(`${this.URL}/products?limit=${this.perPage}`).then(e=>e.data)}getFoodListWithOptions(){return window.innerWidth>=768&&window.innerWidth<1440?this.perPage=8:window.innerWidth>=1440&&(this.perPage=9),a.get(`${this.URL}/products?page=${this.currentPage}&limit=${this.perPage}&keyword=${this.searchQuerry}&category=${this.category}`).then(e=>e.data)}findProductById(e){return a.get(`${this.URL}/products/${e}`).then(r=>r.data)}getPopular(){return a.get(`${this.URL}/products/popular`).then(e=>e.data)}getDiscount(){return a.get(`${this.URL}/products/discount`).then(e=>e.data)}getCategories(){return a.get(`${this.URL}/products/categories`).then(e=>e.data)}resetPageCounter(){this.currentPage=1}incrementPage(){this.currentPage+=1}resetSearchQuerry(){this.searchQuerry=""}resetCategory(){this.category=""}subscribe(e){a.post(`${this.URL}/subscription`,{email:e})}order(e,r){a.post(`${this.URL}/orders`,{email:e,products:r})}}const _="/project-code_busters09/assets/icons-44b879f2.svg",v=document.querySelector(".filter-box__list"),$=document.querySelector(".popular-products__list"),P=document.querySelector(".discount-products__list"),O=document.querySelector(".popular-products__list-responsive"),I=document.querySelector(".discount-products__list-responsive"),h=new S,s=new w;document.addEventListener("click",function(t){if(t.target.classList.contains("cart-img-products")){const e=t.target,r="../img/checked.svg";e.src=r}});C();M();T();function C(){s.getBasicFoodList().then(t=>{v.innerHTML=p(t.results),h.saveAllToLocalStorage(t.results),h.defaulApiOptions()}).catch(t=>{})}function g(){s.getFoodListWithOptions().then(t=>{v.innerHTML=p(t.results),h.saveAllToLocalStorage(t.results)}).catch(t=>{})}function M(){s.getPopular().then(t=>{$.innerHTML=m(t),O.innerHTML=m(t)}).catch(t=>{})}function T(){s.getDiscount().then(t=>{P.innerHTML=f(t),I.innerHTML=f(t)}).catch(t=>{})}function p(t){return t.map(({_id:e,name:r,img:n,category:o,price:i,popularity:c,size:d,is10PercentOff:L})=>`<li class="product-card data-id="${e}">
        ${L?'<img class="discount-icon-products" src="../../assets/discount.svg" alt="Discount" />':""}
      <div class="img-container"><a href="${n}"><img class="product-card__img" src="${n}" alt="${r}" loading="lazy" /></a>
      </div>
      <div class="info">      
        <h2 class="info__title">${r}</h2>
        <div class="info-wrapper">
        <p class="info-wrapper__product">Category:<span>${o}</span></p>
        <p class="info-wrapper__product">Size:<span>${d}</span></p>
        <p class="info-wrapper__product">Popularity:<span>${c}</span></p>
        </div>
        <div class="info-wrapper__price-container" >
          <p class="info__price">$${i}</p>       
          <svg class="cart-img-products" width="34" height="34">
            <use href="${_}#icon-heroicons-solid_shopping-cart"></use>
          </svg>
        </div>     
      </div>
    </li>`).join("")}function m(t){return t.map(({_id:e,name:r,img:n,category:o,popularity:i,size:c,is10PercentOff:d})=>`      
      <li class="popular-item" data-id="${e}">
      ${d?'<img class="discount-icon-popular" src="./img/discount.svg" alt="Discount" />  <img class="popular-cart-img-down" src="./img/cartLight.svg" alt="cart" />':'<img class="popular-cart-img" src="./img/cartLight.svg" alt="cart" />'}
       
      <div class="popular-img-container"><img class="popular-item__img" src="${n}" alt="${r}" loading="lazy" />
      </div>
      <div class="popular-info">
        <h3 class="popular-info__title">${r}</h3>
        <div class="info-wrapper">
        <p class="info-wrapper__product">Category:<span>${o}</span></p>
        <p class="info-wrapper__product">Size:<span>${c}</span></p>
        <p class="info-wrapper__product">Popularity:<span>${i}</span></p>
        </div>             
      </div>
    </li>`).slice(0,5).join("")}function f(t){return t.map(({_id:e,name:r,img:n,price:o})=>`      
      <li class="discount-item" data-id="${e}">
       <img class="discount-cheap" src="./img/discount.svg" alt="cart" />  
      <div class="discount-img-container"><a href="${n}"><img class="discount-item__img" src="${n}" alt="${r}" loading="lazy" /></a>
      </div>
      <div class="discount-info">
        <h3 class="discount-info__title">${r}</h3>
        <div class="discount-img-wrapper">
        <p class="discount-info__price">$${o}</p>
         <img class="cart-img-products" src="./img/cart.svg" alt="cart" />      
        </div>        
      </div>
    </li>`).slice(0,2).join("")}window.addEventListener("resize",b);function b(){const t=window.innerWidth;t>=768&&t<1440&&s.perPage!==8?(s.perPage=8,g()):t>=1440&&s.perPage!==9?(s.perPage=9,g()):t<768&&s.perPage!==6&&(s.perPage=6,g())}const y=document.querySelector(".submit-form"),u=document.querySelector(".categories"),l=document.querySelector(".filter-box__list");document.addEventListener("DOMContentLoaded",function(){y.elements.search.value="",u.value=""});y.addEventListener("submit",t=>{t.preventDefault();const e=t.target.elements.search.value;s.searchQuerry=e,s.getFoodList().then(r=>{l.innerHTML=p(r.results)}).catch(r=>{throw console.error("Error fetching food list:",r.message),r})});u.addEventListener("change",function(){const t=u.value;u.value==="show-all"?(l.innerHTML="",s.getFoodList().then(e=>{l.innerHTML=p(e.results)})):(s.category=t,l.innerHTML="",s.getFoodList().then(e=>{l.innerHTML=p(e.results)}).catch(e=>{l.innerHTML=""}).finally(()=>{}))});s.getCategories().then(t=>{const e=document.createElement("option");e.value="",e.textContent="Categories",e.disabled=!0,e.selected=!0;const r=t.map(o=>{const i=document.createElement("option");return i.value=o,i.textContent=o,i}),n=F();r.push(n),u.appendChild(e),u.append(...r)});function F(){const t=document.createElement("option");return t.textContent="Show All",t.value="show-all",t}
//# sourceMappingURL=commonHelpers2.js.map
