module.exports = function(mongoose) {
  var materialGroupsSchema = mongoose.Schema({
    name: String,
    parent: mongoose.Schema.Types.ObjectId,
    owner: mongoose.Schema.Types.ObjectId
  });

  var MaterialGroups = mongoose.model('MaterialGroups', materialGroupsSchema);
  MaterialGroups.find({name:"root"}, function(err,res){
    if (res.length==0)
      var newRoot = new MaterialGroups({
        name: "root",
        parent: null,
        owner: null
      });

    newRoot.save(function(err) {
      if (err) {
        res.sendStatus(400);
      } else {
        res.sendStatus(200);
      }
    });
  });
  };

