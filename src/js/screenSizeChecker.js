// import './mainSection.js';
import { mainContentDrawer, foodService } from './mainSection.js';

window.addEventListener('resize', onScreenSizeFetch);

function onScreenSizeFetch() {
  const screenSize = window.innerWidth;
  if (screenSize >= 768 && screenSize < 1440 && foodService.perPage !== 8) {
    foodService.perPage = 8;
    mainContentDrawer();
  } else if (screenSize >= 1440 && foodService.perPage !== 9) {
    foodService.perPage = 9;
    mainContentDrawer();
  } else if (screenSize < 768 && foodService.perPage !== 6) {
    foodService.perPage = 6;
    mainContentDrawer();
  }
}
