import{a as g}from"./vendor-99d50140.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(r){if(r.ep)return;r.ep=!0;const c=o(r);fetch(r.href,c)}})();class J{constructor(){}getOptions(){return JSON.parse(localStorage.getItem("options"))}setOptions(t){localStorage.setItem("options",JSON.stringify(t))}getCart(){return localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]}createAndSave(t,o){localStorage.setItem(t,JSON.stringify(o))}getFromStorage(t){return JSON.parse(localStorage.getItem(`${t}`))}saveCardsToLocalStorage(t){localStorage.setItem("products",JSON.stringify(t))}saveCategories(){if(!localStorage.getItem("categories"))return S.getCategories().then(t=>{console.log(t),localStorage.setItem("categories",JSON.stringify(t))})}defaultApiOptions(){const t={keyword:null,category:null,page:1,limit:6};localStorage.getItem("options"),localStorage.setItem("options",JSON.stringify(t))}setApiOptions(t,o){const s=JSON.parse(localStorage.getItem("options"));s[t]=o,localStorage.setItem("options",JSON.stringify(s))}addToCart(t){const s=JSON.parse(localStorage.getItem("products")).find(r=>r._id===t);this.addProductToCart(s)}addProductToCart(t){if(!localStorage.getItem("cart")||localStorage.getItem("cart").length===0){const o=[t];localStorage.setItem("cart",JSON.stringify(o))}else{const o=JSON.parse(localStorage.getItem("cart"));if(o.find(s=>t._id===s._id))return;o.push(t),localStorage.setItem("cart",JSON.stringify(o))}}removeFromCart(t){const o=JSON.parse(localStorage.getItem("cart")),s=o.find(c=>c._id===t),r=o.indexOf(s);return o.splice(r,1),console.log(o),localStorage.setItem("cart",JSON.stringify(o))}clearCart(){localStorage.removeItem("cart")}}class H{constructor(){this.URL="https://food-boutique.b.goit.study/api"}getFoodListWithOptions2(t){window.innerWidth>=768&&window.innerWidth<1440?(t.limit=8,i.setOptions(t)):window.innerWidth>=1440&&(t.limit=9,i.setOptions(t));const o={page:t.page,limit:t.limit,keyword:t.keyword!==null?t.keyword:void 0,category:t.category!==null?t.category:void 0};return Object.keys(o).forEach(s=>o[s]===void 0&&delete o[s]),g.get(`${this.URL}/products`,{params:o}).then(s=>s.data)}findProductById(t){return g.get(`${this.URL}/products/${t}`).then(o=>o.data)}getPopular(){return g.get(`${this.URL}/products/popular`).then(t=>t.data)}getDiscount(){return g.get(`${this.URL}/products/discount`).then(t=>t.data)}getCategories(){return g.get(`${this.URL}/products/categories`).then(t=>t.data)}subscribe(t){return g.post(`${this.URL}/subscription`,{email:t})}order(t,o){return g.post(`${this.URL}/orders`,{email:t,products:o})}}const U=new J,R=document.querySelector(".cart-title");function q(){return(U.getFromStorage("cart")??[]).length}function $(){let e=q();R.innerHTML=`cart (${e})`}$();const P="/project-code_busters09/assets/cart-a9135e8e.svg",E="/project-code_busters09/assets/cartLight-0b4d3d6f.svg",w="/project-code_busters09/assets/discount-b955391f.svg",y="/project-code_busters09/assets/checked-295f5189.svg";function D(){document.addEventListener("click",function(e){if(e.target.classList.contains("cart-img-products")||e.target.classList.contains("main-cart-icon")||e.target.classList.contains("popular-cart-img")||e.target.classList.contains("popular-cart-img-down")){const t=e.target;t.src=y}})}function T(e){e.classList.add("visually-hidden")}function k(e){e.classList.remove("visually-hidden")}const L=document.querySelector(".loader-container");function b(){L&&(L.style.display="flex")}function x(){L&&(L.style.display="none")}const F=localStorage.getItem("options"),A=JSON.parse(F),N=document.querySelector(".no-products-message"),M=document.querySelector(".pagination"),z=document.querySelector(".filter-box__list"),W=document.querySelector(".popular-products__list"),B=document.querySelector(".discount-products__list"),i=new J,S=new H;document.addEventListener("click",function(e){e.target.tagName==="IMG"&&e.preventDefault()});i.defaultApiOptions();O();C();v();D();document.addEventListener("click",G);function G(e){if(e.target&&e.target.classList.contains("main-cart-icon")){const t=e.target.dataset.productId;i.addToCart(t),$(),O(),C(),v()}else if(e.target&&(e.target.classList.contains("cart-img-products")||e.target.classList.contains("popular-cart-img"))){const t=e.target.dataset.productId;S.findProductById(t).then(o=>{i.addProductToCart(o),$(),O(),C(),v()})}}function O(){const e=JSON.parse(localStorage.getItem("options"));b(),S.getFoodListWithOptions2(e).then(t=>{t.totalPages<2||A.limit<6||t.results.length===0?T(M):k(M),t.results.length===0?k(N):T(N),console.log(t),z.innerHTML=K(t.results),x(),i.saveCardsToLocalStorage(t.results),i.createAndSave("pagination",t)}).catch(t=>{console.log("error",t)})}function C(){S.getPopular().then(e=>{W.innerHTML=Q(e)}).catch(e=>{console.log("error",e)})}function v(){S.getDiscount().then(e=>{B.innerHTML=j(e)}).catch(e=>{console.log("error",e)})}function K(e){const t=i.getCart();return e.map(({_id:o,name:s,img:r,category:c,price:a,popularity:d,size:u,is10PercentOff:l})=>{const n=document.createElement("img");n.src=P,n.classList.add("main-cart-icon"),n.dataset.productId=o;let m=c.replace(/_/g," ");const f=document.createElement("img");f.src=w,f.classList.add("discount-icon-products");const p=l?f.outerHTML:"",h=document.createElement("img");h.src=y,h.classList.add("js-checked-arrow");const I=t.some(_=>_._id===o);return`<li class="product-card" data-id=${o}>
          ${p}
          <div class="img-container"><a href="${r}"><img class="product-card__img" src="${r}" alt="${s}" loading="lazy" /></a>
          </div>
          <div class="info">      
            <h2 class="info__title">${s}</h2>
            <div class="info-wrapper">
              <p class="info-wrapper__product">Category:<span>${m}</span></p>
              <p class="info-wrapper__product">Size:<span>${u}</span></p>
              <p class="info-wrapper__product">Popularity:<span>${d}</span></p>
            </div>
            <div class="info-wrapper__price-container" >
              <p class="info__price">$${a}</p> 
              ${I?h.outerHTML:n.outerHTML}
            </div>     
          </div>
        </li>`}).join("")}function Q(e){const t=i.getCart();return e.map(({_id:o,name:s,img:r,category:c,popularity:a,size:d,is10PercentOff:u})=>{const l=document.createElement("img");l.src=E,l.classList.add("popular-cart-img"),l.dataset.productId=o,l.alt="add to cart";const n=document.createElement("img");n.src=E,n.classList.add("popular-cart-img-down");const m=document.createElement("img");m.src=w,m.classList.add("discount-icon-popular");const f=u?`${m.outerHTML}${n.outerHTML}`:`${l.outerHTML}`,p=document.createElement("img");p.src=y,p.classList.add("popular-cart-img"),p.dataset.productId=o,p.alt="added to cart";const h=t.some(_=>_._id===o);let I=c.replace(/_/g," ");return`      
        <li class="popular-item" data-id="${o}">
            ${h?p.outerHTML:f}
          <div class="popular-img-container"><img class="popular-item__img" src="${r}" alt="${s}" loading="lazy" /></div>
          <div class="popular-info">
            <h3 class="popular-info__title">${s}</h3>
            <div class="info-wrapper">
              <p class="info-wrapper__product">Category:<span>${I}</span></p>
              <p class="info-wrapper__product">Size:<span>${d}</span></p>
              <p class="info-wrapper__product">Popularity:<span>${a}</span></p>
            </div>             
          </div>
        </li>`}).slice(0,5).join("")}function j(e){const t=i.getCart();return e.map(({_id:o,name:s,img:r,price:c})=>{const a=document.createElement("img");a.src=P,a.classList.add("cart-img-products"),a.dataset.productId=o,a.alt="add to cart";const d=document.createElement("img");d.src=w,d.classList.add("discount-cheap"),d.alt="discounted product";const u=document.createElement("img");u.src=y,u.classList.add("js-checked-arrow");const l=t.some(n=>n._id===o);return`      
      <li class="discount-item" data-id="${o}">
   
       ${d.outerHTML} 
      <div class="discount-img-container"><a href="${r}"><img class="discount-item__img" src="${r}" alt="${s}" loading="lazy" /></a>
      </div>
      <div class="discount-info">
        <h3 class="discount-info__title">${s}</h3>
        <div class="discount-img-wrapper">
        <p class="discount-info__price">$${c}</p>
         ${l?u.outerHTML:a.outerHTML}
        </div>        
      </div>
    </li>`}).slice(0,2).join("")}const X="/project-code_busters09/assets/icons-d9095b3f.svg";export{b as a,O as c,v as d,S as f,x as h,X as i,C as p,i as s,$ as u};
//# sourceMappingURL=icons-163607b1.js.map