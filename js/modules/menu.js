/*
 *  menu header
 */

(function menu() {

  var $mainElem = $('.elem');

  if($mainElem.children().length < 1){
    setTimeout(function() {
      menu();
      return false;
    },100)
  }

  $mainElem.on('mouseover', function(elem){
    console.log('najezdzam');
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