'use strict';

(function(module) {
  const aboutView = {}; 
  aboutView.init = () => {
    $('#create-user').hide();
    $('#login').hide();
    $('#profile').hide();
    $('#login').hide();
    $('#about-us').show();
  }
  module.aboutView = aboutView;
})(window);