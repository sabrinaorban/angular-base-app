angular.module('App').controller('TabsController', [
  '$scope', function ($scope) {
   $scope.tabs = [
       {
            slug: 'dashboard',
            title: "Dashboard",
            content: "Your Dashboard"
        }, 
        {
            slug: 'room-1',
            title: "Room 1",
            content: "Dynamic content 1"
        }, 
        {
            slug: 'room-2',
            title: "Room 2",
            content: "Dynamic content 2"
        }
    ];
    $scope.onTabSelected = function(tab) {
        var route;
        if (typeof tab === 'string') {
        switch (tab) {
            case 'dashboard':
            route = tab;
            break;
            default:
            route = 'products/' + tab;
            break;
        }
        }
        $location.path('/' + route);
    };

  }
]);