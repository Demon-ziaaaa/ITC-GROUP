
// swiper js
const swiper = new Swiper('.mySwiper', {
    loop: true, // Loop the slides
    autoplay: {
        delay: 2500, // Slide change delay (3 seconds)
        disableOnInteraction: false, // Continue autoplay after user interaction
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// animation & transition
