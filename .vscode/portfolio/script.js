console.log("Portfolio loaded");
aboutMe = document.querySelector("#about");
aboutMe.addEventListener("mouseover", function() {
    aboutMe.style.fontWeight = "bold";
});
aboutMe.addEventListener("mouseleave", function() {
    aboutMe.style.fontWeight = "normal";
});

myProjects = document.querySelector("#projects");
myProjects.addEventListener("mouseover", function() {
    myProjects.style.fontWeight = "bold";
});
myProjects.addEventListener("mouseleave", function() {
    myProjects.style.fontWeight = "normal";
});

contactMe = document.querySelector("#contact");
contactMe.addEventListener("mouseover", function() {
    contactMe.style.fontWeight = "bold";
});
contactMe.addEventListener("mouseleave", function() {
    contactMe.style.fontWeight = "normal";
});


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}
