var link = document.querySelector(".feedback-btn");
  
var popup = document.querySelector(".modal-overlay");
var close = popup.querySelector(".popup-close");
var userName = document.querySelector(".popup-name");
  
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    userName.focus();
});
  
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});

