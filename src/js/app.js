import BaseHelpers from './helpers/BaseHelpers.js';

BaseHelpers.checkWebpSupport();

//spoilers
import * as modules from './modules/modules';
modules.spollers();

//menu
modules.menuInit();

//popup

import PopupManager from './modules/PopupManager';
new PopupManager();

//validation
import './libs/jquery.maskedinput.min';
jQuery(function ($) {
  $("#phone").mask("+38 (999) 999-9999");
  $("#phone__call").mask("+38 (999) 999-9999");
  $("#phone__cart").mask("+38 (999) 999-9999");
});

//sliders
import Swiper, { Autoplay, Navigation, Pagination, Thumbs, Zoom } from 'swiper';
if (document.querySelector('.new__slider')) {
  const swiper = new Swiper('.new__slider', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
    speed: 800,
    grabCursor: true,
    breakpoints: {
      // when window width is >= 500px
      550: {
        slidesPerGroup: 2,
        slidesPerView: 2
      },
      // when window width is >= 640px
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
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.new-next',
      prevEl: '.new-prev',
    },
    autoplay: {
      delay: 3000,
    },
  });
}
if (document.querySelector('.gallery__slider')) {
  const galleryOpen = document.querySelectorAll('.gallery__slide');
  const swiperThumb = new Swiper('.thumbs__slider', {
    // configure Swiper to use modules
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
    // configure Swiper to use modules
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
    // configure Swiper to use modules
    modules: [Navigation, Zoom],
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
    speed: 800,
    navigation: {
      nextEl: '.gallery-popup-next',
      prevEl: '.gallery-popup-prev',
    },
    zoom: true,
    maxRatio: 2,
  });
  galleryOpen.forEach(elem => elem.addEventListener('click', () => {
    galleryPopup.slideTo(swiper.activeIndex, 0)
  }))
}

//scroll
const btn = document.querySelector('.to-top');
document.addEventListener("scroll", () => {
  if (scrollY > 500) {
    btn.classList.add('to-top_active');
  } else {
    if (btn.classList.contains('to-top_active')) {
      btn.classList.remove('to-top_active');
    }
  }
});
btn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
})

//select
import './modules/select.js';

//range
import noUiSlider from 'nouislider';
import './libs/wNumb.min.js'
if (document.getElementById('range')) {

  const html5Slider = document.getElementById('range');
  const minPrice = document.getElementById('minPrice');
  const maxPrice = document.getElementById('maxPrice');

  noUiSlider.create(html5Slider, {
    start: [110, 900],
    connect: true,
    range: {
      'min': 100,
      'max': 1000
    },
    format: wNumb({
      decimals: 0,
    })
  });

  html5Slider.noUiSlider.on('update', function (values, handle) {

    let value = values[handle];

    if (handle) {
      maxPrice.value = value;
    } else {
      minPrice.value = value
    }
  });
  minPrice.addEventListener('change', function () {
    html5Slider.noUiSlider.set([this.value, null]);
  });
  maxPrice.addEventListener('change', function () {
    html5Slider.noUiSlider.set([null, this.value]);
  });
}

//tabs
modules.tabs();

//reviews
const ratingItems = document.querySelectorAll('.rating__item');
const ratingValue = document.querySelector('.rating__value');
ratingItems.forEach(item => {
  item.addEventListener('click', elem => {
    ratingValue.innerHTML = elem.target.value;
  })
})