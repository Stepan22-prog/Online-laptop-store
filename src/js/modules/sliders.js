import Swiper, { Autoplay, Navigation, Pagination, Thumbs, Zoom } from 'swiper';
if (document.querySelector('.new__slider')) {
  const swiper = new Swiper('.new__slider', {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
    speed: 800,
    grabCursor: true,
    breakpoints: {
      550: {
        slidesPerGroup: 2,
        slidesPerView: 2
      },
      768: {
        slidesPerGroup: 3,
        slidesPerView: 3
      },
      1200: {
        slidesPerGroup: 4,
        slidesPerView: 4,
        spaceBetween: 15
      },
    },
    pagination: {
      el: '.slider-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.slider-next',
      prevEl: '.slider-prev',
    },
    autoplay: {
      delay: 3000,
    },
  });
}
if (document.querySelector('.gallery__slider')) {
  const galleryOpen = document.querySelectorAll('.gallery__slide');
  const swiperThumb = new Swiper('.thumbs__slider', {
    modules: [Navigation],
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 10,
    speed: 800,
    breakpoints: {

    },
    navigation: {
      nextEl: '.thumbs-next',
      prevEl: '.thumbs-prev',
    },
  });
  const swiper = new Swiper('.gallery__slider', {
    modules: [Thumbs],
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
    speed: 800,
    breakpoints: {

    },
    thumbs: {
      swiper: swiperThumb,
    },
  });
  const galleryPopup = new Swiper('.gallery-popup__slider', {
    modules: [Navigation, Zoom],
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
    speed: 800,
    navigation: {
      nextEl: '.gallery-popup__next',
      prevEl: '.gallery-popup__prev',
    },
    zoom: true,
    maxRatio: 2,
  });
  galleryOpen.forEach(elem => elem.addEventListener('click', () => {
    galleryPopup.slideTo(swiper.activeIndex, 0)
  }))
}
