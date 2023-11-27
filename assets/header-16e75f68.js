import{a as u}from"./vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function e(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=e(o);fetch(o.href,c)}})();class y{constructor(){}getOptions(){return JSON.parse(localStorage.getItem("options"))}setOptions(t){localStorage.setItem("options",JSON.stringify(t))}createAndSave(t,e){localStorage.setItem(t,JSON.stringify(e))}getFromStorage(t){return JSON.parse(localStorage.getItem(`${t}`))}saveCardsToLocalStorage(t){localStorage.setItem("products",JSON.stringify(t))}saveCategories(){if(!localStorage.getItem("categories"))return n.getCategories().then(t=>{console.log(t),localStorage.setItem("categories",JSON.stringify(t))})}defaultApiOptions(){const t={keyword:null,category:null,page:1,limit:6};localStorage.setItem("options",JSON.stringify(t))}setApiOptions(t,e){const s=JSON.parse(localStorage.getItem("options"));s[t]=e,localStorage.setItem("options",JSON.stringify(s))}addToCart(t){const s=JSON.parse(localStorage.getItem("products")).find(o=>o._id===t);if(localStorage.getItem("cart")){const o=JSON.parse(localStorage.getItem("cart"));return o.push(s),localStorage.setItem("cart",JSON.stringify(o))}else return localStorage.setItem("cart",JSON.stringify([s]))}addProductToCart(t){if(localStorage.getItem("cart"))localStorage.getItem("cart");else{const e=[t];localStorage.setItem("cart",JSON.stringify(e))}{const e=JSON.parse(localStorage.getItem("cart"));if(e.find(s=>t._id===s._id)){console.log(t._id);return}else e.push(t),localStorage.setItem("cart",JSON.stringify(e))}}removeFromCart(t){const e=JSON.parse(localStorage.getItem("cart")),s=e.find(c=>c._id===t),o=e.indexOf(s);return e.splice(o,1),console.log(e),localStorage.setItem("cart",JSON.stringify(e))}clearCart(){localStorage.removeItem("cart")}saveOptionsToFoodService(t){n.perPage=t.limit,n.currentPage=t.page,n.category=t.category,n.searchQuerry=t.keyword}}class v{constructor(){this.URL="https://food-boutique.b.goit.study/api"}getFoodListWithOptions2(t){window.innerWidth>=768&&window.innerWidth<1440?(t.limit=8,p.setOptions(t)):window.innerWidth>=1440&&(t.limit=9,p.setOptions(t));const e={page:t.page,limit:t.limit,keyword:t.keyword!==null?t.keyword:void 0,category:t.category!==null?t.category:void 0};return Object.keys(e).forEach(s=>e[s]===void 0&&delete e[s]),u.get(`${this.URL}/products`,{params:e}).then(s=>s.data)}findProductById(t){return u.get(`${this.URL}/products/${t}`).then(e=>e.data)}getPopular(){return u.get(`${this.URL}/products/popular`).then(t=>t.data)}getDiscount(){return u.get(`${this.URL}/products/discount`).then(t=>t.data)}getCategories(){return u.get(`${this.URL}/products/categories`).then(t=>t.data)}subscribe(t){u.post(`${this.URL}/subscription`,{email:t})}order(t,e){u.post(`${this.URL}/orders`,{email:t,products:e})}}const _="/project-code_busters09/assets/cart-a9135e8e.svg",S="/project-code_busters09/assets/cartLight-0b4d3d6f.svg",f="/project-code_busters09/assets/discount-b955391f.svg",I="/project-code_busters09/assets/checked-295f5189.svg";function w(){document.addEventListener("click",function(r){if(r.target.classList.contains("cart-img-products")||r.target.classList.contains("main-cart-icon")||r.target.classList.contains("popular-cart-img")){const t=r.target;t.src=I}})}const $=document.querySelector(".filter-box__list"),N=document.querySelector(".popular-products__list"),T=document.querySelector(".discount-products__list"),C=document.querySelector(".popular-products__list-responsive"),J=document.querySelector(".discount-products__list-responsive"),p=new y,n=new v;document.addEventListener("click",function(r){r.target.tagName==="IMG"&&r.preventDefault()});p.defaultApiOptions();E();M();P();w();function F(){const r=JSON.parse(localStorage.getItem("options"));n.getFoodListWithOptions2(r).then(t=>{console.log(t),$.innerHTML=O(t.results),p.saveCardsToLocalStorage(t.results)}).catch(t=>{})}function E(){const r=JSON.parse(localStorage.getItem("options"));n.getFoodListWithOptions2(r).then(t=>{$.innerHTML=O(t.results),p.saveCardsToLocalStorage(t.results)}).catch(t=>{})}function M(){n.getPopular().then(r=>{N.innerHTML=L(r),C.innerHTML=L(r)}).catch(r=>{})}function P(){n.getDiscount().then(r=>{T.innerHTML=h(r),J.innerHTML=h(r)}).catch(r=>{})}function O(r){return r.map(({_id:t,name:e,img:s,category:o,price:c,popularity:i,size:g,is10PercentOff:d})=>{const a=document.createElement("img");a.src=_,a.classList.add("main-cart-icon");const l=document.createElement("img");l.src=f,l.classList.add("discount-icon-products");const m=d?`${l.outerHTML}`:"";return`<li class="product-card" data-id=${t}>
        ${m}
          <div class="img-container"><a href="${s}"><img class="product-card__img" src="${s}" alt="${e}" loading="lazy" /></a>
          </div>
          <div class="info">      
            <h2 class="info__title">${e}</h2>
            <div class="info-wrapper">
              <p class="info-wrapper__product">Category:<span>${o}</span></p>
              <p class="info-wrapper__product">Size:<span>${g}</span></p>
              <p class="info-wrapper__product">Popularity:<span>${i}</span></p>
            </div>
            <div class="info-wrapper__price-container" >
              <p class="info__price">$${c}</p> 
               ${a.outerHTML}
            </div>     
          </div>
        </li>`}).join("")}function L(r){return r.map(({_id:t,name:e,img:s,category:o,popularity:c,size:i,is10PercentOff:g})=>{const d=document.createElement("img");d.src=S,d.classList.add("popular-cart-img");const a=document.createElement("img");a.src=S,a.classList.add("popular-cart-img-down");const l=document.createElement("img");l.src=f,l.classList.add("discount-icon-popular");const m=g?`${l.outerHTML}${a.outerHTML}`:`${d.outerHTML}`;return`      
        <li class="popular-item" data-id="${t}">
          ${m}
          <div class="popular-img-container"><img class="popular-item__img" src="${s}" alt="${e}" loading="lazy" /></div>
          <div class="popular-info">
            <h3 class="popular-info__title">${e}</h3>
            <div class="info-wrapper">
              <p class="info-wrapper__product">Category:<span>${o}</span></p>
              <p class="info-wrapper__product">Size:<span>${i}</span></p>
              <p class="info-wrapper__product">Popularity:<span>${c}</span></p>
            </div>             
          </div>
        </li>`}).slice(0,5).join("")}function h(r){return r.map(({_id:t,name:e,img:s,price:o})=>{const c=document.createElement("img");c.src=_,c.classList.add("cart-img-products");const i=document.createElement("img");return i.src=f,i.classList.add("discount-cheap"),`      
      <li class="discount-item" data-id="${t}">
   
       ${i.outerHTML} 
      <div class="discount-img-container"><a href="${s}"><img class="discount-item__img" src="${s}" alt="${e}" loading="lazy" /></a>
      </div>
      <div class="discount-info">
        <h3 class="discount-info__title">${e}</h3>
        <div class="discount-img-wrapper">
        <p class="discount-info__price">$${o}</p>
        ${c.outerHTML} 
        </div>        
      </div>
    </li>`}).slice(0,2).join("")}const H=new y,k=document.querySelector(".cart-title");function R(){return(H.getFromStorage("cart")??[]).length}function U(){let r=R();k.innerHTML=`cart (${r})`}U();export{E as c,n as f,F as m,p as s,U as u};
//# sourceMappingURL=header-16e75f68.js.map
