angular.module('App').directive('stickyBar',['$window', function($window) {
    'use strict';

    return {
        restrict   : 'E',
        replace    : true,
        scope      : {
            title: "@"
        },
        
        template: '<h5 class="h5">{{title}}</h5>',

        link : function(scope, element, attrs) {
            var elementOffset = $(element).offset().top;
            $(window).on("scroll", function(e) {
                var scrollTop = $(window).scrollTop(),
                    headerHeight  = $('.header').height() + 43 + ($('.fixed-bar').height() + 40 || 0),         
                    distance      = (elementOffset - scrollTop);

                if(distance <= headerHeight) {
                    $(element).addClass('fixed-bar');
                } else {
                    $(element).removeClass('fixed-bar');
                
                }
            });
           

        }

    };

}]);