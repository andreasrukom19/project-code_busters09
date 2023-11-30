import { LocalStorage } from './local-storages';
import { FoodService } from './food-api-service';
import { updateCartCountTitle } from './header';
import cartImgURL from '../img/cart.svg';
import cartLightImgURL from '../img/cartLight.svg';
import discountImgURL from '../img/discount.svg';
import checkedImage from '../img/checked.svg';
import { changeCardIconOnClick } from './changeCardIconOnClick';
import { addClassHidden, removeClassHidden } from './helpers';
import { hideSpinner, showSpinner } from './spinner';
const optionsString = localStorage.getItem('options');
const parsedOptions = JSON.parse(optionsString);
const noProductsMessageEl = document.querySelector('.no-products-message');
const pagginationEl = document.querySelector('.pagination');
const filterBoxList = document.querySelector('.filter-box__list');
const popularProductsList = document.querySelector('.popular-products__list');
const discountProductsList = document.querySelector('.discount-products__list');

export const storage = new LocalStorage();
export const foodService = new FoodService();

document.addEventListener('click', function (event) {
  if (event.target.tagName === 'IMG') {
    event.preventDefault();
  }
});
storage.defaultApiOptions();
contentByOptionsDrawer();
popularContentDrawer();
discountContentDrawer();
changeCardIconOnClick();

document.addEventListener('click', addToCartOnMainProductsClick);

function addToCartOnMainProductsClick(event) {
  if (event.target && event.target.classList.contains('main-cart-icon')) {
    const productId = event.target.dataset.productId;
    storage.addToCart(productId);
    updateCartCountTitle();
    contentByOptionsDrawer();
    popularContentDrawer();
    discountContentDrawer();
  } else if (
    event.target &&
    (event.target.classList.contains('cart-img-products') ||
      event.target.classList.contains('popular-cart-img'))
  ) {
    const productId = event.target.dataset.productId;
    foodService.findProductById(productId).then(product => {
      storage.addProductToCart(product);
      updateCartCountTitle();
      contentByOptionsDrawer();
      popularContentDrawer();
      discountContentDrawer();
    });
  }
  return;
}

export function contentByOptionsDrawer() {
  const options = JSON.parse(localStorage.getItem('options'));
  showSpinner();
  foodService
    .getFoodListWithOptions2(options)
    .then(data => {
      if (
        data.totalPages < 2 ||
        parsedOptions.limit < 6 ||
        data.results.length === 0
      ) {
        addClassHidden(pagginationEl);
      } else {
        removeClassHidden(pagginationEl);
      }
      if (data.results.length === 0) {
        removeClassHidden(noProductsMessageEl);
      } else {
        addClassHidden(noProductsMessageEl);
      }
      if (filterBoxList) {
        filterBoxList.innerHTML = createProductsMarkup(data.results);
      }

      hideSpinner();
      storage.saveCardsToLocalStorage(data.results);
      storage.createAndSave('pagination', data);
    })
    .catch(error => {
      console.log('error', error);
    });
}

export function popularContentDrawer() {
  foodService
    .getPopular()
    .then(data => {
      if (popularProductsList) {
        popularProductsList.innerHTML = createPopularMarkup(data);
      }
    })
    .catch(error => {
      console.log('error', error);
    });
}

export function discountContentDrawer() {
  foodService
    .getDiscount()
    .then(data => {
      if (discountProductsList) {
        discountProductsList.innerHTML = createDiscountMarkup(data);
      }
    })
    .catch(error => {
      console.log('error', error);
    });
}

export function createProductsMarkup(arr) {
  const cart = storage.getCart();

  return arr
    .map(
      ({
        _id,
        name,
        img,
        category,
        price,
        popularity,
        size,
        is10PercentOff,
      }) => {
        const cartElement = document.createElement('img');
        cartElement.src = cartImgURL;
        cartElement.classList.add('main-cart-icon');
        cartElement.dataset.productId = _id;
        let updateCategory = category.replace(/_/g, ' ');
        const discountElement = document.createElement('img');
        discountElement.src = discountImgURL;
        discountElement.classList.add('discount-icon-products');

        const imgToInsert = is10PercentOff ? discountElement.outerHTML : '';

        const checkedElement = document.createElement('img');
        checkedElement.src = checkedImage;
        checkedElement.classList.add('js-checked-arrow');

        const isChecked = cart.some(checkedItem => checkedItem._id === _id);

        return `<li class="product-card" data-id=${_id}>
          ${imgToInsert}
          <div class="img-container"><a href="${img}"><img class="product-card__img" src="${img}" alt="${name}" loading="lazy" /></a>
          </div>
          <div class="info">      
            <h2 class="info__title">${name}</h2>
            <div class="info-wrapper">
              <p class="info-wrapper__product">Category:<span>${updateCategory}</span></p>
              <p class="info-wrapper__product">Size:<span>${size}</span></p>
              <p class="info-wrapper__product">Popularity:<span>${popularity}</span></p>
            </div>
            <div class="info-wrapper__price-container" >
              <p class="info__price">$${price}</p> 
              ${isChecked ? checkedElement.outerHTML : cartElement.outerHTML}
            </div>     
          </div>
        </li>`;
      }
    )
    .join('');
}

export function createPopularMarkup(arr) {
  const cart = storage.getCart();
  return arr
    .map(({ _id, name, img, category, popularity, size, is10PercentOff }) => {
      const imgElement = document.createElement('img');
      imgElement.src = cartLightImgURL;
      imgElement.classList.add('popular-cart-img');
      imgElement.dataset.productId = _id;
      imgElement.alt = 'add to cart';

      const imgElementDown = document.createElement('img');
      imgElementDown.src = cartLightImgURL;
      imgElementDown.classList.add('popular-cart-img-down');

      const discountImgElement = document.createElement('img');
      discountImgElement.src = discountImgURL;
      discountImgElement.classList.add('discount-icon-popular');

      const imgToInsert = is10PercentOff
        ? `${discountImgElement.outerHTML}${imgElementDown.outerHTML}`
        : `${imgElement.outerHTML}`;

      const checkedElement = document.createElement('img');
      checkedElement.src = checkedImage;
      checkedElement.classList.add('popular-cart-img');
      checkedElement.dataset.productId = _id;
      checkedElement.alt = 'added to cart';

      const isChecked = cart.some(checkedItem => checkedItem._id === _id);
      let updateCategory = category.replace(/_/g, ' ');
      return `      
        <li class="popular-item" data-id="${_id}">
            ${isChecked ? checkedElement.outerHTML : imgToInsert}
          <div class="popular-img-container"><img class="popular-item__img" src="${img}" alt="${name}" loading="lazy" /></div>
          <div class="popular-info">
            <h3 class="popular-info__title">${name}</h3>
            <div class="info-wrapper">
              <p class="info-wrapper__product">Category:<span>${updateCategory}</span></p>
              <p class="info-wrapper__product">Size:<span>${size}</span></p>
              <p class="info-wrapper__product">Popularity:<span>${popularity}</span></p>
            </div>             
          </div>
        </li>`;
    })
    .slice(0, 5)
    .join('');
}

export function createDiscountMarkup(arr) {
  const cart = storage.getCart();
  return arr
    .map(({ _id, name, img, price }) => {
      const imgElement = document.createElement('img');
      imgElement.src = cartImgURL;
      imgElement.classList.add('cart-img-products');
      imgElement.dataset.productId = _id;
      imgElement.alt = 'add to cart';

      const discountImgElement = document.createElement('img');
      discountImgElement.src = discountImgURL;
      discountImgElement.classList.add('discount-cheap');
      discountImgElement.alt = 'discounted product';

      const checkedElement = document.createElement('img');
      checkedElement.src = checkedImage;
      checkedElement.classList.add('js-checked-arrow');
      // checkedElement.classList.add('popular-cart-img');

      const isChecked = cart.some(checkedItem => checkedItem._id === _id);

      return `      
      <li class="discount-item" data-id="${_id}">
   
       ${discountImgElement.outerHTML} 
      <div class="discount-img-container"><a href="${img}"><img class="discount-item__img" src="${img}" alt="${name}" loading="lazy" /></a>
      </div>
      <div class="discount-info">
        <h3 class="discount-info__title">${name}</h3>
        <div class="discount-img-wrapper">
        <p class="discount-info__price">$${price}</p>
         ${isChecked ? checkedElement.outerHTML : imgElement.outerHTML}
        </div>        
      </div>
    </li>`;
    })
    .slice(0, 2)
    .join('');
}
