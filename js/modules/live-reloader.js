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
      console.log(target);
      $reloader.load(target);
      $reloader.animate({opacity: 1}, 300);
    });
  };

  var setContext = function(target) {
    document.title = target.text;

    stateHelper.setActualState(target);
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

  function setActualState(target) {
    window.history.pushState({"content": '..' + target.pathname}, '', target.text);
  }

  function preventRefresh(e) {
    return false;

    //return (function() {
    //  window.history.pushState({"content":'../animated-interface/pages/home.html'}, '', 'index.html');
    //  $(document).onload(function() {
    //    alert('dziala');
    //  });
    //  return 'Czy jesteś pewien że checsz opuścić tą stronę?';
    //}());
  }

  $(window).on('popstate', function(e) {
    history.state ?
      reloader.loadContent(history.state.content) : '';
  });

  (function() {
    window.history.pushState({"content":'../animated-interface/pages/home.html'}, '', 'index.html');
    reloader.loadContent(window.history.state.content);
  }());

  window.onbeforeunload = preventRefresh;

  return {
    setActualState: setActualState,
    preventRefresh: preventRefresh
  }
}());