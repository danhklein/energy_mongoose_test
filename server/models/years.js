var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Year = new Schema ({
    yearNum : String,
    states : [{type : Schema.Types.ObjectId, ref : 'states'}]
});

module.exports = mongoose.model('years', Year);