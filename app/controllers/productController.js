angular.module('App').controller('ProductsController', [
  '$scope', function ($scope) {
    $scope.download = function(resource){
      window.open(resource);
    }
    
  }
]);