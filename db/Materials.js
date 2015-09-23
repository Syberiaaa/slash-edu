module.exports = function(mongoose) {
  var materialsSchema = mongoose.Schema({});

  var Materials = mongoose.model('Materials', materialsSchema);
};