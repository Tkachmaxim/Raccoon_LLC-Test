import { dataFeatured, dataAll } from './data';
import handleSlider from './slider';
import markUpFeaturedMugs from './markUpFituredMug';
import markUpProductCardMobile from './markUpProductCardMobile';
import markUpProductCardDesktop from './markUpProductCardDesktop';

const refs = {
  featuredMugs: document.querySelector('.product__feauturedMug'),
  products: document.querySelector('.swiper-wrapper'),
};

function creatingProductMarkUp() {
  if (window.visualViewport.width > 1280) {
    const markUp = dataFeatured.map(el => markUpFeaturedMugs(el)).join('');
    refs.featuredMugs.innerHTML = markUp;
    return;
  }
  const dataForREnder = dataFeatured[0];
  const markUp = markUpFeaturedMugs(dataForREnder);
  refs.featuredMugs.innerHTML = markUp;
}

function creatingMoreProductsMarkUp() {
  if (window.visualViewport.width > 1280) {
    const markUp = dataAll.map(el => markUpProductCardDesktop(el)).join('');
    refs.products.classList.remove('swiper-wrapper');
    refs.products.classList.add('mugs__list');
    refs.products.innerHTML = markUp;
    return;
  }
  refs.products.innerHTML = dataAll.map(el => markUpProductCardMobile(el)).join('');
  handleSlider();
}

creatingProductMarkUp();
creatingMoreProductsMarkUp();
