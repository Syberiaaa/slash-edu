PagesControllers.controller('MaterialEditCtrl', ['$scope', '$http', '$location', '$routeParams',
  function($scope, $http, $location, $routeParams) {
    $scope.name = '';
    $scope.type = 'text';
    $scope.src = '';
    $scope.html = '';

    $scope.materialId = $routeParams.materialId;

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
        $location.path('/materials');
      });
    }
      $('#myTab a').click(function (e) {
          e.preventDefault()
          $(this).tab('show')
      })
  }
]);