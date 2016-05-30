var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Generation = new Schema ({
    ammount : String
});

module.exports = mongoose.model('generations', Generation);