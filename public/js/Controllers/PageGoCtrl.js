PagesControllers.controller('GoCtrl', ['$scope', '$http',
    function($scope, $http) {
        $scope.userCourses = [];

        $http.get('/api/userCourses')
            .then(function(res) {
                $scope.userCourses = response.data;
            });



}
]);