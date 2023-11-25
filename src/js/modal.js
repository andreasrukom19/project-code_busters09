// import './food-api-service';
// import { foodService } from './mainSection';

// document.addEventListener('DOMContentLoaded', function (event) {
//   const modal = document.querySelector('.modal');
//   const listItems = document.querySelectorAll('.main-products');
//   console.log(event);
//   listItems.forEach(function (item) {
//     item.addEventListener('click', async function () {
//       const productId = parseInt(item.dataset.id);
//       console.log(productId);
//       try {
//         const product = await foodService.getProductById(productId);

//         modal.innerHTML = `
//               <img src="${product.img}" alt="${product.name}" class="modal-image" />
//               <p>Name: ${product.name}</p>
//               <p>Category: ${product.category}</p>
//               <p>Size: ${product.size}</p>
//               <p>Popularity: ${product.popularity}</p>
//               <p>Price: $${product.price}</p>
//               <button class="add-to-cart-btn">Add to Cart</button>
//               <svg class='close-sharp' width='28' height='28'>
//                 <use href='#'></use>
//               </svg>
//             `;

//         modal.style.display = 'block';

//         const closeIcon = modal.querySelector('.close-sharp');
//         closeIcon.addEventListener('click', function () {
//           modal.style.display = 'none';
//         });

//         //
//         //    const addToCartBtn = modal.querySelector('.add-to-cart-btn');
//         // addToCartBtn.addEventListener('click', function () {
//         //   modal.style.display = 'none'; });
//       } catch (error) {
//         console.error('Error fetching product data:', error);
//       }
//     });
//   });
// });
