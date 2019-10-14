// initialize animation
new WOW().init();

// initialize lazy load
var myLazyLoad = new LazyLoad({
  elements_selector: '.lazy'
});

// a mobile main menu
var opened = false;

$('.header__hood--button').click(function() {
  (!opened) ? (
    $('.open, .close').toggle(),
    $('.header__hood--menu').slideDown(0)
  ) : (
    $('.open, .close').toggle(),
    $('.header__hood--menu').slideUp(0)
  );

  opened = !opened;
});
