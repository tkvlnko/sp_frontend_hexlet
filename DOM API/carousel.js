export default () => {
    const carousels = document.querySelectorAll('.carousel-inner');
  
    carousels.forEach((carousel) => {
      const nextButton = carousel.nextElementSibling;
      const prevButton = nextButton.nextElementSibling;
  
      prevButton.addEventListener('click', () => {
        const currentSlide = carousel.querySelector('.active');
        const nextSlide = currentSlide.nextElementSibling || carousel.firstElementChild;
  
        currentSlide.classList.remove('active');
        nextSlide.classList.add('active');
      });
  
       nextButton.addEventListener('click', () => {
        const currentSlide = carousel.querySelector('.active');
        const prevSlide = currentSlide.previousElementSibling || carousel.lastElementChild;
  
        currentSlide.classList.remove('active');
        prevSlide.classList.add('active');
      });
    });
  }