$(document).ready(function(){
  $(window).scroll(function(e){
    parallax();
  });

  var $hero = $('#hero');
  var $hero2 = $('#hero2');
  var $h1 = $('#hero > h1');
  var $hTitle = $('#header-title');
  var $header = $('header');

  function hero(scrolled){
    $hero.css('top',-(scrolled*0.0315)+'rem');
    $hero2.css('top',-((scrolled-2700)*0.0315)+'rem');
    $h1.css({
      'top':-(scrolled*-0.005)+'rem', 
      'opacity':1-(scrolled*.00175)
    });
  }

  var heroHeight = $hero.css('height').replace('px','');

  function easeInHeader(scrolled){
    var diff = scrolled - heroHeight;
    $hTitle.css('opacity', (diff*.00175));
    $header.css('background-color', "rgb(255,255,255,"+(diff*.00175)+")");
  }

  function parallax(){
    var scrolled = $(window).scrollTop();
    hero(scrolled);
    easeInHeader(scrolled);
  };
});