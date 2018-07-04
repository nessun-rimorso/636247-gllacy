// no-js

var check = document.querySelector(".no-js");

check.classList.add("js");
check.classList.remove("no-js");

// popup

var link = document.querySelector(".feedback-btn");
var overlay = document.querySelector(".modal-overlay");
var popup = document.querySelector(".modal-popup");
var close = popup.querySelector(".popup-close");
var userName = document.querySelector(".popup-name");
var login = document.querySelector(".popup-email");
var comment = document.querySelector(".popup-comment");
var form = document.querySelector(".popup-form");
var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}
  
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    overlay.classList.add("overlay-show");
    popup.classList.add("modal-show");
    if (storage) {
        login.value = storage;
        userName.focus();
    } else {
        userName.focus();
    }
});
  
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    overlay.classList.remove("overlay-show");
    popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
     if (!userName.value || !login.value || !comment.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value);
      }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
            evt.preventDefault();
            overlay.classList.remove("overlay-show");
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
});

overlay.addEventListener("click", function (evt) {
    overlay.classList.remove("overlay-show");
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});
    
// slider

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

// map

ymaps.ready(function() {

    var myMap = new ymaps.Map("map", {
        center: [59.939365, 30.329108],
        zoom: 16,
        controls: []
    });
    
    myMap.behaviors.disable("scrollZoom");
    
    var MapPlacemark = new ymaps.Placemark([59.938631, 30.323055], {}, {
        balloonMaxWidth: 320,
        iconLayout: "default#image",
        iconImageHref: "./img/map-pin.png",
        iconImageSize: [218, 142],
        iconImageOffset: [-50, -140]
    });

    myMap.geoObjects.add(MapPlacemark);

}); 
