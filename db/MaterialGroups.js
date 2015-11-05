module.exports = function(mongoose) {
    var materialGroupsSchema = mongoose.Schema({
        name: String,
        parent:  mongoose.Schema.Types.ObjectId,
        owner:   mongoose.Schema.Types.ObjectId
    });

    var MaterialGroups = mongoose.model('MaterialGroups', materialGroupsSchema);
};