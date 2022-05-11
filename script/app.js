let icon = document.querySelector(".menu-icon");
let menu = document.querySelector(".main-menu");



icon.addEventListener("click", () => {

    if (icon.classList.contains("fa-bars")) {
        menu.style.left = 0;
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        menu.style.left = "-250px ";
        icon.classList = " fas fa-bars menu-icon"

    }

});



// $(document).ready(function() {
//     $(".owl-carousel").owlCarousel();
// });


$(".owl-carousel").owlCarousel({
    // loop: true,
    margin: 120,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        768: {
            items: 2,
            nav: true,
        },

    },
});