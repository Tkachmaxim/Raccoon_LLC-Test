import Swiper, { Autoplay } from 'swiper';

const swiperOptions = {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2000,
  },
};

export default function handleSlider() {
  Swiper.use(Autoplay);
  new Swiper('.mySwiper', swiperOptions);
}
