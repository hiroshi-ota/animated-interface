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

    stateHelper.setActualState('..' + target.pathname);
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
  },
      i = 0;

  var setActualState = function(actual) {

    var state = generateState();
    window.history.pushState({"state": target.pathname + '.html'}, target.text, target.text + '.html');
    //!!states.act ? states.prev = states.act : '';
    //states.act = actual;
  };

  function getStates() {
    return states;
  }

  function generateState() {
    return 'state' + i;
  }

  $(window).on('hashchange', function() {
    reloader.loadContent(states.prev);
  });
  //document.on('reloader-state-change', function() {
  //  var state = document.getElementById('main-container');
  //  setActualState(state.innerHTML);
  //
  //});

  return {
    historyStates: getStates,
    setActualState: setActualState
  }
}());