import { foodService, storage, createProductsMarkup } from './mainSection.js';

const submitForm = document.querySelector('.submit-form');
const select = document.querySelector('.categories');
const filterBoxList = document.querySelector('.filter-box__list');

document.addEventListener('DOMContentLoaded', function () {
  // Скинути значення інпуту
  submitForm.elements.search.value = '';
  // Скинути значення select
  select.value = '';
});

submitForm.addEventListener('submit', event => {
  //select.value = '';
  event.preventDefault();

  const searchValue = event.target.elements.search.value;
  foodService.searchQuerry = searchValue;

  foodService
    .getFoodList()
    .then(data => {
      filterBoxList.innerHTML = createProductsMarkup(data.results);
    })
    .catch(error => {
      console.error('Error fetching food list:', error.message);
      throw error;
    });
});

select.addEventListener('change', function () {
  //submitForm.elements.search.value = '';
  const selectedItem = select.value;
  if (select.value === 'show-all') {
    filterBoxList.innerHTML = '';
    foodService.getFoodList().then(data => {
      filterBoxList.innerHTML = createProductsMarkup(data.results);
    });
  } else {
    foodService.category = selectedItem;
    filterBoxList.innerHTML = '';
    foodService
      .getFoodList()
      .then(data => {
        filterBoxList.innerHTML = createProductsMarkup(data.results);
      })
      .catch(error => {
        filterBoxList.innerHTML = '';
      })
      .finally(() => {});
  }
});

foodService.getCategories().then(categories => {
  //console.log(categories); //=======================================================================================
  // dafault option
  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.textContent = 'Categories';
  defaultOption.disabled = true;
  defaultOption.selected = true; // Обрана за замовчуванням

  const options = categories.map(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    return option;
  });
  const showAllOption = createShowAllOption();
  options.push(showAllOption);
  select.appendChild(defaultOption);
  select.append(...options);
});

function createShowAllOption() {
  const showAllOption = document.createElement('option');
  showAllOption.textContent = 'Show All';
  showAllOption.value = 'show-all';
  return showAllOption;
}
