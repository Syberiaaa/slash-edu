PagesControllers.controller('GoCtrl', ['$scope', '$http',
    function($scope, $http) {
        $scope.userCourses = [];

        $http.get('/api/userCourses', function(res) {
            $scope.userCourses = res.data;
        });



}
]);