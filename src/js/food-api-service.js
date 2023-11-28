import axios from 'axios';
import { storage } from './mainSection';

export class FoodService {
  constructor() {
    this.URL = `https://food-boutique.b.goit.study/api`;
  }

  getFoodListWithOptions2(obj) {
    if (window.innerWidth >= 768 && window.innerWidth < 1440) {
      obj.limit = 8;
      storage.setOptions(obj);
    } else if (window.innerWidth >= 1440) {
      obj.limit = 9;
      storage.setOptions(obj);
    }

    const params = {
      page: obj.page,
      limit: obj.limit,
      keyword: obj.keyword !== null ? obj.keyword : undefined, //міняємо null на undefined при першій загрузці
      category: obj.category !== null ? obj.category : undefined, //міняємо null на undefined при першій загрузці
    };

    Object.keys(params).forEach(
      key => params[key] === undefined && delete params[key] // видалення, якщо в пошуках та/або в категорії - undefined
    );

    return axios.get(`${this.URL}/products`, { params }).then(response => {
      return response.data;
    });
  }

  findProductById(id) {
    return axios.get(`${this.URL}/products/${id}`).then(response => {
      return response.data;
    });
  }

  getPopular() {
    return axios.get(`${this.URL}/products/popular`).then(response => {
      return response.data;
    });
  }

  getDiscount() {
    return axios.get(`${this.URL}/products/discount`).then(response => {
      return response.data;
    });
  }

  getCategories() {
    return axios.get(`${this.URL}/products/categories`).then(response => {
      return response.data;
    });
  }

  //* POST => //

  subscribe(email) {
    return axios.post(`${this.URL}/subscription`, {
      email: email,
    });
  }

  order(email, products) {
    axios.post(`${this.URL}/orders`, {
      email: email,
      products,
    });
  }

  /*
!products = масив об'єктів
!Приклад запиту order:
foodService.order('test123@gmail.com', [
  { productId: '640c2dd963a319ea671e3860', amount: 2 },
  { productId: '640c2dd963a319ea671e3861', amount: 1 },
]);

*/
}
