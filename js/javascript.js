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