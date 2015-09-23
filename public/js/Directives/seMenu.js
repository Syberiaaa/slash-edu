slashEduApp.directive('seMenu', ['UserService',
  function(UserSerivce) {
    return {
      templateUrl : 'partials/menu.html',
      controllerAs : 'ctrl',
      controller : ['$scope', function($scope) {
        var user = UserSerivce.getUser();
        if (user.email) {
          $scope.email = user.email;
        }
      }]
    }
  }
]);