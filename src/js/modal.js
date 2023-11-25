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
  return `<img src="${product.img}" alt="${product.name}" class="modal-image" />
              <p>Name: ${product.name}</p>
              <p>Category: ${product.category}</p>
              <p>Size: ${product.size}</p>
              <p>Popularity: ${product.popularity}</p>
              <p>${product.desc}</p>
              <p>Price: $${product.price}</p>
              <button class="add-to-cart-btn">Add to Cart</button>
              <svg class='close-sharp' width='28' height='28'>
                <use href='#'></use>
              </svg>`;
}
