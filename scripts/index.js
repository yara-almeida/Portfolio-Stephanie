const navbar = document.querySelector(".navbar");
const mobileNavbar = document.querySelector(".navbar__mobile");
const button = document.querySelector(".burguer");

button.addEventListener("click", function () {
    mobileNavbar.classList.toggle("active");
});

window.addEventListener("scroll", function () {
    if (this.window.scrollY > 0) return navbar.classList.add("active");
    return navbar.classList.remove("active");
});

let btn = document.getElementById("show-or-hide");

btn.addEventListener("click", function () {
    let container = document.getElementById("container");

    container.classList.toggle("hide");
});
