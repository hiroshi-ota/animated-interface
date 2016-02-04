
/*
 *  animated jLetters
 */

(function ($) {
  var jLetters = function (element, options) {
    /*INITIALISATION*
     //         - initialise jLetters
     //         - set params & element
     //         @element: element on which jLetters is working
     //         @options: list of settings passed by user
     //     */
    var elem = $(element),
      obj = this,
      text = $(elem).text(),
      params = $.extend({
        precision: '',
        animationDuration: 50,
        animationSpeed: 1000,
        separate: ' '
      }, options || {});

    //Auxiliary functions
    var splitWords = function () {
      var words = [];
      words.push(text.split(' '));
      return words[0];
    };

    var splitChars = function (word) {
      var char = [];
      if (typeof word !== 'string') {
        word = text;
      }
      char.push(word.split(''));
      return char[0];
    };

    var toSpan = function (array) {
      var plain = '';
      for (var ae in array) {
        plain += '<span>' + array[ae] + '</span>';
      }
      $(elem)[0].innerHTML = plain;
    };

    var toSpanArray = function (array) {
      var spans = [];
      for (var elem in array) {
        spans.push('<span>' + array[elem] + '</span>');
      }
      return spans;
    };

    var animate = function (child, index) {
      setTimeout(
        function () {
          $(child).animate({
            opacity: 1
          }, params.animationSpeed)
        }, params.animationDuration + (params.animationDuration * index)
      )
    };

    //Show results
    var show = function () {
      params.precision === 'words' ?
        toSpan(splitWords()) : toSpan(splitChars());

      var children = $(elem).children();
      $(children).each(function () {
        $(this).css({
          opacity: 0
        });
      });
      for (var i = 0; i < children.length; i++) {
        animate(children[i], i)
      }
    };
    show();
  };

  $.fn.jLetters = function (options) {
    return this.each(function () {
      var element = $(this);
      //Return early if element has a instance of jLetters
      if (element.data('jLetters')) return;
      var api = new jLetters(this, options);
      //Store plugin object in this element's data
      element.data('jLetters', api);
    });

  };

  //Exception control:
  function ExceptionLog(message) {
    this.name = 'jLetters Error';
    this.message = message;
  }

  ExceptionLog.prototype = Error.prototype;

}(jQuery));
