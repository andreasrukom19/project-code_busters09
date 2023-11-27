import{s as n,c as s,f as r,u as v,i as p}from"./assets/icons-67fe66e5.js";import"./assets/vendor-a61d8330.js";window.addEventListener("resize",w);function w(){const t=n.getOptions(),e=window.innerWidth;e>=768&&e<1440&&t.limit!==8?(t.limit=8,n.setOptions(t),s()):e>=1440&&t.limit!==9?(t.limit=9,n.setOptions(t),s()):e<768&&t.limit!==6&&(t.limit=6,n.setOptions(t),s())}const b=document.querySelector(".submit-form"),i=document.querySelector(".categories"),f=document.querySelector(".filter-box__list");document.addEventListener("DOMContentLoaded",function(){i.value=""});b.addEventListener("submit",t=>{t.preventDefault();const e=t.target.elements.search.value,o=n.getFromStorage("options");o.keyword=e||null,localStorage.setItem("options",JSON.stringify(o)),e?s():(r.resetSearchQuerry(),s())});i.addEventListener("change",function(){const t=i.value,e=n.getFromStorage("options");e.category=t||null,localStorage.setItem("options",JSON.stringify(e)),i.value==="show-all"?(f.innerHTML="",n.defaultApiOptions(),s()):(r.category=t,f.innerHTML="",s())});r.getCategories().then(t=>{const e=document.createElement("option");e.value="",e.textContent="Categories",e.disabled=!0,e.selected=!0;const o=t.map(d=>{const l=document.createElement("option");return l.value=d,l.textContent=d,l}),a=S();o.push(a),i.appendChild(e),i.append(...o)});function S(){const t=document.createElement("option");return t.textContent="Show All",t.value="show-all",t}const E={pagesRibbonEL:document.querySelector(".pag-ribbon")};E.pagesRibbonEL.addEventListener("click",k);function k(t){const e=t.target.closest("button").id;console.log(e)}const O=document.getElementById("subscriptionForm");O.addEventListener("submit",I);function I(t){t.preventDefault();const e=document.getElementById("emailInput");if(e.checkValidity()){const o=e.value;console.log(o),r.subscribe(o)}}const C=document.querySelector(".modal"),$=document.querySelector(".modal-content"),q=document.querySelector(".main-products");let c;q.addEventListener("click",B);async function B(t){if(t.target.classList.contains("main-cart-icon")||t.target.classList.contains("cart-img-products")||t.target.classList.contains("popular-cart-img"))return;const e=t.target.closest("li");if(!e)return;c=await r.findProductById(e.dataset.id);const o=n.getCart();$.innerHTML=F(c);const a=document.querySelector(".add-to-cart-btn");a.removeEventListener("click",g),a.addEventListener("click",g),o.some(l=>l._id===c._id)&&(a.firstChild.textContent="Remove from"),T()}function g(){const t=n.getCart();console.log(t),t.some(o=>o._id===c._id)?x():M()}function h(){const t=document.querySelector(".add-to-cart-btn");t.firstChild.textContent==="Add to"?t.firstChild.textContent="Remove from":t.firstChild.textContent="Add to"}function M(){n.addProductToCart(c),v(),h()}function x(){n.removeFromCart(c._id),v(),h()}function F(t){return`
  <button class="modal-btn-close">
  <svg class="close-sharp" width="16" height="16">
    <use href="${p}#icon-ion_close-sharp"></use>
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
<button class="add-to-cart-btn">Add to<svg class="modal-cart" width="18" height="18">
    <use href="${p}#icon-heroicons-solid_shopping-cart"></use>
  </svg>
</button>
`}function L(t){t.key==="Escape"&&m()}function y(t){(t.target.classList.contains("modal")||t.target.closest(".modal-btn-close"))&&m()}function T(){C.style.display="block",document.body.classList.add("no-scroll"),document.addEventListener("keydown",L),window.addEventListener("click",y)}function m(){C.style.display="none",document.removeEventListener("keydown",L),window.removeEventListener("click",y),document.body.classList.remove("no-scroll")}const u=document.querySelector(".isShownBtn");window.onscroll=()=>{window.scrollY>700?u.classList.remove("isHidden"):window.scrollY<700&&u.classList.add("isHidden")};u.onclick=()=>{window.scrollTo(0,0)};
//# sourceMappingURL=commonHelpers2.js.map
