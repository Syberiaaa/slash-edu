module.exports = function(mongoose) {
  var userGroupsSchema = mongoose.Schema({
    name: String,
    parent: mongoose.Schema.Types.ObjectId
  });

  var UserGroups = mongoose.model('UserGroups', userGroupsSchema);
};