import Pagination from 'tui-pagination';
import { storage } from './mainSection';
import { contentByOptionsDrawer } from './mainSection';
const container = document.getElementById('tui-pagination-container');

container.addEventListener('click', launchPaginstion);

const { page, perPage, results, totalPages } =
  storage.getFromStorage('pagination') ?? {};


export const pagination = new Pagination(container, {

    totalItems: (totalPages * perPage),
    itemsPerPage: perPage,
    page,
    centerAlign: false,
    template: {
        page: '<span class="tui-page-btn">{{page}}</span>',
        currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
        disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
            '<svg class="tui-ico-{{type}}" width="8px" height="8px">'+
                '<use href="./img/icons.svg#icon-caret-small-{{type}}"></use>'+
            '</svg>'+
        '</span>',
        moveButton:
            '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
                '<svg class="tui-ico-{{type}}" width="8px" height="8px">'+
                    '<use href="./img/icons.svg#icon-caret-small-{{type}}"></use>'+
                '</svg>'+
            '</span>',
        moreButton:
            '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
            '<span class="tui-ico-ellip">...</span>' +
            '</a>'
    }
}


pagination.on('afterMove', function (eventData) {
  // Зміна сторінки у локальному сховищі після переміщення на нову сторінку
  launchPaginstion();
});

export function launchPaginstion() {
  const p = pagination.getCurrentPage();
  storage.setApiOptions('page', `${p}`);
  contentByOptionsDrawer();
  console.log(p);
}
//pagination.movePageTo(1);
