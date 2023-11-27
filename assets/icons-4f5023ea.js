import{a as d}from"./vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const n of c.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerpolicy&&(c.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?c.credentials="include":o.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=s(o);fetch(o.href,c)}})();class I{constructor(){}getOptions(){return JSON.parse(localStorage.getItem("options"))}setOptions(t){localStorage.setItem("options",JSON.stringify(t))}createAndSave(t,s){localStorage.setItem(t,JSON.stringify(s))}getFromStorage(t){return JSON.parse(localStorage.getItem(`${t}`))}saveCardsToLocalStorage(t){localStorage.setItem("products",JSON.stringify(t))}saveCategories(){if(!localStorage.getItem("categories"))return i.getCategories().then(t=>{console.log(t),localStorage.setItem("categories",JSON.stringify(t))})}defaultApiOptions(){const t={keyword:null,category:null,page:1,limit:6};localStorage.setItem("options",JSON.stringify(t))}setApiOptions(t,s){const r=JSON.parse(localStorage.getItem("options"));r[t]=s,localStorage.setItem("options",JSON.stringify(r))}addToCart(t){const r=JSON.parse(localStorage.getItem("products")).find(o=>o._id===t);this.addProductToCart(r)}addProductToCart(t){if(localStorage.getItem("cart"))localStorage.getItem("cart");else{const s=[t];localStorage.setItem("cart",JSON.stringify(s))}{const s=JSON.parse(localStorage.getItem("cart"));if(s.find(r=>t._id===r._id)){console.log(t._id);return}else s.push(t),localStorage.setItem("cart",JSON.stringify(s))}}removeFromCart(t){const s=JSON.parse(localStorage.getItem("cart")),r=s.find(c=>c._id===t),o=s.indexOf(r);return s.splice(o,1),console.log(s),localStorage.setItem("cart",JSON.stringify(s))}clearCart(){localStorage.removeItem("cart")}saveOptionsToFoodService(t){i.perPage=t.limit,i.currentPage=t.page,i.category=t.category,i.searchQuerry=t.keyword}}class E{constructor(){this.URL="https://food-boutique.b.goit.study/api"}getFoodListWithOptions2(t){window.innerWidth>=768&&window.innerWidth<1440?(t.limit=8,p.setOptions(t)):window.innerWidth>=1440&&(t.limit=9,p.setOptions(t));const s={page:t.page,limit:t.limit,keyword:t.keyword!==null?t.keyword:void 0,category:t.category!==null?t.category:void 0};return Object.keys(s).forEach(r=>s[r]===void 0&&delete s[r]),d.get(`${this.URL}/products`,{params:s}).then(r=>r.data)}findProductById(t){return d.get(`${this.URL}/products/${t}`).then(s=>s.data)}getPopular(){return d.get(`${this.URL}/products/popular`).then(t=>t.data)}getDiscount(){return d.get(`${this.URL}/products/discount`).then(t=>t.data)}getCategories(){return d.get(`${this.URL}/products/categories`).then(t=>t.data)}subscribe(t){d.post(`${this.URL}/subscription`,{email:t})}order(t,s){d.post(`${this.URL}/orders`,{email:t,products:s})}}const M=new I,N=document.querySelector(".cart-title");function P(){return(M.getFromStorage("cart")??[]).length}function O(){let e=P();N.innerHTML=`cart (${e})`}O();const w="/project-code_busters09/assets/cart-a9135e8e.svg",_="/project-code_busters09/assets/cartLight-0b4d3d6f.svg",y="/project-code_busters09/assets/discount-b955391f.svg",J="/project-code_busters09/assets/checked-295f5189.svg";function H(){document.addEventListener("click",function(e){if(e.target.classList.contains("cart-img-products")||e.target.classList.contains("main-cart-icon")||e.target.classList.contains("popular-cart-img")){const t=e.target;t.src=J}})}function g(e){e.classList.add("visually-hidden")}function m(e){e.classList.remove("visually-hidden")}const f=document.querySelector(".no-products-message"),L=document.querySelector(".pagination"),C=document.querySelector(".filter-box__list"),k=document.querySelector(".popular-products__list"),R=document.querySelector(".discount-products__list"),U=document.querySelector(".popular-products__list-responsive"),q=document.querySelector(".discount-products__list-responsive"),p=new I,i=new E;document.addEventListener("click",function(e){e.target.tagName==="IMG"&&e.preventDefault()});p.defaultApiOptions();F();b();x();H();document.addEventListener("click",D);function D(e){if(e.target&&(e.target.classList.contains("cart-img-products")||e.target.classList.contains("main-cart-icon")||e.target.classList.contains("popular-cart-img"))){const t=e.target.dataset.productId;p.addToCart(t),O()}}function z(){const e=JSON.parse(localStorage.getItem("options"));i.getFoodListWithOptions2(e).then(t=>{console.log(t),t.results.length===0?(m(f),g(L)):(g(f),m(L)),C.innerHTML=T(t.results),p.saveCardsToLocalStorage(t.results)}).catch(t=>{})}function F(){const e=JSON.parse(localStorage.getItem("options"));i.getFoodListWithOptions2(e).then(t=>{t.results.length===0?(m(f),g(L)):(g(f),m(L)),C.innerHTML=T(t.results),p.saveCardsToLocalStorage(t.results)}).catch(t=>{})}function b(){i.getPopular().then(e=>{k.innerHTML=$(e),U.innerHTML=$(e)}).catch(e=>{})}function x(){i.getDiscount().then(e=>{R.innerHTML=v(e),q.innerHTML=v(e)}).catch(e=>{})}function T(e){return e.map(({_id:t,name:s,img:r,category:o,price:c,popularity:n,size:h,is10PercentOff:u})=>{const a=document.createElement("img");a.src=w,a.classList.add("main-cart-icon"),a.dataset.productId=t;const l=document.createElement("img");l.src=y,l.classList.add("discount-icon-products");const S=u?`${l.outerHTML}`:"";return`<li class="product-card" data-id=${t}>
        ${S}
          <div class="img-container"><a href="${r}"><img class="product-card__img" src="${r}" alt="${s}" loading="lazy" /></a>
          </div>
          <div class="info">      
            <h2 class="info__title">${s}</h2>
            <div class="info-wrapper">
              <p class="info-wrapper__product">Category:<span>${o}</span></p>
              <p class="info-wrapper__product">Size:<span>${h}</span></p>
              <p class="info-wrapper__product">Popularity:<span>${n}</span></p>
            </div>
            <div class="info-wrapper__price-container" >
              <p class="info__price">$${c}</p> 
               ${a.outerHTML}
            </div>     
          </div>
        </li>`}).join("")}function $(e){return e.map(({_id:t,name:s,img:r,category:o,popularity:c,size:n,is10PercentOff:h})=>{const u=document.createElement("img");u.src=_,u.classList.add("popular-cart-img"),u.dataset.productId=t;const a=document.createElement("img");a.src=_,a.classList.add("popular-cart-img-down");const l=document.createElement("img");l.src=y,l.classList.add("discount-icon-popular");const S=h?`${l.outerHTML}${a.outerHTML}`:`${u.outerHTML}`;return`      
        <li class="popular-item" data-id="${t}">
          ${S}
          <div class="popular-img-container"><img class="popular-item__img" src="${r}" alt="${s}" loading="lazy" /></div>
          <div class="popular-info">
            <h3 class="popular-info__title">${s}</h3>
            <div class="info-wrapper">
              <p class="info-wrapper__product">Category:<span>${o}</span></p>
              <p class="info-wrapper__product">Size:<span>${n}</span></p>
              <p class="info-wrapper__product">Popularity:<span>${c}</span></p>
            </div>             
          </div>
        </li>`}).slice(0,5).join("")}function v(e){return e.map(({_id:t,name:s,img:r,price:o})=>{const c=document.createElement("img");c.src=w,c.classList.add("cart-img-products"),c.dataset.productId=t;const n=document.createElement("img");return n.src=y,n.classList.add("discount-cheap"),`      
      <li class="discount-item" data-id="${t}">
   
       ${n.outerHTML} 
      <div class="discount-img-container"><a href="${r}"><img class="discount-item__img" src="${r}" alt="${s}" loading="lazy" /></a>
      </div>
      <div class="discount-info">
        <h3 class="discount-info__title">${s}</h3>
        <div class="discount-img-wrapper">
        <p class="discount-info__price">$${o}</p>
        ${c.outerHTML} 
        </div>        
      </div>
    </li>`}).slice(0,2).join("")}const A="/project-code_busters09/assets/icons-d9095b3f.svg";export{F as c,i as f,A as i,z as m,p as s,O as u};
//# sourceMappingURL=icons-4f5023ea.js.map
