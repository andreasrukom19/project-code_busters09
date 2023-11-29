import { foodService, contentByOptionsDrawer, storage } from './mainSection.js';
import { launchPaginstion, pagination } from './pagination-tui.js';

const submitForm = document.querySelector('.submit-form');
const select = document.querySelector('.categories');
const filterBoxList = document.querySelector('.filter-box__list');

document.addEventListener('DOMContentLoaded', function () {
  // Скинути значення інпуту
  submitForm.elements.search.value = '';
  // Скинути значення select
  // select.value = '';
});

submitForm.addEventListener('submit', event => {
  //select.value = '';
  event.preventDefault();
  //const selectedItem = select.value; //===============================================================
  const searchValue = event.target.elements.search.value;
  //foodService.searchQuerry = searchValue;
  const savedOptions = storage.getFromStorage('options');
  savedOptions.page = 1;

  savedOptions.keyword = searchValue ? searchValue : null;

  localStorage.setItem('options', JSON.stringify(savedOptions));
  // storage.updateFoodService(savedOptions);
  //launchPaginstion();
  contentByOptionsDrawer();
});

select.addEventListener('change', function () {
  //submitForm.elements.search.value = '';
  const selectedItem = select.value;
  //const searchValue = event.target.elements.search.value; //================================================================================
  const savedOptions = storage.getFromStorage('options');
  savedOptions.page = 1;

  savedOptions.category = selectedItem ? selectedItem : null;
  localStorage.setItem('options', JSON.stringify(savedOptions));
  if (select.value === 'show-all') {
    filterBoxList.innerHTML = '';
    storage.defaultApiOptions();
    submitForm.elements.search.value = '';
    contentByOptionsDrawer();
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
    // Заміна нижніх підкреслень на пробіли
    const displayText = category.replace(/_/g, ' ');

    const option = document.createElement('option');
    option.value = category;
    option.textContent = displayText;
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
