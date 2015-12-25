PagesControllers.controller('GoCtrl', ['$scope', '$http', '$location',
  function($scope, $http, $location) {
    $scope.userCourses = [];

      $scope.clickcourse = function(courseId){
        //userCourse.location()
              $location.path('/go/' + courseId);


      };


    $http.get('/api/userCourses')
      .then(function(res) {
        $scope.userCourses = res.data;
      });



  }
]);