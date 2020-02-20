$(document).ready(function () {

  $('.js--wp-1').waypoint(function (direction) {
    $('.js--wp-1').addClass('animated moveInLeft');
  }, {
    offset: '50%'
  });

  $('.js--wp-2').waypoint(function (direction) {
    $('.js--wp-2').addClass('animated fadeInUp');
  }, {
    offset: '40%'
  });

  $('.js--wp-3').waypoint(function (direction) {
    $('.js--wp-3').addClass('animated moveInRight');
  }, {
    offset: '50%'
  });

});