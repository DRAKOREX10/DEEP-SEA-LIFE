document.addEventListener('DOMContentLoaded', function () {
  const slides = document.getElementById('slides');
  const totalSlides = slides.children.length;
  let currentIndex = 0;

  function showSlide(index) {
    const offset = -index * 100;
    slides.style.transform = `translateX(${offset}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  setInterval(nextSlide, 4000); 
});

