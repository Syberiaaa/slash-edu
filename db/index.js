var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/slashedu');

require('./Users.js')(mongoose);
require('./Materials.js')(mongoose);

module.exports = mongoose;