import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { FoodService } from './food-api-service';
const filterBoxList = document.querySelector('.filter-box__list');
const popularProductsList = document.querySelector('.popular-products__list');
const discountProductsList = document.querySelector('.discount-products__list');

const foodService = new FoodService();

foodService
  .getFoodList()
  .then(data => {
    filterBoxList.innerHTML = createProductsMarkup(data.results);
  })
  .catch(error => {
    // TODO ADD NOTIFLIX
    // Notify.failure(
    //   "Error"
    // );
  });

foodService
  .getPopular()
  .then(data => {
    popularProductsList.innerHTML = createPopularMarkup(data);
  })
  .catch(error => {
    // TODO ADD NOTIFLIX
    // Notify.failure(
    //   "Error"
    // );
  });

foodService
  .getDiscount()
  .then(data => {
    console.log('data', data);
    discountProductsList.innerHTML = createDiscountMarkup(data);
  })
  .catch(error => {
    // TODO ADD NOTIFLIX
    // Notify.failure(
    //   "Error"
    // );
  });

function createProductsMarkup(arr) {
  return arr
    .map(
      ({
        name,
        img,
        category,
        price,
        popularity,
        size,
      }) => `<li class="product-card">
      <div class="img-container"><a href="${img}"><img class="product-card__img" src="${img}" alt="${name}" loading="lazy" /></a>
      </div>
      <div class="info">
        <h2 class="info__title">${name}</h2>
        <div class="info-wrapper">
        <p class="info-wrapper__product">Category:<span>${category}</span></p>
        <p class="info-wrapper__product">Size:<span>${size}</span></p>
        <p class="info-wrapper__product">Popularity:<span>${popularity}</span></p>
        </div>     
        <p class="info__price">$${price}</p>
      </div>
    </li>`
    )
    .join('');
}

function createPopularMarkup(arr) {
  // arr.slice(0, 5);
  return arr
    .map(
      ({ name, img, category, popularity, size }) => `      
      <li class="popular-item">
      <div class="popular-img-container"><a href="${img}"><img class="popular-item__img" src="${img}" alt="${name}" loading="lazy" /></a>
      </div>
      <div class="popular-info">
        <h3 class="popular-info__title">${name}</h3>
        <div class="info-wrapper">
        <p class="info-wrapper__product">Category:<span>${category}</span></p>
        <p class="info-wrapper__product">Size:<span>${size}</span></p>
        <p class="info-wrapper__product">Popularity:<span>${popularity}</span></p>
        </div>             
      </div>
    </li>`
    )
    .slice(0, 5)
    .join('');
}

function createDiscountMarkup(arr) {
  // arr.slice(0, 5);
  return arr
    .map(
      ({ name, img, price }) => `      
      <li class="discount-item">
      <div class="discount-img-container"><a href="${img}"><img class="discount-item__img" src="${img}" alt="${name}" loading="lazy" /></a>
      </div>
      <div class="discount-info">
        <h3 class="discount-info__title">${name}</h3>        
        <p class="discount-info__price">$${price}</p>      
      </div>
    </li>`
    )
    .slice(0, 2)
    .join('');
}

export { createProductsMarkup, createPopularMarkup, createDiscountMarkup };
