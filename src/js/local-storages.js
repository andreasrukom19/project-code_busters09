
import { foodService } from './mainSection';

export class LocalStorage {
    constructor() { }
    
    saveInStorage(key, data) { 
        localStorage.setItem(key, JSON.stringify(data))
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
            return foodService.getCategories()
                .then(resp => {
                    console.log(resp);
                    localStorage.setItem('categories', JSON.stringify(resp))
                })
        }
    }
    
    filter() { 
        localStorage.setItem('filter', '{keyword:null, category: null, page: 1, limit: 6}');
    }

    addToCart(id) {
        // test 
        const products = JSON.parse(localStorage.getItem('products'));
        // test

        if (!localStorage.getItem('cart')) { 
            
            localStorage.setItem('cart', '')
        }
        const item = products.find(item => item._id === id);
        const cart = JSON.parse(localStorage.getItem('cart')).push(item);
        localStorage.setItem('cart', JSON.stringify(`${cart}`))
    }
    
    
    getFromStorage(item) {
        return JSON.parse(localStorage.getItem(`${item}`));
    }

    removeFromCart() { 
        
    }

    clearCart() { 

    }
}
