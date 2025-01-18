const tops = new Swiper(".tops", {
    direction: "horizontal",
    loop: false,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: "auto",
    spaceBetween: "24",
})
const categories = new Swiper(".categorySlider", {
    direction: "horizontal",
    loop: false,
    slidesPerView: "auto",
    spaceBetween: "43px",
})

