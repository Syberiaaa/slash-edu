PagesControllers.controller('RegisterCtrl', ['$scope', '$http', '$location',
  function($scope, $http, $location) {
    $scope.name = '';
    $scope.email = '';
    $scope.password = '';

    $scope.user = function() {
      $http.put('/api/users', {
        name: $scope.name,
        email: $scope.email,
        password: $scope.password
      }).then(function() {
        $location.path('/login');
      });
    };
  }
]);
