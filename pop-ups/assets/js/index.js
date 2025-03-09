var open = document.getElementById("pop-up");
var popBox = document.getElementById("popup-box");
var close = document.getElementById("close");
var content = document.querySelector(".content");

open.addEventListener("click", function () {
  popBox.classList.add("active");
  content.classList.add("blur");
});

close.addEventListener("click", function () {
  popBox.classList.remove("active");
  content.classList.remove("blur");
});

document.addEventListener("click", function (event) {
  if (!popBox.contains(event.target) && event.target !== open) {
    popBox.classList.remove("active");
    content.classList.remove("blur");
  }
});
