/*
 *
 *  check-background
 */

modules.checkBackground = (function() {

  var colors = {
    light: 'grey',
    dark: 'black'
  };

  var checkBackground = function() {

    var elem = false,
        bgs = false;

    var init = function (element, backgrounds) {

      elem = element;
      bgs = backgrounds;

      bgs.each(function (i, elem) {
        elem.isDark = isDark($(elem).css('backgroundColor'));
      });

      eventHandlers();
    };

    var eventHandlers = function () {
      $(window).scroll($.throttle(300, function(){checkPosition()}));
    };

    var checkPosition = function () {
      elem.offset().top > 200 ?
        changeColor() : '';
    };

    var changeColor = function () {
      elem.children().each(function(i, element) {
        $(element).css({color: 'black'});
      });
    };

    var isDark = function (color) {
      var rgb = toRgb(color);
      return (rgb.r * 299 + rgb.g * 578 + rgb.b * 114) / 1000 < 128;
    };

    var toRgb = function (color) {

      color = color.split("(")[1].split(")")[0].split(',');

      return {
        r: color[0],
        g: color[1],
        b: color[2]
      };

    };

    var isLight = function (rgb) {
      return !isDark(rgb)
    };

    return {
      init: init
    }
  };

  return checkBackground().init;

}());