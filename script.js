// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the main element

  // Add the "fade-in" class to apply the animation
  setTimeout(() => {
    const main = document.querySelector(".main");
    main.style.filter = "blur(0px)";
    main.style.opacity = "1";
  }, 1000);
});
