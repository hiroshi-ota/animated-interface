/*
 *  dialog-box
 */

//TODO: add options: only inform (just OK)

var dialogBox = function (elem) {

  elem.nodeType ? elem = $(elem) : '';

  var dialog = undefined,
    overlay = undefined,

    options = $.extend({
      text: 'Are you sure?',
      btnOk: 'OK',
      btnCancel: 'Cancel',
      funcOk: false,
      funcCancel: false,
      url: false

    }, elem.data('dialogbox'));


  var init = function () {
    createDialog();
    renderDialog();
    eventListeners();
  };

  var createDialog = function () {
    dialog = $(document.createElement('div'));
    overlay = $(document.createElement('div'));

    dialog[0].className = 'dialogBox';
    dialog[0].innerHTML = createContent();

    overlay[0].className = 'darkOverlay';

    $('body').append(overlay, dialog);
  };

  var createContent = function () {
    var content =
      '<div class="content">' +
      '<p class="text">' + options.text + '</p>' +
      '<div class="btns">' +
      '<div class="btnOK">' + options.btnOk + '</div>' +
      '<div class="btnCancel">' + options.btnCancel + '</div>' +
      '</div></div>';

    return content;
  };

  var renderDialog = function () {
    dialog.css({display: 'block'});
    overlay.css({display: 'block'});

    setTimeout(function () {
      dialog.addClass('visible');
      overlay.addClass('visible');
    }, 20);

    return dialog;
  };

  var eventListeners = function () {
    dialog.find('.btnCancel')
      .on('click', function () {
        removeDialog();
      });

    dialog.find('.btnOk')
      .on('click', function () {
        if(options.url){
          window.location = options.url;
        } else if(options.funcOk) {
          options.funcOk();
        }
        removeDialog();
      });
  };

  var removeDialog = function () {
    dialog.removeClass('visible');
    overlay.removeClass('visible');

    dialog.remove();
    overlay.remove();
  };

  init();

};

$(document).ready(function () {
  $('.remove-link').on('click', function (e) {
    dialogBox(this);
  })
});
