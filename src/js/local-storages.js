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
    
    getFromLocalStorage(item) { 
        return localStorage.getItem(`${item}`).JSON.parse()
    }

    addToCart() { 
        
    }

}
localStorage.getFromLocalStorage()