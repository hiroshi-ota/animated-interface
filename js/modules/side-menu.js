modules.sideMenu = (function() {

  var $sideMenu = false,
      $border = false;

  var show = function(sideMenu, elements) {

    var elem = elements.clone();
        $sideMenu = sideMenu;
        !$border ? $border = $sideMenu.find('.border') : '';

    $sideMenu.children().length < 2 ? animateShow(elem) : '';

    // if smooth scroll is dealing with page navigation
    modules.smoothScroll.reinit();
  };

  var hide = function() {
    if($sideMenu) {
      $sideMenu.children(':not(.border)').remove();
      manageBorder();
      $sideMenu = false;
    }
  };

  var animateShow = function(elements) {

    manageBorder();
    addElements(elements);
  };

  var manageBorder = function() {
    if($border){
      $border.width() > 0 ?
        $border.css({width: 0}) : $border.css({width: $sideMenu.width()});
    }
  };

  var addElements = function(elements) {
    elements.each(function(i, e) {
      setTimeout(function() {
        $sideMenu.append(e);
      },100 * i);
    })
  };

  return {
    show: show,
    hide: hide
  }
}());
