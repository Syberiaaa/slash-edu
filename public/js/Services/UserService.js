slashEduApp.service('UserService', ['$http', function($http) {
  var user;
  $http.get('/api/user').
    then(function(response) {
      user = response.data;
    }
  );

  return {
    getUser: function() {return user;}
  };
}]);