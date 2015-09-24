slashEduApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl'
      }).
      when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl'
      }).
      when('/users', {
        templateUrl: 'partials/users.html',
        controller: 'UsersCtrl'
      }).
      when('/mymaterials', {
        templateUrl: 'partials/mymaterials.html',
        controller: 'MyMaterialsCtrl'
      }).
      when('/newmaterial', {
        templateUrl: 'partials/newmaterial.html',
        controller: 'NewMaterialCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
