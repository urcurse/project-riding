Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

const numContainer = document.getElementById("num-carousel");
const numOptions = {
    infinite: true,
    Dots: false,
    nextTpl: false,
};
const numCarousel = new Carousel(numContainer, numOptions);

const bikeContainer = document.getElementById("bike-carousel");
const bikeOptions = {
    Navigation: false,
    Dots: false,
    Sync: {
        target: numCarousel,
    },
};

new Carousel(bikeContainer, bikeOptions);

const testimonialsCarousel = document.getElementById("testimonialsCarousel");
const testimonialsOptions = {
    infinite: true,
    Dots: false,
    // nextTpl: false,
    slidesPerPage: 1,
};

new Carousel(testimonialsCarousel, testimonialsOptions);
