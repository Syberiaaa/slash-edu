PagesControllers.controller('UsersCtrl', ['$scope', '$http',
  function($scope, $http) {
    function getBranchFromGroupsTree(groupId, groupsTree, array) {
      array.push(groupsTree._id);
      if (groupsTree._id == groupId) {
        return true;
      }

      for (var i = 0; i < groupsTree.groups.length; i++) {
        if (getBranchFromGroupsTree(groupId, groupsTree.groups[i], array)) {
          return true;
        }
      }
      array.pop();
      return false;
    }

    function getUsersData() {
      $http.get('/api/users').then(function(res) {
        $scope.users = res.data;
        $scope.allUsers = res.data;
      });
    }

    function getGroupsData() {
      $http.get('/api/userGroups').then(
        function(response) {
          $scope.groups = response.data.groups;
          $scope.groupsTree = response.data.groupsTree;
        }
      );
    }

    $scope.users = [];
    $scope.groups = [];
    $scope.allUsers = [];
    $scope.groupsTree = null;
    $scope.userGroupFilter = 'all groups';
    $scope.userNameFilter = null;
    $scope.nameOfNewGroup = '';
    $scope.parentOfNewGroup = undefined;
    $scope.createNewGroup = null;

    // TODO: $scope.userGroupFilter = 'all groups';

    $scope.findUserFilter = function() {
      var nameFilter = $scope.userNameFilter;
      var groupFilter = $scope.userGroupFilter;

      if (nameFilter == '') {
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
      if (groupFilter != 'all groups') {
        newUsers = newUsers.filter(function(item) {
          var userGroups = [];
          var flag = false;
          getBranchFromGroupsTree(item.groupId, $scope.groupsTree, userGroups);
          userGroups.forEach(function(id) {
            if (id == groupFilter) {
              flag = true;
            }
          });
          return flag;
        });
      }
      $scope.users = newUsers;
    };

    $('#groupCreateVoidNameGroupMessage').collapse({
      toggle: true
    });
    $('#groupCreateVoidParentGroupMessage').collapse({
      toggle: true
    });

    $scope.createNewGroup = function() {
      var voidNameMessage = $('#groupCreateVoidNameGroupMessage');
      var voidParentMessage = $('#groupCreateVoidParentGroupMessage');
      // TODO: voidNameMessage.collapse();
      // TODO: voidParentMessage.collapse({toggle: true});

      var validate = true;
      if ($scope.parentOfNewGroup == undefined) {
        validate = false;
        voidParentMessage.collapse('show');
      } else {
        voidParentMessage.collapse('hide');
      }
      if ($scope.nameOfNewGroup == '') {
        validate = false;
        voidNameMessage.collapse('show');
      } else {
        voidNameMessage.collapse('hide');
      }
      if (validate) {
        var newGroup = {};
        newGroup.name = $scope.nameOfNewGroup;
        newGroup.parent = $scope.parentOfNewGroup;
        $http.put('/api/userGroups', newGroup).success(function() {
          getGroupsData();
          $('#createNewGroupDialogModal').modal('hide');
        }).error(function(data, status) {
          console.err('Error in group create request' + status);
          $('#createNewGroupDialogModal').modal('hide');
        });
      }
    };

    getUsersData();
    getGroupsData();

    // Where to use this code? -------------------
    $scope.user = function() {
      $http.put('/api/users', {}).then(function() {
        $location.path('/users/' + user._id);
      });
    };
  }
]);