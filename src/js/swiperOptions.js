const swiperOptions = {
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
};

export default swiperOptions;
