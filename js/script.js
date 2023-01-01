
let button = document.querySelector(".theme__button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".theme__name");

button.addEventListener("click", () => {
    body.classList.toggle("body--dark");

    themeName.innerText = body.classList.contains("body--dark") ? "jasny" : "ciemny";
});