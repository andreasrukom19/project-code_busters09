import { LocalStorage } from "./local-storages";

const storage = new LocalStorage();
const cartCountEl = document.querySelector('.cart-title');

function totalQuantity() {
    const items = storage.getFromStorage('cart') ?? [];
    return items.length;
}

let cartCount = totalQuantity();
cartCountEl.innerHTML = `cart (${cartCount})`;