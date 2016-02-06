/*
 *  menu header
 */

$(document).ready(function () {

  var $subMenu = $('.sub');
      $mainElem = $('.elem');


  $mainElem.on('mouseover', function(elem){
    var subMenu = $(this).find('.sub');
    var elements = subMenu.find('.sub-elem');
    elements.each(function(i, e){
      setTimeout(function(){
        $(e).stop().slideDown('normal');
      }, i * 100);
    });
  });

  $mainElem.on('mouseout', function(elem){
    var subMenu = $(this).find('.sub');
    var elements = subMenu.find('.sub-elem');
    elements.each(function(i, e){
      setTimeout(function(){
        $(e).stop().slideUp('normal');
      }, i * 100);
    });
  });

}());