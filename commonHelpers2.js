import{s as n,c as i,f as a,m as g,u as w,i as m}from"./assets/icons-4f5023ea.js";import"./assets/vendor-a61d8330.js";window.addEventListener("resize",b);function b(){const t=n.getOptions(),e=window.innerWidth;console.log(t.limit),console.log(e),e>=768&&e<1440&&t.limit!==8?(t.limit=8,n.setOptions(t),i()):e>=1440&&t.limit!==9?(t.limit=9,n.setOptions(t),i()):e<768&&t.limit!==6&&(t.limit=6,n.setOptions(t),i())}const L=document.querySelector(".submit-form"),s=document.querySelector(".categories"),p=document.querySelector(".filter-box__list");document.addEventListener("DOMContentLoaded",function(){s.value=""});L.addEventListener("submit",t=>{t.preventDefault();const e=t.target.elements.search.value,o=n.getFromStorage("options");o.keyword=e||null,localStorage.setItem("options",JSON.stringify(o)),e?i():(a.resetSearchQuerry(),g())});s.addEventListener("change",function(){const t=s.value,e=n.getFromStorage("options");e.category=t||null,localStorage.setItem("options",JSON.stringify(e)),s.value==="show-all"?(p.innerHTML="",n.defaultApiOptions(),g()):(a.category=t,p.innerHTML="",i())});a.getCategories().then(t=>{const e=document.createElement("option");e.value="",e.textContent="Categories",e.disabled=!0,e.selected=!0;const o=t.map(u=>{const l=document.createElement("option");return l.value=u,l.textContent=u,l}),y=C();o.push(y),s.appendChild(e),s.append(...o)});function C(){const t=document.createElement("option");return t.textContent="Show All",t.value="show-all",t}const S={pagesRibbonEL:document.querySelector(".pag-ribbon")};S.pagesRibbonEL.addEventListener("click",E);function E(t){const e=t.target.closest("button").id;console.log(e)}const k=document.getElementById("subscriptionForm");k.addEventListener("submit",O);function O(t){t.preventDefault();const e=document.getElementById("emailInput");if(e.checkValidity()){const o=e.value;console.log(o),a.subscribe(o)}}const f=document.querySelector(".modal"),$=document.querySelector(".modal-content"),B=document.querySelector(".main-products");let c;B.addEventListener("click",I);async function I(t){if(t.target.classList.contains("main-cart-icon")||t.target.classList.contains("cart-img-products")||t.target.classList.contains("popular-cart-img"))return;const e=t.target.closest("li");if(!e)return;c=await a.findProductById(e.dataset.id),$.innerHTML=T(c),q(),document.querySelector(".add-to-cart-btn").addEventListener("click",M)}function M(){this.firstChild.textContent="Added to",console.log(c),n.addProductToCart(c),w()}function T(t){return`
  <button class="modal-btn-close">
  <svg class="close-sharp" width="16" height="16">
    <use href="${m}#icon-ion_close-sharp"></use>
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
<button class="add-to-cart-btn">
  Add to
  <svg class="modal-cart" width="18" height="18">
    <use href="${m}#icon-heroicons-solid_shopping-cart"></use>
  </svg>
</button>
`}function v(t){t.key==="Escape"&&r()}function h(t){(t.target.classList.contains("modal")||t.target.closest(".modal-btn-close"))&&r()}function q(){f.style.display="block",document.body.classList.add("no-scroll"),document.addEventListener("keydown",v),window.addEventListener("click",h)}function r(){f.style.display="none",document.removeEventListener("keydown",v),window.removeEventListener("click",h),document.body.classList.remove("no-scroll")}const d=document.querySelector(".isShownBtn");window.onscroll=()=>{window.scrollY>700?d.classList.remove("isHidden"):window.scrollY<700&&d.classList.add("isHidden")};d.onclick=()=>{window.scrollTo(0,0)};
//# sourceMappingURL=commonHelpers2.js.map
