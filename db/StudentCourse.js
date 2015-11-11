module.exports = function(mongoose) {
    var studentCourseSchema = mongoose.Schema({
        student: mongoose.Schema.Types.ObjectId,
        course: mongoose.Schema.Types.ObjectId
    });

    var StudentCourse = mongoose.model('StudentCourse', studentCourseSchema);
};