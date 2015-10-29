module.exports = function(mongoose) {
    var studentCourseSchema = mongoose.Schema({
        student: mongoose.Scheam.Types.ObjectId,
        course: mongoose.Schema.Types.ObjectId
    });

    var StudentCourse = mongoose.model('StudentCourse', studentCourseSchema);
};