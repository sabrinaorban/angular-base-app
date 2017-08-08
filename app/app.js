angular.module('App', ['ui.router','slickCarousel', 'angular-preload-image', 'ui.router.router', 'vcRecaptcha'])
.controller( 'AppCtrl', ['$rootScope', '$scope', '$location', function ( $rootScope, $scope, $location) {
$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    window.scrollTo(0, 0);

});
  $scope.navOpen = false;
  $scope.toggleNav = function(){
    $scope.navOpen = !$scope.navOpen;
      
  };
  $('body').on('click','.close-menu', function(){
    $scope.navOpen = false;
    $scope.$apply();
  });


}])

;