import{f as o,c as a,s as l,m as p,L as b}from"./assets/mainSection-846c0ad1.js";import"./assets/vendor-a61d8330.js";window.addEventListener("resize",L);function L(){const e=window.innerWidth;e>=768&&e<1440&&o.perPage!==8?(o.perPage=8,a()):e>=1440&&o.perPage!==9?(o.perPage=9,a()):e<768&&o.perPage!==6&&(o.perPage=6,a())}const g=document.querySelector(".submit-form"),s=document.querySelector(".categories"),u=document.querySelector(".filter-box__list");document.addEventListener("DOMContentLoaded",function(){g.elements.search.value="",s.value=""});g.addEventListener("submit",e=>{e.preventDefault();const t=e.target.elements.search.value;o.searchQuerry=t;const n=l.getApiOptions();n.keyword=t||null,localStorage.setItem("options",JSON.stringify(n)),t?a():(o.resetSearchQuerry(),p())});s.addEventListener("change",function(){const e=s.value,t=l.getApiOptions();t.category=e||null,localStorage.setItem("options",JSON.stringify(t)),s.value==="show-all"?(u.innerHTML="",p()):(o.category=e,u.innerHTML="",a())});o.getCategories().then(e=>{const t=document.createElement("option");t.value="",t.textContent="Categories",t.disabled=!0,t.selected=!0;const n=e.map(d=>{const i=document.createElement("option");return i.value=d,i.textContent=d,i}),y=C();n.push(y),s.appendChild(t),s.append(...n)});function C(){const e=document.createElement("option");return e.textContent="Show All",e.value="show-all",e}const w={pagesRibbonEL:document.querySelector(".pag-ribbon")};w.pagesRibbonEL.addEventListener("click",S);function S(e){const t=e.target.closest("button").id;console.log(t)}const E=document.getElementById("subscriptionForm");E.addEventListener("submit",k);function k(e){e.preventDefault();const t=document.getElementById("emailInput");if(t.checkValidity()){const n=t.value;console.log(n),o.subscribe(n)}}const m="/project-code_busters09/assets/icons-ba4cd1e5.svg",f=document.querySelector(".modal"),$=document.querySelector(".modal-content"),O=document.querySelector(".main-products");let c;O.addEventListener("click",M);async function M(e){if(e.target.classList.contains("main-cart-icon")||e.target.classList.contains("cart-img-products")||e.target.classList.contains("popular-cart-img"))return;const t=e.target.closest("li");if(!t)return;c=await o.findProductById(t.dataset.id),$.innerHTML=q(c),A(),document.querySelector(".add-to-cart-btn").addEventListener("click",I)}function I(){this.firstChild.textContent="Added to",console.log(c),l.addProductToCart(c)}function q(e){return`
  <button class="modal-btn-close">
  <svg class="close-sharp" width="16" height="16">
    <use href="${m}#icon-ion_close-sharp"></use>
  </svg>
</button>
<div class="modal-img-container">
  <img src="${e.img}" alt="${e.name}" class="modal-image" />
</div>
<div class="modal-info">
  <h2 class="modal-title">${e.name}</h2>
  <div class="modal-info-wrapper">
    <p class="modal-product">Category: <span>${e.category}</span></p>
    <p class="modal-product">Size: <span>${e.size}</span></p>
    <p class="modal-product">Popularity: <span>${e.popularity}</span></p>
  </div>
  <p class="modal-info-desc">${e.desc}</p>
</div>
<p class="modal-price">$${e.price}</p>
<button class="add-to-cart-btn">
  Add to
  <svg class="modal-cart" width="18" height="18">
    <use href="${m}#icon-heroicons-solid_shopping-cart"></use>
  </svg>
</button>
`}function v(e){e.key==="Escape"&&r()}function h(e){(e.target.classList.contains("modal")||e.target.closest(".modal-btn-close"))&&r()}function A(){f.style.display="block",document.body.classList.add("no-scroll"),document.addEventListener("keydown",v),window.addEventListener("click",h)}function r(){f.style.display="none",document.removeEventListener("keydown",v),window.removeEventListener("click",h),document.body.classList.remove("no-scroll")}const P=new b,B=document.querySelector(".cart-title");function T(){return(P.getFromStorage("cart")??[]).length}let D=T();B.innerHTML=`cart (${D})`;
//# sourceMappingURL=commonHelpers2.js.map
