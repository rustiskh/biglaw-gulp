import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';
import { tree } from 'gulp';

// init Swiper:
export const mainSlider = new Swiper('.hero__slider.swiper', {
    // configure Swiper to use modules
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    autoplay: {
        delay: 5000,
    },
    loop: true,
    spaceBetween: 30,
    modules: [Pagination, Autoplay],
});

export const stepsSlider = new Swiper('.steps__slider-wrapper.swiper', {
    // configure Swiper to use modules
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
    modules: [Pagination, Autoplay],
});

export const reviewSlider = new Swiper('.review__slider.swiper', {
    // configure Swiper to use modules
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    autoplay: {
        delay: 5000,
    },
    centeredSlides: true,
    slidesPerView: 'auto',
    autoHeight: true,
    loop: true,
    spaceBetween: 30,
    modules: [Pagination, Autoplay],
});