PagesControllers.controller('CoursesEditCtrl', ['$scope', '$http', '$location',
    function($scope, $http, $location) {
        $scope.courseMaterials = [];

        $http.get('/api/materials')
            .then(function(response){
                $scope.materials = response.data;
            }
        );

        $scope.addCourseMaterial = function(material){
            $scope.courseMaterials.push(material);
            var i = $scope.materials.indexOf(material);
            $scope.materials.splice(i,1);
        };

        $scope.removeCourseMaterial = function(material) {
            var i = $scope.courseMaterials.indexOf(material);
            $scope.courseMaterials.splice(i,1);
            $scope.materials.push(material);
        };

        $scope.addCourse = function () {
            $http.put('/api/courses', {
                name: $scope.name,
                author: null,
                materials: $scope.courseMaterials.map(function(it) {return it._id}),
                instructors: []
            }).then(function (response) {
                $location.path('/courses');
            }).catch(function(err) {
                console.log(err);
            });
        };

    }
]);

