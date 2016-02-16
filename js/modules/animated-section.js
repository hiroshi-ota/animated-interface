
/*
 *  animated section
 *  @animated-section.js
 */

var animatedSection = (function() {

  var sections;

  $(window).on('container-loaded', init);

  function init() {
    sections = $('#main-container > .section');
    animateSection();
  }

  function animateSection() {
    sections.each(function(i) {
      console.log(this);
      $(this).animate({
        opacity: 1
      }, (500*i) )
    });

    setTimeout(function() {
      sections.each(function(i) {
        console.log(isInViewport.watch(this));
      });
    })
  }

  function isSectionVisible() {

  }

 }());