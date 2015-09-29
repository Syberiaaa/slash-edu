var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/slashedu');

require('./UserGroups.js')(mongoose);
require('./Users.js')(mongoose);
require('./MaterialGroups.js')(mongoose);
require('./Materials.js')(mongoose);

module.exports = mongoose;