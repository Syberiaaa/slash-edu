module.exports = function(mongoose) {
    var coursesSchema = mongoose.Schema({
        name: String,
        author: mongoose.Schema.Types.ObjectId,
        materials: [mongoose.Schema.Types.ObjectId]
    });

    var Courses = mongoose.model('Courses', coursesSchema);
};