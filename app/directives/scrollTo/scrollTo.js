angular.module( 'App' )
    .directive('scrollToSection', function() {
        return {
            link: function(scope, element, attrs) {
                var value = attrs.scrollToSection;
                element.on('click', function() {
                    scope.$apply(function() {
                        var selector = "[scroll-section='"+ value +"']";
                        var element = jQuery(selector);
                        
                        if(element.length) {
                            $('html,body').animate({
                                scrollTop: element[0].offsetTop - 79},
                            'slow');
                        }
                    });
                });
                
            }
        };
    });