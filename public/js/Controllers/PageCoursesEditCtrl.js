PagesControllers.controller('CoursesEditCtrl', ['$scope', '$http',
    function($scope, $http) {
        $scope.courseMaterials = [];

        $http.get('/api/materials')
            .then(function(response){
                $scope.materials = response.data;
            }
        );

        $scope.addCourseMaterial = function(material){
            $scope.courseMaterials.push(material);
            var i = $scope.materials.indexOf(material);
            $scope.materials.splice(i,1)
    }

        $scope.removeCourseMaterial = function(material) {
            var i = $scope.courseMaterials.indexOf(material);
            $scope.courseMaterials.splice(i,1)
            $scope.materials.push(material)
        }

    }
]);

