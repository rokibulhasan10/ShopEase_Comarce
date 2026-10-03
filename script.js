// Only the required real-time clock and form confirmation alerts are handled here.
function showRealTime() {
  const clock = document.getElementById("clock");
  if (clock) clock.innerText = new Date().toLocaleString();
}
showRealTime();
setInterval(showRealTime, 1000);

const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Login form submitted successfully!");
  });
}

const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Registration completed successfully!");
  });
}

// Image zoom using jQuery + CSS class
if (window.jQuery && document.querySelector(".zoom-image")) {
  $(".zoom-image").on("mouseenter", function () {
    $(this).addClass("is-zoomed");
  }).on("mouseleave", function () {
    $(this).removeClass("is-zoomed");
  });
}
