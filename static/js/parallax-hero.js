$(document).ready(function(){
  $(window).scroll(function(e){
    parallax();
  });

  function hero(scrolled){
    $('#hero').css('top',-(scrolled*0.0315)+'rem');
    $('#hero2').css('top',-((scrolled-2700)*0.0315)+'rem');
    $('#hero > h1').css('top',-(scrolled*-0.005)+'rem');
    $('#hero > h1').css('opacity',1-(scrolled*.00175));
  }

  var heroHeight = $('#hero').css('height').replace('px','');

  function easeInHeader(scrolled){
    $('#header-title').css('opacity', ((scrolled - heroHeight)*.00175));
    $('header').css('background-color', "rgb(255,255,255,"+((scrolled - heroHeight)*.00175)+")");
  }

  function parallax(){
    var scrolled = $(window).scrollTop();
    hero(scrolled);
    easeInHeader(scrolled);
  };
});