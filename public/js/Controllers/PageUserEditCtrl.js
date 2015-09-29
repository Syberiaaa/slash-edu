PagesControllers.controller('UserEditCtrl', ['$scope', '$routeParams',
    function($scope, $routeParams) {
        $scope.email = $routeParams.email;
    }
]);
