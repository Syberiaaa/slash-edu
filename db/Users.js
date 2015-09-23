var passwordHash = require('password-hash');

module.exports = function(mongoose) {
  var usersSchema = mongoose.Schema({
    email: String,
    password: String
  });

  usersSchema.pre('save', function (next) {
    if (!passwordHash.isHashed(this.password)) {
      this.password = passwordHash.generate(this.password);
    }
    next();
  });

  var Users = mongoose.model('Users', usersSchema);

  Users.count({}, function(err, cnt) {
    if (cnt === 0) {
      var admin = new Users({email: 'admin', password: '123456'});
      admin.save(function(err) {
        if (err) console.error(err);
      });
    }
  });
};