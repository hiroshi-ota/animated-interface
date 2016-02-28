(function (window) {

  'use strict';

  var pluginName = 'pageModule',
  defaults = {
  };

  function PageModule(element, options) {
    element instanceof jQuery ?
      this.element = element :
      this.element = $(element);
      this.parent = this.element.parent() || window;

    this.settings = $.extend({}, defaults, options);
    this.init();

    this.remove = function() {
      element.remove();
      console.log('test');
    }
  }


  PageModule.prototype = {

    init: function () {
      var that = this,
          element = this.element;

      that.setSize();
    },

    setSize: function() {
      var that = this,
          width = this.parent.innerWidth(),
          height = this.parent.innerHeight();

      //that.element.css({
      //  width: width,
      //  height: height
      //})
    },

    remove: function() {
      var that = this;

      $(that).remove();
    }
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
  var home = $('#home-container').pageModule().css({backgroundColor: 'green'});
  var modules = $('#modules-container').pageModule().css({backgroundColor: 'blue'});

  console.log(home.data('pageModule'));
  console.log(modules.data('pageModule'));

});
