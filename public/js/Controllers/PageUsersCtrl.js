PagesControllers.controller('UsersCtrl', ['$scope', '$http',
  function($scope, $http) {
    $scope.users = [];

    $http.get('/api/users')
        .then(function(res){
          $scope.users = res.data;
        })
    $scope.user = function() {
      $http.put('/api/users', {
      }).then(function(response) {
        $location.path('/users/'+user._id);
      });
    }
  }
])