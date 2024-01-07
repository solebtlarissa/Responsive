// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let corner = document.getElementsByClassName("corner");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   corner[slideIndex-1].className += " active";
// }


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
  sideScroll(carousel,'right',25,scroll,15);
  span2.style.background = 'black';
  span1.style.background = '#A8A8A8';

};
buttonLeft.onclick = function () {
  sideScroll(carousel,'left',25,scroll,15);
  span2.style.background = '#A8A8A8';
  span1.style.background = 'black';

};

function sideScroll(element,direction,speed,distance,step){
  scrollAmount = 0;
  var slideTimer = setInterval(function(){
      if(direction == 'left'){
          element.scrollLeft -= step;
      } else {
          element.scrollLeft += step;
      }
      scrollAmount += step;
      if(scrollAmount >= distance){
          window.clearInterval(slideTimer);
      }
  }, speed);
}

// var areas = document.querySelectorAll("area");
var circles = document.querySelectorAll(".circle");

  var cork = document.getElementById("cCircle");
  var bottle = document.getElementById("bCircle");
  var label = document.getElementById("lCircle");
  var wine = document.getElementById("wCircle");

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
