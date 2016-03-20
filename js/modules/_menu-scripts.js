modules.menuScripts = (function() {

  var $menu = $('header'),
      $sideMenu = $('.side-menu'),
      mainMenuHeight = $menu.height();


    $(window).on('scroll',  $.throttle(200, function() {

      $(window).scrollTop() > mainMenuHeight ?
        modules.menuAnimateToSideMenu($menu, 'a', $sideMenu) :
        modules.sideMenu.hide();
    }));

}());