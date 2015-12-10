module.exports = function(mongoose) {
  var coursesSchema = mongoose.Schema({
    name: String,
    author: mongoose.Schema.Types.ObjectId,
    materials: [{type: mongoose.Schema.Types.ObjectId, ref: 'Materials'}],
    instructors: [mongoose.Schema.Types.ObjectId]
  });

  var Courses = mongoose.model('Courses', coursesSchema);
};