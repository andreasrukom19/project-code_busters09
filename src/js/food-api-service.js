import axios from 'axios';

export class FoodService {
  constructor() {
    this.URL = `https://food-boutique.b.goit.study/api`;
    this.currentPage = 1;
    this.perPage = 6;
    this.searchQuerry = '';
    this.category = '';
  }

  getBasicFoodList() {
    if (window.innerWidth >= 768 && window.innerWidth < 1440) {
      this.perPage = 8;
    } else if (window.innerWidth >= 1440) {
      this.perPage = 9;
    }
    return axios
      .get(`${this.URL}/products?limit=${this.perPage}`)
      .then(response => {
        return response.data;
      });
  }

  getFoodListWithOptions() {
    if (window.innerWidth >= 768 && window.innerWidth < 1440) {
      this.perPage = 8;
    } else if (window.innerWidth >= 1440) {
      this.perPage = 9;
    }
    return axios
      .get(
        `${this.URL}/products?page=${this.currentPage}&limit=${this.perPage}&keyword=${this.searchQuerry}&category=${this.category}`
      )
      .then(response => {
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

  resetPageCounter() {
    this.currentPage = 1;
  }

  incrementPage() {
    this.currentPage += 1;
  }

  resetSearchQuerry() {
    this.searchQuerry = '';
  }

  resetCategory() {
    this.category = '';
  }

  //* POST => //

  subscribe(email) {
    axios.post(`${this.URL}/subscription`, {
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
