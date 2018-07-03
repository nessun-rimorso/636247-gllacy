var background = document.querySelector(".site-background");
var control1 = document.querySelector(".control-1");
var control2 = document.querySelector(".control-2");
var control3 = document.querySelector(".control-3");
var slide1 = document.querySelector(".slide-1");
var slide2 = document.querySelector(".slide-2");
var slide3 = document.querySelector(".slide-3");


control1.addEventListener("click", function (evt) {
    evt.preventDefault();
    background.classList.remove("site-background-2");
    background.classList.remove("site-background-3");
    background.classList.add("site-background-1");
    control2.classList.remove("active");
    control3.classList.remove("active");
    control1.classList.add("active");
    slide2.classList.remove("active");
    slide3.classList.remove("active");
    slide1.classList.add("active");
});

control2.addEventListener("click", function (evt) {
    evt.preventDefault();
    background.classList.remove("site-background-1");
    background.classList.remove("site-background-3");
    background.classList.add("site-background-2");
    control1.classList.remove("active");
    control3.classList.remove("active");
    control2.classList.add("active");
    slide1.classList.remove("active");
    slide3.classList.remove("active");
    slide2.classList.add("active");
});

control3.addEventListener("click", function (evt) {
    evt.preventDefault();
    background.classList.remove("site-background-2");
    background.classList.remove("site-background-1");
    background.classList.add("site-background-3");
    control1.classList.remove("active");
    control2.classList.remove("active");
    control3.classList.add("active");
    slide1.classList.remove("active");
    slide2.classList.remove("active");
    slide3.classList.add("active");
});