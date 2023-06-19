// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the main element
  const main = document.querySelector(".main");

  // Add the "fade-in" class to apply the animation
  setTimeout(() => main.classList.add("fade-in"), 1000);
});
