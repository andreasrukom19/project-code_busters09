import Pagination from 'tui-pagination';
import { storage } from './mainSection';
import { contentByOptionsDrawer } from './mainSection';
const container = document.getElementById('tui-pagination-container');

container.addEventListener('click', launchPaginstion);

const { page, perPage, results, totalPages } =
    storage.getFromStorage('pagination') ?? {};

console.log(results.length);

export const pagination = new Pagination(container, {

    totalItems: (totalPages * perPage),
    itemsPerPage: perPage,
    page,
    visiblePages: 4,
    centerAlign: true,
    template: {
        page: '<span class="tui-page-btn">{{page}}</span>',
        currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
        moveButton:
            '<span href="#" class="tui-page-btn tui-{{type}}">' +
                '<svg class="tui-ico-{{type}}" width="8" height="8">'+
                    '<use href="./img/icons.svg#icon-caret-small-{{type}}"></use>'+
                '</svg>'+
            '</span>',
        disabledMoveButton:
            '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
                '<svg class="tui-ico-{{type}}" width="8" height="8">'+
                    '<use href="./img/icons.svg#icon-caret-small-{{type}}"></use>'+
                '</svg>'+
            '</span>',
        moreButton:
            '<span class="tui-page-btn tui-{{type}}-is-ellip">' +
                '<span class="tui-ico-ellip">...</span>' +
            '</span>',
        },
    }
);

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
