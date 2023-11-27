import{s as n,c as r,f as d,m as v,u as C,i as p}from"./assets/icons-93ac261d.js";import"./assets/vendor-a61d8330.js";window.addEventListener("resize",b);function b(){const t=n.getOptions(),e=window.innerWidth;console.log(t.limit),console.log(e),e>=768&&e<1440&&t.limit!==8?(t.limit=8,n.setOptions(t),r()):e>=1440&&t.limit!==9?(t.limit=9,n.setOptions(t),r()):e<768&&t.limit!==6&&(t.limit=6,n.setOptions(t),r())}const S=document.querySelector(".submit-form"),s=document.querySelector(".categories"),f=document.querySelector(".filter-box__list");document.addEventListener("DOMContentLoaded",function(){s.value=""});S.addEventListener("submit",t=>{t.preventDefault();const e=t.target.elements.search.value,o=n.getFromStorage("options");o.keyword=e||null,localStorage.setItem("options",JSON.stringify(o)),e?r():(d.resetSearchQuerry(),v())});s.addEventListener("change",function(){const t=s.value,e=n.getFromStorage("options");e.category=t||null,localStorage.setItem("options",JSON.stringify(e)),s.value==="show-all"?(f.innerHTML="",n.defaultApiOptions(),v()):(d.category=t,f.innerHTML="",r())});d.getCategories().then(t=>{const e=document.createElement("option");e.value="",e.textContent="Categories",e.disabled=!0,e.selected=!0;const o=t.map(a=>{const l=document.createElement("option");return l.value=a,l.textContent=a,l}),c=E();o.push(c),s.appendChild(e),s.append(...o)});function E(){const t=document.createElement("option");return t.textContent="Show All",t.value="show-all",t}const k={pagesRibbonEL:document.querySelector(".pag-ribbon")};k.pagesRibbonEL.addEventListener("click",O);function O(t){const e=t.target.closest("button").id;console.log(e)}const I=document.getElementById("subscriptionForm");I.addEventListener("submit",$);function $(t){t.preventDefault();const e=document.getElementById("emailInput");if(e.checkValidity()){const o=e.value;console.log(o),d.subscribe(o)}}const h=document.querySelector(".modal"),q=document.querySelector(".modal-content"),B=document.querySelector(".main-products");let i;B.addEventListener("click",M);async function M(t){if(t.target.classList.contains("main-cart-icon")||t.target.classList.contains("cart-img-products")||t.target.classList.contains("popular-cart-img"))return;const e=t.target.closest("li");if(!e)return;i=await d.findProductById(e.dataset.id);const o=n.getCart();q.innerHTML=T(i);const c=document.querySelector(".add-to-cart-btn");c.removeEventListener("click",g),c.addEventListener("click",g);const a=o.some(l=>l._id===i._id);console.log(a),a&&(c.firstChild.textContent="Remove from"),_()}function g(){const t=n.getCart();console.log(t),t.some(o=>o._id===i._id)?F():x()}function y(){const t=document.querySelector(".add-to-cart-btn");t.firstChild.textContent==="Add to"?t.firstChild.textContent="Remove from":t.firstChild.textContent="Add to"}function x(){n.addProductToCart(i),C(),y()}function F(){n.removeFromCart(i._id),C(),y()}function T(t){return`
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
`}function L(t){t.key==="Escape"&&m()}function w(t){(t.target.classList.contains("modal")||t.target.closest(".modal-btn-close"))&&m()}function _(){h.style.display="block",document.body.classList.add("no-scroll"),document.addEventListener("keydown",L),window.addEventListener("click",w)}function m(){h.style.display="none",document.removeEventListener("keydown",L),window.removeEventListener("click",w),document.body.classList.remove("no-scroll")}const u=document.querySelector(".isShownBtn");window.onscroll=()=>{window.scrollY>700?u.classList.remove("isHidden"):window.scrollY<700&&u.classList.add("isHidden")};u.onclick=()=>{window.scrollTo(0,0)};
//# sourceMappingURL=commonHelpers2.js.map
