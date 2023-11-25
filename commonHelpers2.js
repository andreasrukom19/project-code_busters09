/* empty css                      */import{a}from"./assets/vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();class y{constructor(){this.URL="https://food-boutique.b.goit.study/api",this.currentPage=1,this.perPage=6,this.searchQuerry="",this.category=""}getBasicFoodList(){return window.innerWidth>=768&&window.innerWidth<1440?this.perPage=8:window.innerWidth>=1440&&(this.perPage=9),a.get(`${this.URL}/products?limit=${this.perPage}`).then(t=>t.data)}getFoodListWithOptions(){return window.innerWidth>=768&&window.innerWidth<1440?this.perPage=8:window.innerWidth>=1440&&(this.perPage=9),a.get(`${this.URL}/products?page=${this.currentPage}&limit=${this.perPage}&keyword=${this.searchQuerry}&category=${this.category}`).then(t=>t.data)}findProductById(t){return a.get(`${this.URL}/products/${t}`).then(r=>r.data)}getPopular(){return a.get(`${this.URL}/products/popular`).then(t=>t.data)}getDiscount(){return a.get(`${this.URL}/products/discount`).then(t=>t.data)}getCategories(){return a.get(`${this.URL}/products/categories`).then(t=>t.data)}resetPageCounter(){this.currentPage=1}incrementPage(){this.currentPage+=1}resetSearchQuerry(){this.searchQuerry=""}resetCategory(){this.category=""}subscribe(t){a.post(`${this.URL}/subscription`,{email:t})}order(t,r){a.post(`${this.URL}/orders`,{email:t,products:r})}}const L="/project-code_busters09/assets/icons-44b879f2.svg",S=document.querySelector(".filter-box__list"),_=document.querySelector(".popular-products__list"),$=document.querySelector(".discount-products__list"),w=document.querySelector(".popular-products__list-responsive"),P=document.querySelector(".discount-products__list-responsive"),g=new b,n=new y;document.addEventListener("click",function(e){if(e.target.classList.contains("cart-img-products")){const t=e.target,r="../img/checked.svg";t.src=r}});O();I();C();function O(){n.getBasicFoodList().then(e=>{S.innerHTML=p(e.results),g.saveAllToLocalStorage(e.results),g.defaulApiOptions()}).catch(e=>{})}function I(){n.getPopular().then(e=>{_.innerHTML=m(e),w.innerHTML=m(e)}).catch(e=>{})}function C(){n.getDiscount().then(e=>{$.innerHTML=h(e),P.innerHTML=h(e)}).catch(e=>{})}function p(e){return e.map(({_id:t,name:r,img:i,category:o,price:s,popularity:c,size:d,is10PercentOff:v})=>`<li class="product-card data-id="${t}">
        ${v?'<img class="discount-icon-products" src="../../assets/discount.svg" alt="Discount" />':""}
      <div class="img-container"><a href="${i}"><img class="product-card__img" src="${i}" alt="${r}" loading="lazy" /></a>
      </div>
      <div class="info">      
        <h2 class="info__title">${r}</h2>
        <div class="info-wrapper">
        <p class="info-wrapper__product">Category:<span>${o}</span></p>
        <p class="info-wrapper__product">Size:<span>${d}</span></p>
        <p class="info-wrapper__product">Popularity:<span>${c}</span></p>
        </div>
        <div class="info-wrapper__price-container" >
          <p class="info__price">$${s}</p>       
          <svg class="cart-img-products" width="34" height="34">
            <use href="${L}#icon-heroicons-solid_shopping-cart"></use>
          </svg>
        </div>     
      </div>
    </li>`).join("")}function m(e){return e.map(({_id:t,name:r,img:i,category:o,popularity:s,size:c,is10PercentOff:d})=>`      
      <li class="popular-item" data-id="${t}">
      ${d?'<img class="discount-icon-popular" src="./img/discount.svg" alt="Discount" />  <img class="popular-cart-img-down" src="./img/cartLight.svg" alt="cart" />':'<img class="popular-cart-img" src="./img/cartLight.svg" alt="cart" />'}
       
      <div class="popular-img-container"><img class="popular-item__img" src="${i}" alt="${r}" loading="lazy" />
      </div>
      <div class="popular-info">
        <h3 class="popular-info__title">${r}</h3>
        <div class="info-wrapper">
        <p class="info-wrapper__product">Category:<span>${o}</span></p>
        <p class="info-wrapper__product">Size:<span>${c}</span></p>
        <p class="info-wrapper__product">Popularity:<span>${s}</span></p>
        </div>             
      </div>
    </li>`).slice(0,5).join("")}function h(e){return e.map(({_id:t,name:r,img:i,price:o})=>`      
      <li class="discount-item" data-id="${t}">
       <img class="discount-cheap" src="./img/discount.svg" alt="cart" />  
      <div class="discount-img-container"><a href="${i}"><img class="discount-item__img" src="${i}" alt="${r}" loading="lazy" /></a>
      </div>
      <div class="discount-info">
        <h3 class="discount-info__title">${r}</h3>
        <div class="discount-img-wrapper">
        <p class="discount-info__price">$${o}</p>
         <img class="cart-img-products" src="./img/cart.svg" alt="cart" />      
        </div>        
      </div>
    </li>`).slice(0,2).join("")}class b{constructor(){}saveInStorage(t,r){localStorage.setItem(t,JSON.stringify(r))}saveAllToLocalStorage(t){localStorage.setItem("products",JSON.stringify(t))}saveCategories(){if(!localStorage.getItem("categories"))return n.getCategories().then(t=>{console.log(t),localStorage.setItem("categories",JSON.stringify(t))})}defaultApiOptions(){localStorage.setItem("options","{keyword:null, category: null, page: 1, limit: 6}")}getApiOptions(){return JSON.parse(localStorage.getItem("options"))}setApiOptions(t,r){const i=JSON.parse(localStorage.getItem("options"));i.key=r}addToCart(t){const i=JSON.parse(localStorage.getItem("products")).find(o=>o._id===t);if(console.log(i),localStorage.getItem("cart")){const o=JSON.parse(localStorage.getItem("cart"));return localStorage.setItem("cart",JSON.stringify(o))}else return localStorage.setItem("cart",JSON.stringify(i))}getFromStorage(t){return JSON.parse(localStorage.getItem(`${t}`))}removeFromCart(t){localStorage.getItem("products"),JSON.parce(localStorage.getItem("cart"))}clearCart(){}saveOptionsToFoodService(t){n.perPage=t.limit,n.currentPage=t.page,n.category=t.category,n.searchQuerry=t.keyword}}const f=document.querySelector(".submit-form"),u=document.querySelector(".categories"),l=document.querySelector(".filter-box__list");document.addEventListener("DOMContentLoaded",function(){f.elements.search.value="",u.value=""});f.addEventListener("submit",e=>{e.preventDefault();const t=e.target.elements.search.value;n.searchQuerry=t,n.getFoodList().then(r=>{l.innerHTML=p(r.results)}).catch(r=>{throw console.error("Error fetching food list:",r.message),r})});u.addEventListener("change",function(){const e=u.value;u.value==="show-all"?(l.innerHTML="",n.getFoodList().then(t=>{l.innerHTML=p(t.results)})):(n.category=e,l.innerHTML="",n.getFoodList().then(t=>{l.innerHTML=p(t.results)}).catch(t=>{l.innerHTML=""}).finally(()=>{}))});n.getCategories().then(e=>{const t=document.createElement("option");t.value="",t.textContent="Categories",t.disabled=!0,t.selected=!0;const r=e.map(o=>{const s=document.createElement("option");return s.value=o,s.textContent=o,s}),i=M();r.push(i),u.appendChild(t),u.append(...r)});function M(){const e=document.createElement("option");return e.textContent="Show All",e.value="show-all",e}
//# sourceMappingURL=commonHelpers2.js.map
