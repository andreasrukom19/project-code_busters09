import { foodService, contentByOptionsDrawer, storage } from './mainSection.js';
import { pagination } from './pagination-tui.js';

const submitForm = document.querySelector('.submit-form');
const select = document.querySelector('.categories');
const filterBoxList = document.querySelector('.filter-box__list');

document.addEventListener('DOMContentLoaded', function () {
  submitForm.elements.search.value = '';
});

submitForm.addEventListener('submit', event => {
  event.preventDefault();

  const searchValue = event.target.elements.search.value;
  const savedOptions = storage.getFromStorage('options');
  savedOptions.page = 1;

  savedOptions.keyword = searchValue ? searchValue : null;

  localStorage.setItem('options', JSON.stringify(savedOptions));
  contentByOptionsDrawer();
  pagination.reset();
});

select.addEventListener('change', function () {
  const selectedItem = select.value;

  const savedOptions = storage.getFromStorage('options');
  savedOptions.page = 1;

  savedOptions.category = selectedItem ? selectedItem : null;
  localStorage.setItem('options', JSON.stringify(savedOptions));
  if (select.value === 'show-all') {
    filterBoxList.innerHTML = '';
    storage.defaultApiOptions();
    submitForm.elements.search.value = '';
    contentByOptionsDrawer();
    pagination.reset();
  } else {
    foodService.category = selectedItem;
    filterBoxList.innerHTML = '';
    contentByOptionsDrawer();
    pagination.reset();
  }
});

foodService.getCategories().then(categories => {
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
  return showAllOption;
}
