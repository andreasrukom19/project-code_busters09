// import './mainSection.js';
import { contentByOptionsDrawer } from './mainSection.js';

import { storage } from './mainSection.js';

window.addEventListener('resize', onScreenSizeFetch2);

function onScreenSizeFetch2() {
  const options = storage.getOptions();

  const screenSize = window.innerWidth;
  if (screenSize >= 768 && screenSize < 1440 && options.limit !== 8) {
    options.limit = 8;
    storage.setOptions(options);
    contentByOptionsDrawer(options);
  } else if (screenSize >= 1440 && options.limit !== 9) {
    options.limit = 9;
    storage.setOptions(options);
    contentByOptionsDrawer(options);
  } else if (screenSize < 768 && options.limit !== 6) {
    options.limit = 6;
    storage.setOptions(options);
    contentByOptionsDrawer(options);
  }
}
