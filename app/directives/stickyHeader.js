angular.module( 'App' )
    .directive('stickyHeader', function() {
        return {
            link: function(scope, element, attrs) {

               $(window).scroll(function(){
                    var sticky = $(element[0]);
                        scroll = $(window).scrollTop();

                    if (scroll >= 15) {
                        sticky.addClass('fixed');
                        $('body').addClass('sticky');
                    } else {
                        sticky.removeClass('fixed');
                        $('body').removeClass('sticky');
                    }
                });
                scope.$apply;
               
                
            }
        };
    });