/*
 *  live-reloader
 *    :reloads page content without reloading the page
 */

var reloader = (function () {

  var $reloader = $(document.getElementById('main-container')),
    target = '',
    links = $('.reloader-link'),
    location = window.location.origin;

  var loadContent = function (target) {
    $reloader.animate({
      opacity: 0
    }, 200, function() {
      $reloader.load('..' + target);
      $reloader.animate({opacity: 1});
    })


  };

  links.on('click', function (e) {
    e.preventDefault();
    loadContent($(this)[0].pathname);
  })
}());