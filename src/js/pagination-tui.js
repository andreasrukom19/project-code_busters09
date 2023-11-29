import Pagination from 'tui-pagination';
import { storage } from './mainSection';
import { contentByOptionsDrawer } from './mainSection';
const container = document.getElementById('tui-pagination-container');

container.addEventListener('click', launchPaginstion)


const {
    page, perPage, results, totalPages
} = storage.getFromStorage('pagination') ?? {}

console.log(results.length);

export const pagination = new Pagination(container, {
    totalItems: (totalPages * perPage),
    itemsPerPage: perPage,
    page,
    centerAlign: false,
    template: {
        page: '<a href="./index.html" class="tui-page-btn">{{page}}</a>',
        currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
        moveButton:
            '<a href="#" class="tui-page-btn tui-{{type}}">' +
            '<span class="tui-ico-{{type}}">{{type}}</span>' +
            '</a>',
        disabledMoveButton:
            '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
            '<span class="tui-ico-{{type}}">{{type}}</span>' +
            '</span>',
        moreButton:
            '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
            '<span class="tui-ico-ellip">...</span>' +
            '</a>'
    }
}
);

function launchPaginstion() {
    const p = pagination.getCurrentPage();
    storage.setApiOptions('page', `${p}`);
    contentByOptionsDrawer()
    console.log(p);
}