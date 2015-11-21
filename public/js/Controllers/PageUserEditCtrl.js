PagesControllers.controller('UserEditCtrl',
  ['$scope', '$http', '$routeParams', '$location',
  function($scope, $http, $routeParams, $location) {
    $scope.userId = $routeParams.userId;
    $scope.newPassword = '';
    $scope.name = '';
    $scope.email = '';
    $scope.role = '';

    $http.get('api/users/' + $scope.userId).then(function(response) {
      $scope.name = '' + response.data.name;
      $scope.email = response.data.email;
      $scope.role = response.data.role;
    });

    $scope.save = function() {
      var edUser = {};
      edUser.email = $scope.email;
      edUser.name = $scope.name;

      if ($scope.newPassword === '') {
        edUser.password = undefined;
      } else {
        edUser.password = $scope.newPassword;
      }

      edUser.role = $scope.role;
      $http.post('api/users/' + $scope.userId, edUser)
        .then(function(response) {
        });
      $location.path('/users');
    };

    $scope.delete = function() {
      $http.delete('api/users/' + $scope.userId)
        .then(function(response) {
        });
      $location.path('/users');
    };
  }
]);
