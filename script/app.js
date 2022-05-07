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

})