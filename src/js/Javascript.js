document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
  
      });
    });
  
  });
  
  
  
  
  let slideIndex = 1;
      showSlides(slideIndex);
              
      function  plusSlides(n) {
          showSlides(slideIndex += n);
          console.log(1)
        }
        
      function currentSlide(n) {
          showSlides(slideIndex = n);
          console.log(2)
        }
        
      function showSlides(n) {
  
          let i;
          let slides = document.getElementsByClassName("container__slider-wrapper__slider__slide");
          let dots = document.getElementsByClassName("container__slider-wrapper__dot");
          if (n > slides.length) {slideIndex = 1}    
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
          }
          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
          }
          slides[slideIndex-1].style.display = "block";  
          dots[slideIndex-1].className += " active";
          console.log(3)
  
        }