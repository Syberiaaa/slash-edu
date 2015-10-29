module.exports = function(mongoose) {
    // TODO issue #4
    var Schema = mongoose.Schema;
    var userGroupsSchema = mongoose.Schema({
        name:   String,
        parent: Schema.ObjectId
    });

    var UserGroups = mongoose.model('UserGroups', userGroupsSchema);
};