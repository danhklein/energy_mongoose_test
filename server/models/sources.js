var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Source = new Schema ({
    source : String,
    generation : [{type : Schema.Types.ObjectId, ref : 'generations'}]
});

module.exports = mongoose.model('sources', Source);