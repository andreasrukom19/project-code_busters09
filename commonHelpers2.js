import{s as n,c as i,f as a,m as p,u as y,i as u}from"./assets/icons-76543e5e.js";import"./assets/vendor-a61d8330.js";window.addEventListener("resize",b);function b(){const t=n.getOptions(),e=window.innerWidth;console.log(t.limit),console.log(e),e>=768&&e<1440&&t.limit!==8?(t.limit=8,n.setOptions(t),i()):e>=1440&&t.limit!==9?(t.limit=9,n.setOptions(t),i()):e<768&&t.limit!==6&&(t.limit=6,n.setOptions(t),i())}const L=document.querySelector(".submit-form"),s=document.querySelector(".categories"),m=document.querySelector(".filter-box__list");document.addEventListener("DOMContentLoaded",function(){s.value=""});L.addEventListener("submit",t=>{t.preventDefault();const e=t.target.elements.search.value,o=n.getFromStorage("options");o.keyword=e||null,localStorage.setItem("options",JSON.stringify(o)),e?i():(a.resetSearchQuerry(),p())});s.addEventListener("change",function(){const t=s.value,e=n.getFromStorage("options");e.category=t||null,localStorage.setItem("options",JSON.stringify(e)),s.value==="show-all"?(m.innerHTML="",n.defaultApiOptions(),p()):(a.category=t,m.innerHTML="",i())});a.getCategories().then(t=>{const e=document.createElement("option");e.value="",e.textContent="Categories",e.disabled=!0,e.selected=!0;const o=t.map(d=>{const l=document.createElement("option");return l.value=d,l.textContent=d,l}),h=C();o.push(h),s.appendChild(e),s.append(...o)});function C(){const t=document.createElement("option");return t.textContent="Show All",t.value="show-all",t}const w={pagesRibbonEL:document.querySelector(".pag-ribbon")};w.pagesRibbonEL.addEventListener("click",S);function S(t){const e=t.target.closest("button").id;console.log(e)}const E=document.getElementById("subscriptionForm");E.addEventListener("submit",k);function k(t){t.preventDefault();const e=document.getElementById("emailInput");if(e.checkValidity()){const o=e.value;console.log(o),a.subscribe(o)}}const g=document.querySelector(".modal"),O=document.querySelector(".modal-content"),$=document.querySelector(".main-products");let c;$.addEventListener("click",I);async function I(t){if(t.target.classList.contains("main-cart-icon")||t.target.classList.contains("cart-img-products")||t.target.classList.contains("popular-cart-img"))return;const e=t.target.closest("li");if(!e)return;c=await a.findProductById(e.dataset.id),O.innerHTML=q(c),A(),document.querySelector(".add-to-cart-btn").addEventListener("click",M)}function M(){this.firstChild.textContent="Added to",console.log(c),n.addProductToCart(c),y()}function q(t){return`
  <button class="modal-btn-close">
  <svg class="close-sharp" width="16" height="16">
    <use href="${u}#icon-ion_close-sharp"></use>
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
    <use href="${u}#icon-heroicons-solid_shopping-cart"></use>
  </svg>
</button>
`}function f(t){t.key==="Escape"&&r()}function v(t){(t.target.classList.contains("modal")||t.target.closest(".modal-btn-close"))&&r()}function A(){g.style.display="block",document.body.classList.add("no-scroll"),document.addEventListener("keydown",f),window.addEventListener("click",v)}function r(){g.style.display="none",document.removeEventListener("keydown",f),window.removeEventListener("click",v),document.body.classList.remove("no-scroll")}
//# sourceMappingURL=commonHelpers2.js.map
