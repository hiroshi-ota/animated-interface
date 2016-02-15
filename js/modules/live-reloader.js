/*
 *  live-reloader
 *    :reloader - reloads page content without reloading the page
 *    :stateHelper - sets state of window.history
 */

var reloader = (function () {

  var $reloader = $(document.getElementById('main-container')),
      links = $('.reloader-link');

  var loadContent = function (target) {
    $reloader.animate({
      opacity: 0
    }, 150, function() {
      $reloader.load(target);
      $reloader.animate({opacity: 1}, 300);
    });
  };

  var setContext = function(target) {
    document.title = target.text;

    stateHelper.setActualState(target);
    console.log(window.history);
  };

  var refreshScripts = function() {
    location.reload();
  };

  links.on('click', function (e) {
    e.preventDefault();

    loadContent('..' + this.pathname);
    setContext(this);
  });

  return {
    loadContent: loadContent
  }
}());


var stateHelper = (function() {

  var states = {
    prev: '',
    act: ''
  };

  var setActualState = function(target) {
    window.history.pushState({"content": '..' + target.pathname}, '', target.text);
  };

  function getStates() {
    return states;
  }

  $(window).on('popstate', function() {
    if(history.state) {
      reloader.loadContent(history.state.content);
    }
  });

  return {
    historyStates: getStates,
    setActualState: setActualState
  }
}());