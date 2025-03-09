var wrapper = document.querySelector(".wrapper");
var loginLink = document.querySelector(".login-link");
var registerLink = document.querySelector(".register-link");
var popUp = document.querySelector(".nav-btn");
var popDown = document.querySelector(".icon-close");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

popUp.addEventListener("click", () => {
  wrapper.classList.add("active-pop");
});

popDown.addEventListener("click", () => {
  wrapper.classList.remove("active-pop");
});

function showPopupMessage(message, type) {
  let popup = document.createElement("div");
  popup.classList.add("popup-message", type);
  popup.innerText = message;
  document.body.appendChild(popup);

  setTimeout(() => {
    popup.classList.add("show");
  }, 100);

  setTimeout(() => {
    popup.classList.remove("show");
    setTimeout(() => popup.remove(), 500);
  }, 3000);
}

document
  .querySelector(".form-box.Register form")
  .addEventListener("submit", (e) => {
    e.preventDefault();

    var email = document.querySelector(
      '.form-box.Register input[type="email"]'
    ).value;
    var password = document.querySelector(
      '.form-box.Register input[type="password"]'
    ).value;

    if (email && password) {
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password);
      showPopupMessage(
        "Registration successful! You can now log in.",
        "success"
      );
      wrapper.classList.remove("active");
    } else {
      showPopupMessage("Please fill in all fields.", "error");
    }
  });

document
  .querySelector(".form-box.login form")
  .addEventListener("submit", (e) => {
    e.preventDefault();

    var email = document.querySelector(
      '.form-box.login input[type="email"]'
    ).value;
    var password = document.querySelector(
      '.form-box.login input[type="password"]'
    ).value;

    var storedEmail = localStorage.getItem("userEmail");
    var storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
      showPopupMessage("You have logged in successfully!", "success");
    } else {
      showPopupMessage(
        "Incorrect email or password. Please try again.",
        "error"
      );
    }
  });
