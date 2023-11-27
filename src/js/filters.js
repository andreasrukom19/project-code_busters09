import {
  foodService,
  mainContentDrawer,
  contentByOptionsDrawer,
  storage,
} from './mainSection.js';

const submitForm = document.querySelector('.submit-form');
const select = document.querySelector('.categories');
const filterBoxList = document.querySelector('.filter-box__list');

document.addEventListener('DOMContentLoaded', function () {
  // Скинути значення інпуту
  // submitForm.elements.search.value = '';
  // Скинути значення select
  select.value = '';
});

submitForm.addEventListener('submit', event => {
  //select.value = '';
  event.preventDefault();
  //const selectedItem = select.value; //===============================================================
  const searchValue = event.target.elements.search.value;
  //foodService.searchQuerry = searchValue;
  const savedOptions = storage.getFromStorage('options');
  savedOptions.keyword = searchValue ? searchValue : null;

  localStorage.setItem('options', JSON.stringify(savedOptions));
  // storage.updateFoodService(savedOptions);

  if (searchValue) {
    contentByOptionsDrawer();
  } else {
    foodService.resetSearchQuerry();
    mainContentDrawer();
  }
});

select.addEventListener('change', function () {
  //submitForm.elements.search.value = '';
  const selectedItem = select.value;
  //const searchValue = event.target.elements.search.value; //================================================================================
  const savedOptions = storage.getFromStorage('options');

  savedOptions.category = selectedItem ? selectedItem : null;
  localStorage.setItem('options', JSON.stringify(savedOptions));
  if (select.value === 'show-all') {
    filterBoxList.innerHTML = '';
    storage.defaultApiOptions();
    mainContentDrawer();
  } else {
    foodService.category = selectedItem;
    filterBoxList.innerHTML = '';
    contentByOptionsDrawer();
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
  //resetCategory();
  return showAllOption;
}