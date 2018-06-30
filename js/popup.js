  var link = document.querySelector(".feedback-btn");
  
  var popup = document.querySelector(".modal-overlay");
  var close = popup.querySelector(".popup-close");
  
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
  });
  
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });

