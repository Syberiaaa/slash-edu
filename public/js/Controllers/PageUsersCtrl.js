PagesControllers.controller('UsersCtrl', ['$scope', '$http',
  function($scope, $http) {

    function getBranchFromGroupsTree(groupId, groupsTree, array) {
      array.push(groupsTree._id);
      if( groupsTree._id == groupId ) {
        return true;
      }

      for( var i = 0; i < groupsTree.groups.length; i++ ) {
        if( getBranchFromGroupsTree(groupId, groupsTree.groups[i], array) ) { return true; }
      }
      array.pop();
      return false;
    };

    $scope.users = [];
    $scope.groups = [];
    $scope.allUsers  = [];
    $scope.groupsTree;
    $scope.userGroupFilter;
    $scope.userNameFilter;

    $scope.findUserFilter = function(event) {
      var nameFilter = $scope.userNameFilter;
      var groupFilter = $scope.userGroupFilter;

      if(nameFilter == "") {
        newUsers = $scope.allUsers;
      } else {
        var newUsers = [];
        for (var i = 0; i < $scope.allUsers.length; i++) {
          var user = $scope.allUsers[i];
          if (user.name.search(nameFilter) == 0) {
            newUsers.push(user);
          }
        }
      }
      if( groupFilter != "all groups") {
        newUsers = newUsers.filter(function (item) {
          var userGroups = [];
          var flag = false;
          getBranchFromGroupsTree(item.groupId, $scope.groupsTree, userGroups);
          userGroups.forEach(function (id) {
            if (id == groupFilter) {
              flag = true;
            }
          });
          return flag;
        });
      }
      $scope.users = newUsers;
    };

    $scope.userGroupFilter = "all groups";

    $http.get('/api/users').then(function(res){
      $scope.users = res.data;
      $scope.allUsers = res.data;
    });

    $http.get("/api/userGroups").then(
        function ( response ) {
          $scope.groups = response.data.groups;
          $scope.groupsTree = response.data.groupsTree;
        }
    );

    $scope.user = function() {
      $http.put('/api/users', {
      }).then(function(response) {
        $location.path('/users/'+user._id);
      });
    }
  }
])