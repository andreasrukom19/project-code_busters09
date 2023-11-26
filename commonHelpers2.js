import{s as n,c as i,f as a,m as p,L as b}from"./assets/mainSection-939916f6.js";import"./assets/vendor-a61d8330.js";window.addEventListener("resize",L);function L(){const t=n.getOptions(),e=window.innerWidth;console.log(t.limit),console.log(e),e>=768&&e<1440&&t.limit!==8?(t.limit=8,n.setOptions(t),i()):e>=1440&&t.limit!==9?(t.limit=9,n.setOptions(t),i()):e<768&&t.limit!==6&&(t.limit=6,n.setOptions(t),i())}const C=document.querySelector(".submit-form"),s=document.querySelector(".categories"),u=document.querySelector(".filter-box__list");document.addEventListener("DOMContentLoaded",function(){s.value=""});C.addEventListener("submit",t=>{t.preventDefault();const e=t.target.elements.search.value,o=n.getFromStorage("options");o.keyword=e||null,localStorage.setItem("options",JSON.stringify(o)),e?i():(a.resetSearchQuerry(),p())});s.addEventListener("change",function(){const t=s.value,e=n.getFromStorage("options");e.category=t||null,localStorage.setItem("options",JSON.stringify(e)),s.value==="show-all"?(u.innerHTML="",n.defaultApiOptions(),p()):(a.category=t,u.innerHTML="",i())});a.getCategories().then(t=>{const e=document.createElement("option");e.value="",e.textContent="Categories",e.disabled=!0,e.selected=!0;const o=t.map(d=>{const l=document.createElement("option");return l.value=d,l.textContent=d,l}),h=S();o.push(h),s.appendChild(e),s.append(...o)});function S(){const t=document.createElement("option");return t.textContent="Show All",t.value="show-all",t}const w={pagesRibbonEL:document.querySelector(".pag-ribbon")};w.pagesRibbonEL.addEventListener("click",E);function E(t){const e=t.target.closest("button").id;console.log(e)}const k=document.getElementById("subscriptionForm");k.addEventListener("submit",O);function O(t){t.preventDefault();const e=document.getElementById("emailInput");if(e.checkValidity()){const o=e.value;console.log(o),a.subscribe(o)}}const m="/project-code_busters09/assets/icons-ba4cd1e5.svg",$=new b,M=document.querySelector(".cart-title");function I(){return($.getFromStorage("cart")??[]).length}function g(){let t=I();M.innerHTML=`cart (${t})`}g();const f=document.querySelector(".modal"),q=document.querySelector(".modal-content"),T=document.querySelector(".main-products");let c;T.addEventListener("click",A);async function A(t){if(t.target.classList.contains("main-cart-icon")||t.target.classList.contains("cart-img-products")||t.target.classList.contains("popular-cart-img"))return;const e=t.target.closest("li");if(!e)return;c=await a.findProductById(e.dataset.id),q.innerHTML=F(c),D(),document.querySelector(".add-to-cart-btn").addEventListener("click",B)}function B(){this.firstChild.textContent="Added to",console.log(c),n.addProductToCart(c),g()}function F(t){return`
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
`}function v(t){t.key==="Escape"&&r()}function y(t){(t.target.classList.contains("modal")||t.target.closest(".modal-btn-close"))&&r()}function D(){f.style.display="block",document.body.classList.add("no-scroll"),document.addEventListener("keydown",v),window.addEventListener("click",y)}function r(){f.style.display="none",document.removeEventListener("keydown",v),window.removeEventListener("click",y),document.body.classList.remove("no-scroll")}
//# sourceMappingURL=commonHelpers2.js.map
