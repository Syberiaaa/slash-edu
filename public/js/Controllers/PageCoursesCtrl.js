PagesControllers.controller('CoursesCtrl', ['$scope', '$http',
  function($scope, $http) {
    $scope.courses = [];

    $http.get('/api/courses', function(res) {
      $scope.courses = res.data;
    });
  }
]);