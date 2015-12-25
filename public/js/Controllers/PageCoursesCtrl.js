PagesControllers.controller('CoursesCtrl', ['$scope', '$http', '$location',
  function($scope, $http, $location) {
    $scope.courses = [];

    $http.get('/api/courses').then(function(res) {
      $scope.courses = res.data;
      console.log($scope.courses);
    });


    $scope.deleteCourse = function(courseId) {
      $http.delete('/api/courses/' + courseId)
        .then(function() {
          $location.path('/courses');
        });
      $http.get('/api/courses').then(function(res) {
        $scope.courses = res.data;
      });

    };
  }
]);