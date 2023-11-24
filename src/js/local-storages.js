
import { foodService } from './mainSection';

export class LocalStorage {
  constructor() {}

    saveAllToLocalStorage() {
            return foodService.getFoodList()
            .then(resp => {
                localStorage.setItem('products', JSON.stringify(resp.results))
        })
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
