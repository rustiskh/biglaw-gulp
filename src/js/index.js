// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();

// import mainSlider from './modules/main-slider.js';
// mainSlider()


document.addEventListener("DOMContentLoaded", () => {

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {
        const currentScroll = window.scrollY;
        if (currentScroll > 600) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });

    const mainSlider = new Swiper('.hero__slider.swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
        },
    });

    const stepsSlider = new Swiper('.steps__slider-wrapper.swiper', {
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        autoplay: {
            delay: 5000,
        },
        centeredSlides: true,
        loop: true,
        spaceBetween: 30,
    });

    const reviewSlider = new Swiper('.review__slider.swiper', {
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        autoplay: {
            delay: 5000,
        },
        centeredSlides: true,
        slidesPerView: 'auto',
        autoHeight: false,
        loop: true,
        spaceBetween: 30,
    });
})
