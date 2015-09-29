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
      when('/materials', {
        templateUrl: 'partials/materials.html',
        controller: 'MaterialsCtrl'
      }).
      when('/materials/:materialId', {
        templateUrl: 'partials/materialEdit.html',
        controller: 'MaterialEditCtrl'
      }).
      when('/register', {
        templateUrl: 'partials/register.html',
        controller: 'RegisterCtrl'
      }).
      when('/users', {
        templateUrl: 'partials/users.html',
        controller: 'UsersCtrl'
      }).
      when('/users/:email', {
        templateUrl: 'partials/userEdit.html',
        controller: 'UserEditCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
