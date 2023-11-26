import{s as n,c as a,f as i,m as p,L}from"./assets/mainSection-939916f6.js";import"./assets/vendor-a61d8330.js";window.addEventListener("resize",C);function C(){const t=n.getOptions(),e=window.innerWidth;console.log(t.limit),console.log(e),e>=768&&e<1440&&t.limit!==8?(t.limit=8,n.setOptions(t),a()):e>=1440&&t.limit!==9?(t.limit=9,n.setOptions(t),a()):e<768&&t.limit!==6&&(t.limit=6,n.setOptions(t),a())}const g=document.querySelector(".submit-form"),s=document.querySelector(".categories"),u=document.querySelector(".filter-box__list");document.addEventListener("DOMContentLoaded",function(){g.elements.search.value="",s.value=""});g.addEventListener("submit",t=>{t.preventDefault();const e=t.target.elements.search.value;i.searchQuerry=e;const o=n.getApiOptions();o.keyword=e||null,localStorage.setItem("options",JSON.stringify(o)),e?a():(i.resetSearchQuerry(),p())});s.addEventListener("change",function(){const t=s.value,e=n.getApiOptions();e.category=t||null,localStorage.setItem("options",JSON.stringify(e)),s.value==="show-all"?(u.innerHTML="",p()):(i.category=t,u.innerHTML="",a())});i.getCategories().then(t=>{const e=document.createElement("option");e.value="",e.textContent="Categories",e.disabled=!0,e.selected=!0;const o=t.map(d=>{const l=document.createElement("option");return l.value=d,l.textContent=d,l}),b=w();o.push(b),s.appendChild(e),s.append(...o)});function w(){const t=document.createElement("option");return t.textContent="Show All",t.value="show-all",t}const S={pagesRibbonEL:document.querySelector(".pag-ribbon")};S.pagesRibbonEL.addEventListener("click",E);function E(t){const e=t.target.closest("button").id;console.log(e)}const k=document.getElementById("subscriptionForm");k.addEventListener("submit",O);function O(t){t.preventDefault();const e=document.getElementById("emailInput");if(e.checkValidity()){const o=e.value;console.log(o),i.subscribe(o)}}const m="/project-code_busters09/assets/icons-ba4cd1e5.svg",$=new L,M=document.querySelector(".cart-title");function I(){return($.getFromStorage("cart")??[]).length}function f(){let t=I();M.innerHTML=`cart (${t})`}f();const v=document.querySelector(".modal"),q=document.querySelector(".modal-content"),A=document.querySelector(".main-products");let c;A.addEventListener("click",T);async function T(t){if(t.target.classList.contains("main-cart-icon")||t.target.classList.contains("cart-img-products")||t.target.classList.contains("popular-cart-img"))return;const e=t.target.closest("li");if(!e)return;c=await i.findProductById(e.dataset.id),q.innerHTML=D(c),x(),document.querySelector(".add-to-cart-btn").addEventListener("click",B)}function B(){this.firstChild.textContent="Added to",console.log(c),n.addProductToCart(c),f()}function D(t){return`
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
`}function h(t){t.key==="Escape"&&r()}function y(t){(t.target.classList.contains("modal")||t.target.closest(".modal-btn-close"))&&r()}function x(){v.style.display="block",document.body.classList.add("no-scroll"),document.addEventListener("keydown",h),window.addEventListener("click",y)}function r(){v.style.display="none",document.removeEventListener("keydown",h),window.removeEventListener("click",y),document.body.classList.remove("no-scroll")}
//# sourceMappingURL=commonHelpers2.js.map
