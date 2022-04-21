import Swiper from 'swiper';

import { dataFeatured, dataAll } from './data';

const refs = {
  featuredMugs: document.querySelector('.feauturedMug'),
  products: document.querySelector('.swiper-wrapper'),
};

function creatingProductMarkUp() {
  if (window.visualViewport.width < 1280) {
    const markUp = `<li>
                <img class="productImage" src=${dataFeatured[0].img} alt="${dataFeatured[0].name}">
                <p class="mugName">${dataFeatured[0].name}</p>
                <p class="mugPrice">$ ${dataFeatured[0].price} USD <span class='mug_price__old'>${dataFeatured[0].oldPrice}</span></p>
</li>`;

    refs.featuredMugs.innerHTML = markUp;
  } else {
    const markUp = dataFeatured
      .map(
        el => `
                <li>
                <img class="productImage" src=${el.img} alt="${el.name}" width="370">
                <p class="mugName">${el.name}</p>
                <p class="mugPrice ${el.oldPrice && 'mugPrice__discount'}">$ ${
          el.price
        } USD <span class='mug_price__old'>${el.oldPrice}
                </span></p> 
                </li>`,
      )
      .join('');

    refs.featuredMugs.innerHTML = markUp;
  }
}

function creatingMoreProductsMarkUp() {
  if (window.visualViewport.width < 1280) {
    const markUp = dataAll
      .map(
        el => `
                    <div class="swiper-slide">
                    <img class="productImageItem" src=${el.img} alt="${el.name}" width="300px">
                    <p class="mugName">${el.name}</p>
                    <p class="mugPrice ${el.oldPrice && 'mugPrice__discount'}">$ ${
          el.price
        } USD <span class="mug_price__old">${el.oldPrice}</span></p>
                </div>`,
      )
      .join('');
    refs.products.innerHTML = markUp;
  } else {
    const markUp = dataAll
      .map(
        el => `
                    <div class="mug">
                    <img class="productImageItem" src=${el.img} alt="${el.name}" width="300px">
                    <p class="mugName">${el.name}</p>
                    <p class="mugPrice ${el.oldPrice && 'mugPrice__discount'}">$ ${
          el.price
        } USD <span class="mug_price__old">${el.oldPrice}</span></p>
                </div>`,
      )
      .join('');

    refs.products.classList.remove('swiper-wrapper');
    refs.products.classList.add('mugs__list');
    refs.products.innerHTML = markUp;
  }
}

creatingProductMarkUp();
creatingMoreProductsMarkUp();

const swiper = new Swiper('.mySwiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  centeredSlidesBounds: true,

  slidesPerView: 2,

  // If we need pagination

  autoplay: {
    delay: 3000,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
