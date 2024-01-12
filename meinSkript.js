let currentIndex = 0;
const itemsPerPage = 3;
const totalImages = document.querySelectorAll(".carousel-div").length;
const container = document.querySelectorAll("#carousel-container");
const  divWidth = document.getElementsByClassName("carousel-div")[0].clientWidth;


function updateCarousel() {
  const carousel = document.getElementById("image-carousel");
  const offset = -currentIndex * (divWidth +200);

  carousel.style.transform = `translateX(${offset}px)`;
}

function prevSlide() {
  currentIndex = (currentIndex - itemsPerPage + totalImages) % totalImages ;
  updateCarousel();
}

function nextSlide() {
  currentIndex = (currentIndex + itemsPerPage) % totalImages;

  updateCarousel();
}

/*
let slideIndex = 0;
showSlides();

// Next/previous controls
function plusSlides(n) {
  slideIndex += n * 3; // Ändern Sie den Index um die Anzahl der gleichzeitig angezeigten Bilder
  showSlides();
}

// Thumbnail image controls
function currentSlide(n) {
  slideIndex = n * 3; // Ändern Sie den Index um die Anzahl der gleichzeitig angezeigten Bilder
  showSlides();
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = slideIndex; i < slideIndex + 3 && i < slides.length; i++) {
    slides[i].style.display = "block";
  }
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - (slides.length % 3);
  }
}
*/


// ------------------------------------------
const buttonRight = document.getElementById('btn2');
const span2  = document.getElementById('span2')
const buttonLeft = document.getElementById('btn1');
const span1 = document.getElementById('span1')

var carousel = document.getElementById('carousel');
var body = document.querySelector('body');
let swidth = body.scrollWidth ;
let cwidth = carousel.scrollWidth ;
let scroll = cwidth-swidth;
let step = scroll;

buttonRight.onclick = function () {
  carousel.scrollLeft += 300;

  // sideScroll(carousel,'right',25,scroll,10);
  span2.style.background = 'black';
  span1.style.background = '#A8A8A8';
};
buttonLeft.onclick = function () {
  carousel.scrollLeft -= 300;

  // sideScroll(carousel,'left',25,scroll,15);
  span2.style.background = '#A8A8A8';
  span1.style.background = 'black';

};

// function sideScroll(element,direction,speed,distance,step){
//   scrollAmount = 0;
//   var slideTimer = setInterval(function(){
//       if(direction == 'left'){
//           element.scrollLeft -= step;
//       } else {
//           element.scrollLeft += step;
//       }
//       scrollAmount += step;
//       if(scrollAmount >= distance){
//           window.clearInterval(slideTimer);
//       }
//   }, speed);
// }

// var areas = document.querySelectorAll("area");
var circles = document.querySelectorAll(".circle");

  var cork = document.getElementById("cCircleOverlay");
  var bottle = document.getElementById("bCircleOverlay");
  var label = document.getElementById("lCircleOverlay");
  var wine = document.getElementById("wCircleOverlay");

  function togglCircle(circleId) {
    var targetElement = document.getElementById(circleId);
    if (targetElement) {
      console.log("Target:" +targetElement);
      targetElement.classList.toggle('visible');

    }

    return false;
  }

  function toggleVisibility(elementId, circleId) {
    var elements = document.querySelectorAll('.visible');
    elements.forEach(function(el) {
      el.classList.remove('visible');
    });
  
    var targetElement = document.getElementById(elementId);
    if (targetElement) {
      console.log("Target Element:", targetElement);
      targetElement.classList.toggle('visible');
    }
  
    var circleElement = document.getElementById(circleId);
    if (circleElement) {
      console.log("Circle Element:", circleElement);
      circleElement.classList.toggle('visible');
    }
  
    return false;
  }
  
  cork.onclick = function () {
    toggleVisibility("cork", "cCircleOverlay");
    return false;
  };
  
 
  bottle.onclick = function () {
    toggleVisibility("bottle", "bCircleOverlay");
    return false;

  };
  
  label.onclick = function () {
    toggleVisibility("label", "lCircleOverlay");
    return false;

  };
  
  wine.onclick = function () {
    toggleVisibility("wine", "wCircleOverlay");
    return false;

  };
// ------------------------------------------
