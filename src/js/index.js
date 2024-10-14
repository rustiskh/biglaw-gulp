// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();

// import mainSlider from './modules/main-slider.js';
// mainSlider()


document.addEventListener("DOMContentLoaded", () => {


    const articleNavSection = document.querySelectorAll(".article__text-section"); // Все секции статьи
    const articleNavLinks = document.querySelectorAll(".article__sidebar-list-link"); // Все ссылки в боковом меню

    // Функция для удаления класса "active" у всех ссылок
    function removeActiveClass() {
        articleNavLinks.forEach((link) => link.classList.remove("active"));
    }

    // Функция для добавления класса "active" к соответствующей ссылке
    function setActiveLink(id) {
        removeActiveClass();
        const activeLink = document.querySelector(`.article__sidebar-list-link[href="#${id}"]`);
        if (activeLink) {
            activeLink.classList.add("active");
        }
    }

    // Отслеживание скроллинга и определение самой близкой к верху секции
    window.addEventListener("scroll", function () {
        let currentSection = null;

        articleNavSection.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop <= 50 && sectionTop >= -section.offsetHeight / 2) {
                currentSection = section;
            }
        });

        if (currentSection) {
            setActiveLink(currentSection.id);
        }
    });

    // Article navigation
    const articleNav = document.querySelector(".article__sidebar")
    const articleNavController = document.querySelector(".article__sidebar-controller")
    const articleNavControllerStatus = document.querySelector(".article__sidebar-controller-status")
    const articleTextWrapper = document.querySelector(".article__text-wrapper")


    function getOffsetTop(element) {
        const rect = element.getBoundingClientRect(); // Позиция элемента относительно окна
        const scrollTop = window.scrollY || document.documentElement.scrollTop; // Текущий скролл страницы
        return rect.top + scrollTop; // Возвращает точное расстояние от элемента до верха страницы
    }

    console.log(articleNav.clientHeight);


    if (articleNav && window.innerWidth < 768) {
        articleNav.classList.remove("open");
        // Сохраняем начальное положение элемента
        const articleNavOffsetTop = getOffsetTop(articleNav);

        window.addEventListener('scroll', () => {
            const currentScroll = window.scrollY;
            const isSticky = articleNav.classList.contains("sticky");

            if (!isSticky && currentScroll > articleNavOffsetTop) {
                articleNav.classList.add("sticky");
                // articleNav.classList.remove("open");
            } else if (isSticky && currentScroll <= articleNavOffsetTop) {
                articleNav.classList.remove("sticky");
                // articleNav.classList.add("open");
            }
        });

        articleNavController.addEventListener('click', () => {
            articleNav.classList.toggle("open");
        })

        articleNavLinks.forEach((link) => {
            link.addEventListener('click', () => {
                articleNav.classList.remove("open");
            })
        })

        // if () {
        //     articleNavControllerStatus.innerHTML = "Развернуть"
        // } else {
        //     articleNavControllerStatus.innerHTML = "Свернуть"
        // }
    }

    // sticky header
    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {
        if (window.location.pathname.includes('o-bankrotstve')) {
            return
        }
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
