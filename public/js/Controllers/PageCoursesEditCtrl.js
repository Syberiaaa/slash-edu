PagesControllers.controller('CoursesEditCtrl', ['$scope', '$http', '$location', '$routeParams',
  function($scope, $http, $location, $routeParams) {
    $scope.courseMaterials = [];
    $scope.name = '';
    $scope.courseId = $routeParams.courseId;

    $http.get('/api/materials')
      .then(function(response) {
        $scope.materials = response.data;

        if ($scope.courseId !== 'new') {
          $http.get('/api/courses/' + $scope.courseId)
            .then(function(res) {
              $scope.name = res.data.name;
              $scope.courseMaterials = res.data.materials;

              var courseMaterialsIDs = $scope.courseMaterials.map(function(m) {return m._id});

              $scope.materials = $scope.materials.filter(function(m) {
                return courseMaterialsIDs.indexOf(m._id) < 0;
              });
            });
        }
      });

    $scope.addCourseMaterial = function(material) {
      $scope.courseMaterials.push(material);
      var i = $scope.materials.indexOf(material);
      $scope.materials.splice(i, 1);
    };

    $scope.removeCourseMaterial = function(material) {
      var i = $scope.courseMaterials.indexOf(material);
      $scope.courseMaterials.splice(i, 1);
      $scope.materials.push(material);
    };

    $scope.addCourse = function() {
      $http.put('/api/courses', {
        name: $scope.name,
        author: null,
        materials: $scope.courseMaterials.map(function(it) {
          return it._id;
        }),
        instructors: []
      }).then(function() {
        $location.path('/courses');
      }).catch(function(err) {
        console.error(err);
      });
    };
    $scope.delCourse = function() {
      $http.delete('/api/courses/' + $scope.courseId)
        .then(function() {
          $location.path('/courses');
        });
    };

  }
]);

