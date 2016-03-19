Yo.add('utils', function () {

  var widgetMgr = function ($element, options, defaults, dataName, fn) {

    //console.log($element.data(dataName));
    $element.data(dataName) ?
      $element.data(dataName).options = $.extend({}, defaults, $element.data(dataName), options) :
      $element.data(dataName, {options: $.extend({}, defaults, options)});

    fn($element, $element.data(dataName).options);
  };

  var makeGlobal = function () {

    var args = Array.prototype.slice.call(arguments);

    args.forEach(function (fn) {

      $.fn[fn.name] = function (options) {
        return fn(this, options)
      }

    });
  };

  return {
    widgetMgr: widgetMgr,
    makeGlobal: makeGlobal
  }
});