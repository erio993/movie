let currentSlide = 0;

// Function to change slides
function changeSlide(direction) {
  const slides = document.querySelectorAll('.slide');
  slides[currentSlide].style.display = 'none'; // Hide current slide
  currentSlide = (currentSlide + direction + slides.length) % slides.length; // Update index
  slides[currentSlide].style.display = 'block'; // Show new slide
}
