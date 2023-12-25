document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    const logo = document.querySelector(".navbar-brand");
    const contactLink = document.querySelector(".contact");

    navbarToggler.addEventListener("click", function () {
        if (navbarCollapse.classList.contains("show")) {
            navbarCollapse.classList.remove("show");
            logo.style.display = "block"; 
            contactLink.style.display = "block"; 
        } else {
            navbarCollapse.classList.add("show");
            logo.style.display = "none"; 
            contactLink.style.display = "none"; 
        }
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