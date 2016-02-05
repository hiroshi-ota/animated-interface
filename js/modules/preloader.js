/*
 *
 *  site pre-loader
 */

(function(){
  var loader = $('.loader'),
      welcome = document.createElement('h1');

  welcome.innerHTML = 'Welcome';
  welcome.className = 'welcome';
  loader.append(welcome);

  $(welcome).jLetters({
    animationSpeed: 600
  });

  $(window).load(function() {
    loader.fadeOut('slow');
  });
}());

