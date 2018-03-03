/*jslint browser: true*/
/*global $, jQuery, alert*/

// Custom_js
// Back_to_top_js
// Material_js
// Bootstrap_js
// Sidebar_js
// Burder_js

//**********************************
//**********************************
//**********************************   Custom_js
//**********************************
//**********************************
$(document).ready(function() {
  Array.prototype.forEach.call(document.querySelectorAll('.mdl-card__media'), function(el) {
    var link = el.querySelector('a');
    if (!link) {
      return;
    }
    var target = link.getAttribute('href');
    if (!target) {
      return;
    }
    el.addEventListener('click', function() {
      location.href = target;
    });
  });


  // Auto hidden share/tags popup block
  $('#article-fuctions-share-button, #article-functions-viewtags-button').click(function() {
    $('.is-visible').removeClass('is-visible');
  });

  // Click anywhere to close the FAB menu
  $(document).click(function() {
    if ($("#prime").hasClass("is-visible")) {
      $("#prime").click();
    }
  });
  $("#prime").click(function(e) {
    e.stopPropagation();
    return false;
  });
});

//**********************************
//**********************************
//**********************************   Sidebar_js
//**********************************
//**********************************

$(document).ready(function() {
  var overlay = $('.sidebar-overlay');

  $('.sidebar-toggle').on('click', function() {
    var sidebar = $('#sidebar');
    sidebar.toggleClass('open');
    if (sidebar.hasClass('sidebar-fixed-left') && sidebar.hasClass('open')) {
      overlay.addClass('active');
      $('.MD-burger-layer').remove('MD-burger-line');
      $('.MD-burger-layer').add('MD-burger-arrow');
      document.documentElement.style.overflow = "hidden";
    } else {
      overlay.removeClass('active');
      $('.MD-burger-layer').removeClass('MD-burger-arrow');
      $('.MD-burger-layer').addClass('MD-burger-line');
      document.documentElement.style.overflow = "auto";
    }
  });

  overlay.on('click', function() {
    $(this).removeClass('active');
    $('#sidebar').removeClass('open');
    $('.MD-burger-layer').removeClass('MD-burger-arrow');
    $('.MD-burger-layer').addClass('MD-burger-line');
    document.documentElement.style.overflow = "auto";
  });

});

// Sidebar constructor
$(document).ready(function() {
  var sidebar = $('#sidebar');
  var sidebarHeader = $('#sidebar .sidebar-header');
  var sidebarImg = sidebarHeader.css('background-image');
  var toggleButtons = $('.sidebar-toggle');

  // Hide toggle buttons on default position
  toggleButtons.css('display', 'initial');

  // Sidebar position
  $('#sidebar-position').change(function() {
    var value = $(this).val();
    sidebar.removeClass('sidebar-fixed-left').addClass(value).addClass('open');
    if (value == 'sidebar-fixed-left') {
      $('.sidebar-overlay').addClass('active');
    }
  });
});

//Add JQuery animation to bootstrap dropdown elements.
(function($) {
  var dropdown = $('.dropdown');

  // Add slidedown animation to dropdown
  dropdown.on('show.bs.dropdown', function(e) {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });

  // Add slideup animation to dropdown
  dropdown.on('hide.bs.dropdown', function(e) {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  });
})(jQuery);


(function(removeClass) {

  jQuery.fn.removeClass = function(value) {
    if (value && typeof value.test === "function") {
      for (var i = 0, l = this.length; i < l; i++) {
        var elem = this[i];
        if (elem.nodeType === 1 && elem.className) {
          var classNames = elem.className.split(/\s+/);

          for (var n = classNames.length; n--;) {
            if (value.test(classNames[n])) {
              classNames.splice(n, 1);
            }
          }
          elem.className = jQuery.trim(classNames.join(" "));
        }
      }
    } else {
      removeClass.call(this, value);
    }
    return this;
  }

})(jQuery.fn.removeClass);


//**********************************
//**********************************
//**********************************   Burder_js
//**********************************
//**********************************

(function() {

  'use strict';

  var burger = document.querySelector('.MD-burger-icon');

  if (burger !== null)
    burger.addEventListener(
      'click',
      function() {
        var child;

        child = this.childNodes[0].classList;

        if (child.contains('MD-burger-arrow')) {
          child.remove('MD-burger-arrow');
          child.add('MD-burger-line');
        } else {
          child.remove('MD-burger-line');
          child.add('MD-burger-arrow');
        }

      });

})();