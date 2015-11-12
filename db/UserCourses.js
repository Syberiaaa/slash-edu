module.exports = function(mongoose) {
    var userCoursesSchema = mongoose.Schema({
        user: mongoose.Schema.Types.ObjectId,
        course: mongoose.Schema.Types.ObjectId,
        goAs: {type: String, enum: ['student', 'teacher']}
    });

    var UserCourses = mongoose.model('UserCourses', userCoursesSchema);
};