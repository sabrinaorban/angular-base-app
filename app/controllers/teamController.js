angular.module('App').controller('TeamController', [
  '$scope', '$window', function ($scope, $window) {

//  This can be replaced with a directive;
   $(document).ready(function(){
      var wrap = $('.test');
     
      $(window).on("scroll", function(e) {
        var scrollTop = $(window).scrollTop();
    
        if ($(window).scrollTop() > 88) {
          wrap.addClass("fixed");
        } else {
          wrap.removeClass("fixed");
        }
        
      });
   });
    
        
  
    
  }
]);