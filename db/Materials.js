module.exports = function(mongoose) {
  var materialsSchema = mongoose.Schema({
    name: String,
    type: { type: String, enum: ['text'] },
    data: mongoose.Schema.Types.Mixed
  });

  var Materials = mongoose.model('Materials', materialsSchema);
};