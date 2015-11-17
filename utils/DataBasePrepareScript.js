/**
 * Created by msergey on 16.11.15.
 */
var Promise = require("./promise.js");
module.exports = function(mongoose) {
    function saveAll(array, callback, callbackErrors) {
        var promises = [];
        for( var i = 0; i < array.length; i++) {
            promises.push(array[i].save());
        }
        Promise.all(promises).then(callback, callbackErrors);
    };

    var Groups = mongoose.model("UserGroups");
    var Users = mongoose.model("Users");
    var group;

    var prepareClear = [
        Groups.remove({}).exec(),
        Users.remove({}).exec()
    ];

    Promise.all(prepareClear).then( function () {

        group = new Groups({name: "root"});
        group.save(function (err, saved) {
            if(err) console.log(err);
            var rootID = saved._id;
            var rootGroups = [
                    new Groups({name: "teachers", parent: rootID}),
                    new Groups({name: "admins", parent: rootID}),
                    new Groups({name: "students", parent: rootID}),
                    new Groups({name: "users", parent: rootID}),
                    new Groups({name: "blacklist", parent: rootID}),
                    new Groups({name: "anyGroup", parent: rootID})
                ];
            saveAll(rootGroups, function (results) {
                var otherGroups = [
                    new Groups({name: "4FI", parent: results[2]._id}),
                    new Groups({name: "4PI", parent: results[2]._id}),
                    new Groups({name: "IMEI", parent: results[0]._id}),
                    new Groups({name: "FCN", parent: results[0]._id}),
                    new Groups({name: "moderators", parent: results[1]._id}),
                    new Groups({name: "Society for the Protection of chinchillas", parent: results[5]._id}),
                ];
                saveAll(otherGroups, function (results2) {
                    var addUsers = [
                        new Users({email: "admin@isu.ru",      password: "123456",     name: "admin",          role: "admin",   groupId: results[1]._id}),
                        new Users({email: "msergey@isu.ru",    password: "msergey",    name: "sergey",         role: "student", groupId: results2[1]._id}),
                        new Users({email: "ivan@isu.ru",       password: "ivan",       name: "vanya",          role: "student", groupId: results2[0]._id}),
                        new Users({email: "sreym@isu.ru",      password: "sreym",      name: "sergey",         role: "teacher", groupId: results2[3]._id}),
                        new Users({email: "fmaksim@isu.ru",    password: "fmaksim",    name: "maksim",         role: "student", groupId: results2[1]._id}),
                        new Users({email: "dartyom@isu.ru",    password: "dartem",     name: "artyom",         role: "student", groupId: results2[1]._id}),
                        new Users({email: "kalexey@isu.ru",    password: "kalexey",    name: "alexey",         role: "teacher", groupId: results2[3]._id}),
                        new Users({email: "moderator@isu.ru",  password: "moderator",  name: "moderatorovich", role: "admin",   groupId: results2[4]._id}),
                        new Users({email: "lkolya@isu.ru",     password: "lkolya",     name: "nikolay",        role: "teacher", groupId: results2[1]._id}),
                        new Users({email: "myana@isu.ru",      password: "myana",      name: "yana",           role: "teacher", groupId: results2[2]._id}),
                        new Users({email: "user@isu.ru",       password: "user",       name: "userovich",      role: "user",    groupId: results[3]._id}),
                        new Users({email: "black@isu.ru",      password: "black",      name: "blackovich",     role: "user",    groupId: results[4]._id}),
                        new Users({email: "chinchilla@isu.ru", password: "chinchilla", name: "chinny",         role: "user",    groupId: results2[5]._id}),
                        new Users({email: "unauth@isu.ru",     password: "unauth",     name: "unauth",         role: "unAuthorizedUser", groupId: results[3]._id}),
                        new Users({email: "sasha@isu.ru",      password: "sasha",      name: "alexandra",      role: "student", groupId: results2[1]._id}),
                        new Users({email: "nastya@isu.ru",     password: "nastya",     name: "anastasiya",     role: "student", groupId: results2[1]._id}),
                        new Users({email: "masha@isu.ru",      password: "masha",      name: "mariya",         role: "student", groupId: results2[1]._id}),
                        new Users({email: "alex@isu.ru",       password: "alex",       name: "alexandr",       role: "student", groupId: results2[0]._id}),
                        new Users({email: "egor@isu.ru",       password: "egor",       name: "egor",           role: "student", groupId: results2[0]._id}),
                        new Users({email: "zhenya@isu.ru",     password: "zhenya",     name: "evgeniy",        role: "student", groupId: results2[0]._id})
                    ];
                    saveAll(addUsers, function(res3){ }, function(err){ if(err) console.log(err); });

                }, function (err) { if(err) {console.log(err)} });
            }, function (err) { if(err) {console.log(err)} });

        });
        }, function (err) { console.log(err); }
    );


}