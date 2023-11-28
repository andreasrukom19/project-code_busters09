import{s as o,c as i,f as l,u as y,i as f}from"./assets/icons-b90cecb3.js";import{P as I}from"./assets/vendor-99d50140.js";window.addEventListener("resize",O);function O(){const t=o.getOptions(),e=window.innerWidth;e>=768&&e<1440&&t.limit!==8?(t.limit=8,o.setOptions(t),i()):e>=1440&&t.limit!==9?(t.limit=9,o.setOptions(t),i()):e<768&&t.limit!==6&&(t.limit=6,o.setOptions(t),i())}const g=document.querySelector(".submit-form"),c=document.querySelector(".categories"),v=document.querySelector(".filter-box__list");document.addEventListener("DOMContentLoaded",function(){g.elements.search.value=""});g.addEventListener("submit",t=>{t.preventDefault();const e=t.target.elements.search.value,n=o.getFromStorage("options");n.keyword=e||null,localStorage.setItem("options",JSON.stringify(n)),i()});c.addEventListener("change",function(){const t=c.value,e=o.getFromStorage("options");e.category=t||null,localStorage.setItem("options",JSON.stringify(e)),c.value==="show-all"?(v.innerHTML="",o.defaultApiOptions(),g.elements.search.value="",i()):(l.category=t,v.innerHTML="",i())});l.getCategories().then(t=>{const e=document.createElement("option");e.value="",e.textContent="Categories",e.disabled=!0,e.selected=!0;const n=t.map(r=>{const d=r.replace(/_/g," "),u=document.createElement("option");return u.value=r,u.textContent=d,u}),s=B();n.push(s),c.appendChild(e),c.append(...n)});function B(){const t=document.createElement("option");return t.textContent="Show All",t.value="show-all",t}const C=document.getElementById("subscriptionForm");C.addEventListener("submit",T);function T(t){t.preventDefault();const e=document.getElementById("emailInput");if(e.checkValidity()){const n=e.value;console.log(n),l.subscribe(n).then(s=>{console.log("Subscription successful:",s),A(C)}).catch(s=>{console.error("Error subscribing:",s)})}else console.log("Invalid email format")}function A(t){Array.from(t.elements).forEach(e=>{e.tagName==="INPUT"||e.tagName==="TEXTAREA"?e.value="":e.tagName==="SELECT"&&(e.selectedIndex=0)})}const w=document.querySelector(".modal"),x=document.querySelector(".modal-content"),F=document.querySelector(".main-products");let a;F.addEventListener("click",$);async function $(t){if(t.target.classList.contains("main-cart-icon")||t.target.classList.contains("cart-img-products")||t.target.classList.contains("popular-cart-img"))return;const e=t.target.closest("li");if(!e)return;a=await l.findProductById(e.dataset.id);const n=o.getCart();x.innerHTML=_(a);const s=document.querySelector(".add-to-cart-btn");s.removeEventListener("click",h),s.addEventListener("click",h),n.some(d=>d._id===a._id)&&(s.firstChild.textContent="Remove from"),q()}function h(){const t=o.getCart();console.log(t),t.some(n=>n._id===a._id)?P():M()}function b(){const t=document.querySelector(".add-to-cart-btn");t.firstChild.textContent==="Add to"?t.firstChild.textContent="Remove from":t.firstChild.textContent="Add to"}function M(){o.addProductToCart(a),y(),b()}function P(){o.removeFromCart(a._id),y(),b()}function _(t){return`
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
`}function L(t){t.key==="Escape"&&m()}function E(t){(t.target.classList.contains("modal")||t.target.closest(".modal-btn-close"))&&m()}function q(){w.style.display="block",document.body.classList.add("no-scroll"),document.addEventListener("keydown",L),window.addEventListener("click",E)}function m(){w.style.display="none",document.removeEventListener("keydown",L),window.removeEventListener("click",E),document.body.classList.remove("no-scroll")}const p=document.querySelector(".isShownBtn");window.onscroll=()=>{window.scrollY>700?p.classList.remove("isHidden"):window.scrollY<700&&p.classList.add("isHidden")};p.onclick=()=>{window.scrollTo(0,0)};const S=document.getElementById("tui-pagination-container");S.addEventListener("click",k);const{keyword:R,category:J,page:N,limit:U}=o.getFromStorage("options"),D=new I(S,{totalItems:50,itemsPerPage:6,page:N,centerAlign:!0,template:{page:'<a href="./index.html" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}});function k(){const t=D.getCurrentPage();o.setApiOptions("page",`${t}`),i()}k();
//# sourceMappingURL=commonHelpers2.js.map
