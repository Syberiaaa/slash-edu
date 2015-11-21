var passwordHash = require('password-hash');
var Utils = require('../utils/Utils.js');

module.exports = function(mongoose) {
  var  Schema = mongoose.Schema;
  var usersSchema = mongoose.Schema({
    email: String,
    password: String,
    name: String,
    role: {type: String, enum: Utils.getUserRoles()},
    groupId: Schema.ObjectId
  }, {
    toJSON:   {virtuals: true},
    toObject: {virtuals: true}
  });

  usersSchema.virtual('userRights').get(function() {
    return Utils.getUserRights(this.role);
  });

  usersSchema.pre('save', function(next) {
    var that = this;
    if (!passwordHash.isHashed(that.password)) {
      that.password = passwordHash.generate(that.password);
    }
    next();
  });

  var Users = mongoose.model('Users', usersSchema);

  /* TODO:
    Users.count({}, function(err, cnt) {
      if (cnt === 0) {
        var admin = new Users({
          name: "admin",
          email: 'admin@isu.ru',
          password: '123456',
          role: 'admin'
        });
        admin.save(function(err) {
          if (err) console.error(err);
        });
      }
    });
  */
};