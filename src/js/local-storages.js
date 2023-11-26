import { foodService } from './mainSection';

export class LocalStorage {
  constructor() {}

  getOptions() {
    return JSON.parse(localStorage.getItem('options'));
  }
  setOptions(options) {
    localStorage.setItem('options', JSON.stringify(options));
  }

  createAndSave(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getFromStorage(item) {
    return JSON.parse(localStorage.getItem(`${item}`));
  }

  saveCardsToLocalStorage(data) {
    localStorage.setItem('products', JSON.stringify(data));
  }

  saveCategories() {
    if (!localStorage.getItem('categories')) {
      return foodService.getCategories().then(resp => {
        console.log(resp);
        localStorage.setItem('categories', JSON.stringify(resp));
      });
    }
  }

  defaultApiOptions() {
    const defaultOptions = {
      keyword: null,
      category: null,
      page: 1,
      limit: 6,
    };

    localStorage.setItem('options', JSON.stringify(defaultOptions));
  }

  setApiOptions(key, value) {
    // приймає аргументи у форматі рядків: ('keyword', 'ginger')/ ('keyword', 'vegetables')
    const options = JSON.parse(localStorage.getItem('options'));
    options[key] = value;
    localStorage.setItem('options', JSON.stringify(options));
  }

  addToCart(id) {
    // приймає рядок

    const products = JSON.parse(localStorage.getItem('products'));

    const item = products.find(item => item._id === id);

    if (!localStorage.getItem('cart')) {
      return localStorage.setItem('cart', JSON.stringify([item]));
    } else {
      const cart = JSON.parse(localStorage.getItem('cart'));
      cart.push(item);
      return localStorage.setItem('cart', JSON.stringify(cart));
    }
  }

  addProductToCart(obj) {
    if (!localStorage.getItem('cart')) {
      const cart = [obj];
      localStorage.setItem('cart', JSON.stringify(cart));
    } else localStorage.getItem('cart');
    {
      const cart = JSON.parse(localStorage.getItem('cart'));

      if (cart.find(item => obj._id === item._id)) {
        console.log(obj._id);
        return;
      } else {
        cart.push(obj);
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    }
  }

  removeFromCart(id) {
    // приймає рядок

    const cart = JSON.parse(localStorage.getItem('cart'));

    const item = cart.find(item => item._id === id);
    const index = cart.indexOf(item);
    cart.splice(index, 1);
    console.log(cart);
    return localStorage.setItem('cart', JSON.stringify(cart));
  }

  clearCart() {
    localStorage.removeItem('cart');
  }

  saveOptionsToFoodService(options) {
    foodService.perPage = options.limit;
    foodService.currentPage = options.page;
    foodService.category = options.category;
    foodService.searchQuerry = options.keyword;
  }
}
