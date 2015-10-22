PagesControllers.controller('MaterialEditCtrl', ['$scope', '$http', '$location', '$routeParams', '$sce', '$parse',
    function($scope, $http, $location, $routeParams, $sce, $parse) {
        $scope.name = '';
        $scope.type = 'text';
        $scope.src = '';
        $scope.html = '';

        $scope.materialId = $routeParams.materialId;

       $scope.preview = function() {
            $http.post('/api/materials/preview', {src: $scope.src})
                .then(function(response) {
                    $scope.html = $sce.trustAsHtml(response.data);
                    MathJax.Hub.Reprocess(function() {
                        console.log(arguments);
                    });


                });
        };

        $scope.add = function() {
            $http.put('/api/materials', {
                name: $scope.name,
                type: $scope.type,
                src: $scope.src
            }).then(function(response) {
                $location.path('/materials');
            });
        }
    }
]);