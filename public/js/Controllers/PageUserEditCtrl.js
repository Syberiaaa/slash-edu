PagesControllers.controller('UserEditCtrl', ['$scope', '$http', '$routeParams', '$location',
    function($scope, $http, $routeParams, $location) {
        $scope.userId = $routeParams.userId;
        $scope.newPassword = "";
        $scope.name = "";
        $scope.email = "";
        $scope.role = "";
        $http.get("api/users/:userId").then( function(response) {
            $scope.name = response.name;
            $scope.email = response.email;
            $scope.role = response.role;
        });
        $scope.save = function () {
            var edUser = {};
            edUser.email = $scope.email;
            edUser.name = $scope.name;
            edUser.password = $scope.newPassword;
            edUser.role = $scope.role;
            $http.post("api/users/:userId", edUser).then( function(response) {
            });

        }
        $scope.delete = function() {
            $http.delete("api/users/:userId").then(function (response) {});
            $location.path("/users");
        }

    }
]);
