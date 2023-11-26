import { foodService } from './mainSection';

export class LocalStorage {
  constructor() {}

  saveInStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  saveAllToLocalStorage(data) {
    localStorage.setItem('products', JSON.stringify(data));
    // якщо треба додати нові продукти в масив
    // const products = localStorage.getItem('products')

    // if (products) {
    //     const addProducts = JSON.parse(localStorage.getItem(products)).push(data);
    //     return localStorage.setItem('products', JSON.stringify(addProducts))
    // }
  }

  saveCategories() {
    if (!localStorage.getItem('categories')) {
      return foodService.getCategories().then(resp => {
        console.log(resp);
        localStorage.setItem('categories', JSON.stringify(resp));
      });
    }
  }

  //   defaultApiOptions() {
  //     localStorage.setItem(
  //       'options',
  //       '{keyword:null, category: null, page: 1, limit: 6}'
  //     );
  //   }
  defaultApiOptions() {
    const defaultOptions = {
      keyword: null,
      category: null,
      page: 1,
      limit: 6,
    };

    localStorage.setItem('options', JSON.stringify(defaultOptions));
  }

  getApiOptions() {
    return JSON.parse(localStorage.getItem('options'));
  }

  setApiOptions(key, value) {
    const filter = JSON.parse(localStorage.getItem('options'));
    // ??? //
    options[key] = value;
  }

  addToCart(id) {
    // test
    const products = JSON.parse(localStorage.getItem('products'));
    // test

    const item = products.find(item => item._id === id);
    console.log(item);

    if (!localStorage.getItem('cart')) {
      return localStorage.setItem('cart', JSON.stringify(item));
    } else {
      const cart = JSON.parse(localStorage.getItem('cart'));
      return localStorage.setItem('cart', JSON.stringify(cart));
    }
  }

  getFromStorage(item) {
    return JSON.parse(localStorage.getItem(`${item}`));
  }

  removeFromCart(id) {
    // test
    const products = localStorage.getItem('products');
    // test

    JSON.parce(localStorage.getItem('cart'));
  }

  clearCart() {}

  saveOptionsToFoodService(options) {
    foodService.perPage = options.limit;
    foodService.currentPage = options.page;
    foodService.category = options.category;
    foodService.searchQuerry = options.keyword;
  }
}
