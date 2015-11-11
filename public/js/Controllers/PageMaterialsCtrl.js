PagesControllers.controller('MaterialsCtrl', ['$scope', '$http',
    function($scope, $http) {
        $scope.materials = [];
        $scope.pages = [];
        $scope.currentPage = 0;
        $scope.itemsPerPage = 10;
        $scope.numberMaterial = 0;

        $scope.setCurrentPage = function(val) {$scope.currentPage = val;};
        $scope.incCurrentPage = function()  {
            if($scope.currentPage < $scope.materials.length / $scope.itemsPerPage - 1 ){
                $scope.currentPage++; $scope.numberMaterial+=$scope.itemsPerPage;}
        };


        $scope.decCurrentPage = function() {
            if($scope.currentPage > 0 ){
                $scope.currentPage--; $scope.numberMaterial-=$scope.itemsPerPage;}
        };

        $scope.deleteMaterial = function(materialId,i) {
            $http.delete('/api/materials/'+materialId)
                .then(function(res) {
                        $scope.materials.splice(i,1);
                });
        };

        $http.get('/api/materials')
            .then(function(response){
                $scope.materials = response.data;
                $scope.pages = [];
                for(var i = 0; i < $scope.materials.length / $scope.itemsPerPage; i++) $scope.pages.push(i);
            });
    }
]);