PagesControllers.controller('GoMaterialCtrl', ['$scope', '$http', '$routeParams', '$sce',
  function($scope, $http, $routeParams, $sce) {
    $scope.courseName = 'Awesome Course';
    $scope.materialName = 'Some Material';

    $scope.materialId = $routeParams.materialId;

    $http.get('/api/materials/' + $scope.materialId)
      .then(function(res) {
        $scope.materialName = res.data.name;
        $scope.type = res.data.type;
        $scope.html =  $sce.trustAsHtml(res.data.data.html);

        setTimeout(function() {
          for (var i = 0; i < document.scripts.length; i++) {
            if (document.scripts[i].type.indexOf('math/tex') >= 0) {
              MathJax.Hub.Queue([
                'Typeset',
                MathJax.Hub, document.scripts[i]
              ]);
            }
          }
          $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
          });
        }, 500);
      });
  }
]);

