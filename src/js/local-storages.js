import { foodService } from './mainSection';

export class LocalStorage {
  constructor() {}

  getOptions() {
    return JSON.parse(localStorage.getItem('options'));
  }
  setOptions(options) {
    localStorage.setItem('options', JSON.stringify(options));
  }

  getCart() {
    if (!localStorage.getItem('cart')) {
      return [];
    }
    return JSON.parse(localStorage.getItem('cart'));
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
    const data = localStorage.getItem('options');
    // if (data) return;
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

    this.addProductToCart(item);
  }

  addProductToCart(obj) {
    if (
      !localStorage.getItem('cart') ||
      localStorage.getItem('cart').length === 0
    ) {
      const cart = [obj];
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      const cart = JSON.parse(localStorage.getItem('cart'));

      if (cart.find(item => obj._id === item._id)) {
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
    return localStorage.setItem('cart', JSON.stringify(cart));
  }

  clearCart() {
    localStorage.removeItem('cart');
  }
}
