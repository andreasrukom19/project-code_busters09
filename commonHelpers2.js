import{s as o,c as i,f as l,a as I,h as O,u as C,i as f,p as B,d as T}from"./assets/icons-677ea2e6.js";import{P as A}from"./assets/vendor-99d50140.js";window.addEventListener("resize",P);function P(){const t=o.getOptions(),e=window.innerWidth;e>=768&&e<1440&&t.limit!==8?(t.limit=8,o.setOptions(t),i()):e>=1440&&t.limit!==9?(t.limit=9,o.setOptions(t),i()):e<768&&t.limit!==6&&(t.limit=6,o.setOptions(t),i())}const g=document.querySelector(".submit-form"),c=document.querySelector(".categories"),h=document.querySelector(".filter-box__list");document.addEventListener("DOMContentLoaded",function(){g.elements.search.value=""});g.addEventListener("submit",t=>{t.preventDefault();const e=t.target.elements.search.value,n=o.getFromStorage("options");n.keyword=e||null,localStorage.setItem("options",JSON.stringify(n)),i()});c.addEventListener("change",function(){const t=c.value,e=o.getFromStorage("options");e.category=t||null,localStorage.setItem("options",JSON.stringify(e)),c.value==="show-all"?(h.innerHTML="",o.defaultApiOptions(),g.elements.search.value="",i()):(l.category=t,h.innerHTML="",i())});l.getCategories().then(t=>{const e=document.createElement("option");e.value="",e.textContent="Categories",e.disabled=!0,e.selected=!0;const n=t.map(r=>{const d=r.replace(/_/g," "),u=document.createElement("option");return u.value=r,u.textContent=d,u}),s=x();n.push(s),c.appendChild(e),c.append(...n)});function x(){const t=document.createElement("option");return t.textContent="Show All",t.value="show-all",t}const w=document.getElementById("subscriptionForm");w.addEventListener("submit",F);function F(t){t.preventDefault();const e=document.getElementById("emailInput");if(e.checkValidity()){const n=e.value;console.log(n),l.subscribe(n).then(s=>{console.log("Subscription successful:",s),$(w)}).catch(s=>{console.error("Error subscribing:",s)})}else console.log("Invalid email format")}function $(t){Array.from(t.elements).forEach(e=>{e.tagName==="INPUT"||e.tagName==="TEXTAREA"?e.value="":e.tagName==="SELECT"&&(e.selectedIndex=0)})}const L=document.querySelector(".modal"),M=document.querySelector(".modal-content"),_=document.querySelector(".main-products");let a;_.addEventListener("click",q);async function q(t){if(t.target.classList.contains("main-cart-icon")||t.target.classList.contains("cart-img-products")||t.target.classList.contains("popular-cart-img")||t.target.classList.contains("js-checked-arrow"))return;const e=t.target.closest("li");if(!e)return;I(),a=await l.findProductById(e.dataset.id),console.log(a);const n=o.getCart();M.innerHTML=z(a);const s=document.querySelector(".add-to-cart-btn");s.removeEventListener("click",v),s.addEventListener("click",v),n.some(d=>d._id===a._id)&&(s.firstChild.textContent="Remove from"),O(),H()}function v(){const t=o.getCart();console.log(t),t.some(n=>n._id===a._id)?N():D()}function b(){const t=document.querySelector(".add-to-cart-btn");t.firstChild.textContent==="Add to"?t.firstChild.textContent="Remove from":t.firstChild.textContent="Add to"}function D(){o.addProductToCart(a),C(),b()}function N(){o.removeFromCart(a._id),C(),b()}function z(t){return`
  <button class="modal-btn-close">
  <svg class="close-sharp" width="16" height="16">
    <use href="${f}#icon-ion_close-sharp"></use>
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
    <use href="${f}#icon-heroicons-solid_shopping-cart"></use>
  </svg>
</button>
`}function S(t){t.key==="Escape"&&p()}function E(t){(t.target.classList.contains("modal")||t.target.closest(".modal-btn-close"))&&p()}function H(){L.style.display="block",document.body.classList.add("no-scroll"),document.addEventListener("keydown",S),window.addEventListener("click",E)}function p(){L.style.display="none",document.removeEventListener("keydown",S),window.removeEventListener("click",E),document.body.classList.remove("no-scroll"),i(),B(),T()}const m=document.querySelector(".isShownBtn");window.onscroll=()=>{window.scrollY>700?m.classList.remove("isHidden"):window.scrollY<700&&m.classList.add("isHidden")};m.onclick=()=>{window.scrollTo(0,0)};const k=document.getElementById("tui-pagination-container");k.addEventListener("click",Y);const{page:R,perPage:y,results:J,totalPages:U}=o.getFromStorage("pagination");console.log(J.length);const V=new A(k,{totalItems:U*y,itemsPerPage:y,page:R,centerAlign:!1,template:{page:'<a href="./index.html" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}});function Y(){const t=V.getCurrentPage();o.setApiOptions("page",`${t}`),i(),console.log(t)}
//# sourceMappingURL=commonHelpers2.js.map
