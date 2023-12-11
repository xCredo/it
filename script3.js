// Smooth scrolling to the target section with adjustable speed
function scrollToSection(event) {
  event.preventDefault(); // Prevent default behavior of anchor click
  const targetId = event.currentTarget.getAttribute("href"); // Get the target section ID from href attribute
  const targetSection = document.querySelector(targetId); // Find the target section element
  if (targetSection) {
      const targetPosition = targetSection.offsetTop; // Get the target section's position relative to the top of the page
    
      const scrollOptions = {
          top: targetPosition,
          behavior: "smooth" // Set the smooth scrolling behavior
      };

      // Adjust the scroll speed (change the value of `scrollTimingFunction`)
      // Available values: "linear", "ease", "ease-in", "ease-out", "ease-in-out"
      scrollOptions.scrollTimingFunction = "ease-in-out";

      window.scrollTo(scrollOptions);
  }
}

// Attach scrollToSection function to the anchor click event
const buttonCont = document.querySelector(".button_cont");
buttonCont.addEventListener("click", scrollToSection);