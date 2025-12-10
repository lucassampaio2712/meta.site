// Carousel Configuration
// Using Swiper.js

document.addEventListener('DOMContentLoaded', () => {

    const swiper = new Swiper('.hero-slider', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        effect: 'fade', // Fade transition
        fadeEffect: {
            crossFade: true
        },
        speed: 1000, // Transition speed (1s)

        // Autoplay
        autoplay: {
            delay: 10000, // 10 seconds duration per slide
            disableOnInteraction: false,
        },

        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },

        // Accessibility
        a11y: {
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
        },
    });

});
