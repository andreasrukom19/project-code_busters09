// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
import { LocalStorage } from './local-storages';
import { FoodService } from './food-api-service';
const filterBoxList = document.querySelector('.filter-box__list');
const popularProductsList = document.querySelector('.popular-products__list');
const discountProductsList = document.querySelector('.discount-products__list');
const popularProductsListResp = document.querySelector(
  '.popular-products__list-responsive'
);
const discountProductsListResp = document.querySelector(
  '.discount-products__list-responsive'
);
const storage = new LocalStorage();
const foodService = new FoodService();

// document.addEventListener('click', function (event) {
//   if (event.target.classList.contains('cart-img-products')) {
//     const currentImage = event.target;
//     const newImagePath = '../img/checked.svg';
//     currentImage.src = newImagePath;
//   }
// });

function set() {
  storage.saveAllToLocalStorage();
  const data = storage.getFromStorage('products');
  console.log(data);
  filterBoxList.innerHTML = createProductsMarkup(data);
}
set();

// foodService
//   .getFoodList()
//   .then(data => {
//     filterBoxList.innerHTML = createProductsMarkup(data.results);
//   })
//   .catch(error => {
//     // TODO ADD NOTIFLIX
//     // Notify.failure(
//     //   "Error"
//     // );
//   });

// foodService
//   .getPopular()
//   .then(data => {
//     popularProductsList.innerHTML = createPopularMarkup(data);
//     popularProductsListResp.innerHTML = createPopularMarkup(data);
//   })
//   .catch(error => {
//     // TODO ADD NOTIFLIX
//     // Notify.failure(
//     //   "Error"
//     // );
//   });

// foodService
//   .getDiscount()
//   .then(data => {
//     discountProductsList.innerHTML = createDiscountMarkup(data);
//     discountProductsListResp.innerHTML = createDiscountMarkup(data);
//   })
//   .catch(error => {
//     // TODO ADD NOTIFLIX
//     // Notify.failure(
//     //   "Error"
//     // );
//   });

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
        is10PercentOff,
      }) => `<li class="product-card">
       ${
         is10PercentOff
           ? '<img class="discount-icon-products" src="../../assets/discount.svg" alt="Discount" />'
           : ''
       }
      <div class="img-container"><a href="${img}"><img class="product-card__img" src="${img}" alt="${name}" loading="lazy" /></a>
      </div>
      <div class="info">      
        <h2 class="info__title">${name}</h2>
        <div class="info-wrapper">
        <p class="info-wrapper__product">Category:<span>${category}</span></p>
        <p class="info-wrapper__product">Size:<span>${size}</span></p>
        <p class="info-wrapper__product">Popularity:<span>${popularity}</span></p>
        </div>
        <div class="info-wrapper__price-container" >
        <p class="info__price">$${price}</p>       
          <img class="cart-img-products" src="${
            import.meta.env.BASE_URL
          }assets/cart.svg" alt="cart" />
        </div>     
      </div>
    </li>`
    )
    .join('');
}

function createPopularMarkup(arr) {
  return arr
    .map(
      ({ name, img, category, popularity, size, is10PercentOff }) => `      
      <li class="popular-item">
      ${
        is10PercentOff
          ? '<img class="discount-icon-popular" src="./img/discount.svg" alt="Discount" />  <img class="popular-cart-img-down" src="./img/cartLight.svg" alt="cart" />'
          : '<img class="popular-cart-img" src="./img/cartLight.svg" alt="cart" />'
      }
       
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
       <img class="discount-cheap" src="./img/discount.svg" alt="cart" />  
      <div class="discount-img-container"><a href="${img}"><img class="discount-item__img" src="${img}" alt="${name}" loading="lazy" /></a>
      </div>
      <div class="discount-info">
        <h3 class="discount-info__title">${name}</h3>
        <div class="discount-img-wrapper">
        <p class="discount-info__price">$${price}</p>
         <img class="cart-img-products" src="./img/cart.svg" alt="cart" />      
        </div>        
      </div>
    </li>`
    )
    .slice(0, 2)
    .join('');
}

export { createProductsMarkup, createPopularMarkup, createDiscountMarkup };
