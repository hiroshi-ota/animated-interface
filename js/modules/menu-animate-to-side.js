modules.menuAnimateToSideMenu = function(menu, elementsSelector, sideMenu) {

  var $menu = $(menu),
      menuElements = $menu.find(elementsSelector);

  modules.sideMenu.show(sideMenu, menuElements);

};