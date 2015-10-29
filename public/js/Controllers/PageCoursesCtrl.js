PagesControllers.controller('CoursesCtrl', ['$scope', '$http',
    function($scope, $http) {
        $scope.materials = [];

        $http.get('/api/courses', function(res) {
            $scope.materials = res.data;
        });
    }
]);