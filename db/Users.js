
var passwordHash = require('password-hash');

module.exports = function(mongoose) {
  var usersSchema = mongoose.Schema({
    name: String,
    email: String,
    role: String,
    password: String
  });

  usersSchema.pre('save', function (next) {
    if (!passwordHash.isHashed(this.password)) {
      this.password = passwordHash.generate(this.password);
    }
    next();
  });

  var Users = mongoose.model('Users', usersSchema);

  //Users.count({}, function(err, cnt) {
  //  if (cnt === 5) {
      var admin = new Users({name: 'Petr', email: 'pety@gmail.com', role: 'user', password: '123456'});
      admin.save(function(err) {
        if (err) console.error(err);
      });
  //  }
  //});

var passwordHash = require('password-hash');
var Utils = require("../Utils/Utils.js");

module.exports = function(mongoose) {
  var  Schema = mongoose.Schema;
  var usersSchema = mongoose.Schema({
    email: String,
    password: String,
    name: String,
    role: {type: String, enum: Utils.getUserRoles()},
    groupId: Schema.ObjectId
  }, {
    toJSON:   {virtuals: true },
    toObject: {virtuals: true}
  });

  usersSchema.virtual('userRights').get(function() {
    return Utils.getUserRights(this.role);
  });

  usersSchema.pre('save', function (next) {
    if (!passwordHash.isHashed(this.password)) {
      this.password = passwordHash.generate(this.password);
    }
    next();
  });

  var Users = mongoose.model('Users', usersSchema);

  Users.count({}, function(err, cnt) {
    if (cnt === 1) {
      var admin = new Users({name: "vasya", email: 'vasya@isu.ru', password: '123456', role: "admin"});
      admin.save(function(err) {
        if (err) console.error(err);
      });
    }
  });

}};