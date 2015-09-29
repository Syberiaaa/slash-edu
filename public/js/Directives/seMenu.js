slashEduApp.directive('seMenu', ['UserService', '$location',
  function(UserSerivce, $location) {
    return {
      templateUrl : 'partials/menu.html',
      controllerAs : 'ctrl',
      controller : ['$scope', function($scope) {
        var user = UserSerivce.getUser();
        if (user.email) {
          $scope.email = user.email;
        }

        $scope.go = function(path) {
          $location.path(path);
        };
        $scope.goUrl = function(path) {
          $location.url(path);
        };
      }]
    }
  }
]);