import axios from "axios";
import { FoodService } from "./food-api-service";

axios.defaults.baseURL = 'https://food-boutique.b.goit.study/api';

const foodService = new FoodService();

function saveToLocal() { 
    foodService.getFoodList()
        .then(resp => {
            localStorage.setItem('products', JSON.stringify(resp.results))
        }
    )
}

saveToLocal()