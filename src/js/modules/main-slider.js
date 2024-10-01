import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';

// init Swiper:
const mainSlider = new Swiper('.swiper', {
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

export default mainSlider;