PagesControllers.controller('NewMaterialCtrl', ['$scope', '$http', '$location',
  function($scope, $http, $location) {
    $scope.name = '';
    $scope.type = 'text';
    $scope.src = '';
    $scope.html = '';

    $scope.preview = function() {
      $http.post('/api/materials/preview', {src: $scope.src})
        .then(function(response) {
          $scope.html = response.data;
        });
    };

    $scope.add = function() {
      $http.put('/api/materials', {
        name: $scope.name,
        type: $scope.type,
        src: $scope.src
      }).then(function(response) {
        $location.path('/mymaterials');
      });
    }
  }
]);