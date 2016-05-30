var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Producer = new Schema ({
    type : String,
    source : [{type : Schema.Types.ObjectId, ref : 'sources'}]
});

module.exports = mongoose.model('producers', Producer);