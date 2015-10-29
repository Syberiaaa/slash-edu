PagesControllers.controller('UsersCtrl', ['$scope', '$http',
  function($scope, $http) {
    $scope.users = [];
    $http.get('/api/users', function(res) {
      console.log(res)
      $scope.users = res.data;
    });
  }
]);