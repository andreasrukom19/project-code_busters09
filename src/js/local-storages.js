import { foodService } from './mainSection';

export class LocalStorage {
  constructor() {}

  saveInStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

    getFromStorage(item) {
        return JSON.parse(localStorage.getItem(`${item}`));
    }

    saveAllToLocalStorage(data) {
        localStorage.setItem('products', JSON.stringify(data))
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


    // setApiOptions(key, value) { 
    //     // передавати значення у форматі рядку //
    //     // const options = JSON.parse(localStorage.getItem('options'));
    //     // ??? //
    //     // console.log(options);
    //     options[key] = `${value}`;
    // }
        
  defaultApiOptions() {
    const defaultOptions = {
      keyword: null,
      category: null,
      page: 1,
      limit: 6,
    };

    localStorage.setItem('options', JSON.stringify(defaultOptions));
  }

    addToCart(id) {
        
        const products = JSON.parse(localStorage.getItem('products'));

        const item = products.find(item => item._id === id);

        if (!localStorage.getItem('cart')) {

            return localStorage.setItem('cart', JSON.stringify([item]))
        }
        else {
            const cart = JSON.parse(localStorage.getItem('cart'));
            cart.push(item);
            return localStorage.setItem('cart', JSON.stringify(cart))
        }
    }

    removeFromCart(id) { 

        const cart = JSON.parse(localStorage.getItem('cart'));

        const item = cart.find(item => item._id === id);
        const index = cart.indexOf(item)
        cart.splice(index, 1);
        console.log(cart);
        return localStorage.setItem('cart', JSON.stringify(cart));

    }

    clearCart() {}

  saveOptionsToFoodService(options) {
    foodService.perPage = options.limit;
    foodService.currentPage = options.page;
    foodService.category = options.category;
    foodService.searchQuerry = options.keyword;
  }
}
