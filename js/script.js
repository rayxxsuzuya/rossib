const heroSlider = new Swiper('.hero__slider', {
  loop: true,

  pagination: {
    el: '.hero__pagination',
  },
  slideToClickedSlide: true,
});
const licenseSlider = new Swiper('.license__slider', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    820: {
      slidesPerView: 3,
    },
    1: {
      slidesPerView: 1,
      spaceBetween: 15,
    }
  },
  on: {
    init: function () {
      if (window.innerWidth <= 820) {
        this.slideTo(1);
      }
    },
  }
});

const headerBurger = document.querySelector('.header__burger.open');
const headerMobile = document.querySelector('.header-mobile');
const headerMobileClose = document.querySelector('.header__burger.close');
const navLinks = document.querySelectorAll('.header-mobile .header__link');

headerBurger.addEventListener('click', () => {
  headerMobile.classList.toggle('active');
  document.body.style.overflow = 'hidden';
});

headerMobileClose.addEventListener('click', () => {
  headerMobile.classList.remove('active');
  document.body.style.overflow = 'visible';
})

navLinks.forEach(el => {
  el.addEventListener('click', function() {
    headerMobile.classList.remove('active');
  document.body.style.overflow = 'visible';
  })
})