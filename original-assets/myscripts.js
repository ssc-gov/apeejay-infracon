var viewportHeader = document.querySelector(".viewport-header");

document.body.addEventListener("scroll", function(event) {
    var opacity = (document.body.offsetHeight - document.body.scrollTop) / document.body.offsetHeight;
    var scale = (document.body.offsetHeight - document.body.scrollTop) / document.body.offsetHeight;
    document.documentElement.style.setProperty('--headerOpacity', opacity);
    document.documentElement.style.setProperty('--headerScale', scale);
});



jQuery(document).ready(function($) {
    "use strict";
    //  TESTIMONIALS CAROUSEL HOOK
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 5500,
        smartSpeed: 650,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1170: {
                items: 3
            }
        }
    });
});