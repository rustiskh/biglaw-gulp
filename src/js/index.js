// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();

// import mainSlider from './modules/main-slider.js';
// mainSlider()


document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".article__text-section");
    const navLinks = document.querySelectorAll(".article__sidebar-list-link");

    // function activateSection() {
    //     let current = "";

    //     sections.forEach((section) => {
    //         const sectionTop = section.offsetTop;
    //         const sectionHeight = section.clientHeight;
    //         if (window.scrollY >= sectionTop - sectionHeight / 3) {
    //             current = section.getAttribute("id");
    //         }
    //     });

    //     navLinks.forEach((link) => {
    //         link.classList.remove("active");
    //         if (link.getAttribute("href").includes(current)) {
    //             link.classList.add("active");
    //         }
    //     });
    // }

    function activateSection() {
        let currentSection = sections[0]; // По умолчанию первая секция

        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;

            // Проверяем, что секция выше или ближе к верху экрана
            if (sectionTop >= 0 && sectionTop <= window.innerHeight / 2) {
                currentSection = section;
            }
        });

        // Убираем класс active у всех ссылок
        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSection.getAttribute("id"))) {
                link.classList.add("active");
            }
        });
    }


    window.addEventListener("scroll", activateSection);

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
