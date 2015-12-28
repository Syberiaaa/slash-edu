PagesControllers.controller('GoCtrl', ['$scope', '$http', '$location',
  function($scope, $http, $location) {
    $scope.userCourses = [];

    $http.get('/api/userCourses')
      .then(function(res) {
        $scope.userCourses = res.data;
      });
  }
]);