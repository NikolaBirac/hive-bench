$(document).ready(function () {

  $('.js--card-right').waypoint(function (direction) {
    $('.js--card-right').addClass('animated moveInLeft');
  }, {
    offset: '50%'
  });

  $('.js--card-up').waypoint(function (direction) {
    $('.js--card-up').addClass('animated fadeInUp');
  }, {
    offset: '40%'
  });

  $('.js--card-left').waypoint(function (direction) {
    $('.js--card-left').addClass('animated moveInRight');
  }, {
    offset: '50%'
  });

  $('.form').waypoint(function (direction) {
    $('.form').addClass('animated moveInRight');
  }, {
    offset: '50%'
  });

  $('.js--service-left').waypoint(function (direction) {
    $('.js--service-left').addClass('animated moveInRight');
  }, {
    offset: '75%'
  });

  $('.js--service-left2').waypoint(function (direction) {
    $('.js--service-left2').addClass('animated moveInRight');
  }, {
    offset: '75%'
  });

  $('.js--service-right').waypoint(function (direction) {
    $('.js--service-right').addClass('animated moveInLeft');
  }, {
    offset: '75%'
  });

});


function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}