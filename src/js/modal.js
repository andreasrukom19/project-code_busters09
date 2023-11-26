import './food-api-service';
import { foodService } from './mainSection';

const modal = document.querySelector('.modal');
const listItems = document.querySelector('.main-products');
listItems.addEventListener('click', onCardClick);

async function onCardClick(e) {
  const card = e.target.closest('li');
  if (card) {
    const data = await foodService.findProductById(card.dataset.id);
    console.log(data);
    modal.innerHTML = makeModalMarkup(data);
  }
  modal.style.display = 'block';
}

function makeModalMarkup(product) {
  return `
  <div class="backdrop"></div>
  <div class='modal-content'>
  <button class='modal-btn-close'>
    <svg class='close-sharp' width='16' height='16'>
      <use href='./img/icons.svg#icon-ion_close-sharp'></use>
    </svg></button>
  <div class='modal-img-container'>
    <img src="${product.img}" alt="${product.name}" class="modal-image" /></div>
  <div class='modal-info'>
    <h2 class='modal-title'>${product.name}</h2>
    <div class='modal-info-wrapper'>
              <p class='modal-product'>Category: <span>${product.category}</span></p>
              <p class='modal-product'>Size: <span>${product.size}</span></p>
              <p class='modal-product'>Popularity: <span>${product.popularity}</span></p>
    </div>
    <p class='modal-info-desc'>${product.desc}</p>
  </div>
    <p class='modal-price'>$${product.price}</p>
    <button class="add-to-cart-btn">Add to
    <svg class='modal-cart' width='18' height='18'>
    <use href='./img/icons.svg#icon-heroicons-solid_shopping-cart'></use>
    </svg>
    </button>
  </div>`;
}
