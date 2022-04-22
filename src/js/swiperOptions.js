const swiperOptions = {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  slidesPerView: 2,

  // If we need pagination

  autoplay: {
    delay: 3000,
  },

  centerInsufficientSlides: true,

  scrollbar: {
    el: '.swiper-scrollbar',
  },
};

export default swiperOptions;
