!function(){"use strict";(function(){const e=document.querySelector(".header__burger"),t=document.querySelector("#menu");e.addEventListener("click",(()=>{e.classList.toggle("open"),t.classList.toggle("open")}))})(),document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll(".article__text-section"),t=document.querySelectorAll(".article__sidebar-list-link");window.addEventListener("scroll",(function(){let n=null;e.forEach((e=>{const t=e.getBoundingClientRect().top;t<=50&&t>=-e.offsetHeight/2&&(n=e)})),n&&function(e){t.forEach((e=>e.classList.remove("active")));const n=document.querySelector(`.article__sidebar-list-link[href="#${e}"]`);n&&n.classList.add("active")}(n.id)}));const n=document.querySelector(".article__sidebar"),i=document.querySelector(".article__sidebar-controller"),o=document.querySelector(".article__sidebar-controller-status");if(document.querySelector(".article__text-wrapper"),n&&window.innerWidth<768){n.classList.remove("open");const e=function(e){const t=e.getBoundingClientRect(),n=window.scrollY||document.documentElement.scrollTop;return t.top+n}(n);window.addEventListener("scroll",(()=>{const t=window.scrollY,i=n.classList.contains("sticky");!i&&t>e?n.classList.add("sticky"):i&&t<=e&&n.classList.remove("sticky")})),i.addEventListener("click",(()=>{n.classList.toggle("open")})),t.forEach((e=>{e.addEventListener("click",(()=>{n.classList.remove("open")}))})),n.addEventListener("click",(()=>{const e=n.classList.contains("open");o.innerHTML=e?"Свернуть":"Развернуть"}))}const s=document.querySelector(".header");window.addEventListener("scroll",(()=>{window.location.pathname.includes("o-bankrotstve")||(window.scrollY>600?s.classList.add("sticky"):s.classList.remove("sticky"))})),new Swiper(".hero__slider.swiper",{loop:!0,autoplay:{delay:5e3},spaceBetween:30,pagination:{el:".swiper-pagination"}}),new Swiper(".steps__slider-wrapper.swiper",{pagination:{el:".swiper-pagination",type:"bullets"},autoplay:{delay:5e3},centeredSlides:!0,loop:!0,spaceBetween:30}),new Swiper(".review__slider.swiper",{pagination:{el:".swiper-pagination",type:"bullets"},autoplay:{delay:5e3},centeredSlides:!0,slidesPerView:"auto",autoHeight:!1,loop:!0,spaceBetween:30})}))}();