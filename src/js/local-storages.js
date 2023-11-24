import axios from "axios";
import { FoodService } from "./food-api-service";

axios.defaults.baseURL = 'https://food-boutique.b.goit.study/api';

const foodService = new FoodService();

export class LocalStorage {

    constructor() {

    }

    saveAllToLocalStorage() {
        if (!localStorage.getItem('products')) {
            return foodService.getFoodList()
                .then(resp => {
                    localStorage.setItem('products', JSON.stringify(resp.results))
                })
        }
    }

    addToCart(id) {
        // test 
        const products = JSON.parse(localStorage.getItem('products'));
        // test

        if (!localStorage.getItem('cart'))
        { 
            localStorage.setItem('cart')
        }
        const item = products.find(item => item._id === id);
        const cart = JSON.parse(localStorage.getItem('cart'));
        cart.push(item)
        }
    
    getFromLocalStorage(item) {
        return JSON.parse(localStorage.getItem(`${item}`));
    }


}

const storage = new LocalStorage;
storage.addToCart('640c2dd963a319ea671e383b');
storage.addToCart('640c2dd963a319ea671e3660');


