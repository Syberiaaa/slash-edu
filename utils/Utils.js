var Utils = {};

Utils.getUserRoles = function() {
    return ['admin', 'teacher', 'student', 'unAuthorizedUser', 'user'];
};

Utils.getUserRights = function(userRole) {
    console.log(typeof(userRole))
    if(typeof(userRole) == 'string') {
        switch (userRole) {
            case 'admin'  : return ['materials.create', 'materials.request', 'users.create', 'users.request'];
            case 'teacher': return ['materials.create', 'materials.request', 'users.request'];
            case 'student': return ['materials.request', 'users.request'];
            case 'user':
            case 'unAuthorizedUser': return ['materials.request'];
            default :
                throw new Error("Wrong user role.");
        }
    } else {
      throw new Error("User role must be of type \"String\"")
    }
};

module.exports = Utils;