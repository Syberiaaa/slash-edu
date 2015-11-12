slashEduApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl'
      }).
      when('/courses', {
        templateUrl: 'partials/courses.html',
        controller: 'CoursesCtrl'
      }).
      when('/courses/:courseId', {
        templateUrl: 'partials/courseEdit.html',
        controller: 'CoursesEditCtrl'
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
      when('/users/:userId', {
        templateUrl: 'partials/userEdit.html',
        controller: 'UserEditCtrl'
      }).
      when('/go', {
        templateUrl: 'partials/go.html',
        controller: 'GoCtrl'
      }).
      when('/go/:courseId', {
        templateUrl: 'partials/goCourse.html',
        controller: 'GoCourseCtrl'
      }).
      when('/go/:courseId/:materialId', {
        templateUrl: 'partials/goMaterial.html',
        controller: 'GoMaterialCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
