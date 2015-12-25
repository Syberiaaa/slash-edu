module.exports = function(mongoose) {
  var coursesSchema = mongoose.Schema({
    name: String,
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'Users'},
    materials: [{type: mongoose.Schema.Types.ObjectId, ref: 'Materials'}],
    instructors: [mongoose.Schema.Types.ObjectId]
  });

  var Courses = mongoose.model('Courses', coursesSchema);
};