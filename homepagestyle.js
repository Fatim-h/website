var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
   
  }

  let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
}


// JavaScript to handle manual sliding for partner slides

let partnerIndex = 0; // Global variable to track current partner slide index
const partnerSlides = document.querySelectorAll('.partner_slider .partner'); // Select all partner slides

// Function to show the current partner slide based on partnerIndex
function showPartnerSlides() {
    // Loop through each partner slide and set its display style
    partnerSlides.forEach((partner, index) => {
        if (index === partnerIndex) {
            partner.style.display = 'inline-block'; // Display the current partner slide
        } else {
            partner.style.display = 'none'; // Hide all other partner slides
        }
    });
}

// Function to move to the next partner slide
function nextPartnerSlide() {
    partnerIndex++; // Increment partner slide index
    if (partnerIndex >= partnerSlides.length) {
        partnerIndex = 0; // Wrap around to the first partner slide if at end
    }
    showPartnerSlides(); // Show the updated partner slide
}

// Function to move to the previous partner slide
function prevPartnerSlide() {
    partnerIndex--; // Decrement partner slide index
    if (partnerIndex < 0) {
        partnerIndex = partnerSlides.length - 1; // Wrap around to the last partner slide if at beginning
    }
    showPartnerSlides(); // Show the updated partner slide
}

// Event listeners for previous and next buttons
document.querySelector('.partner_slider_prev').addEventListener('click', prevPartnerSlide);
document.querySelector('.partner_slider_next').addEventListener('click', nextPartnerSlide);

// Initial display of partner slides
showPartnerSlides();
