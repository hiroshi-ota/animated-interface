(function (window) {

  'use strict';

  var pluginName = 'pageModule',
    defaults = {

    };

  function PageModule(element, options) {

  }


  PageModule.prototype = {


  };

  $.fn[pluginName] = function(options) {
    this.each(function() {
      if(!$.data(this, pluginName)) {
        $.data(this, pluginName, new PageModule(this, options));
      }
    });
    return this;
  }
}(window));

$(document).ready(function() {

});