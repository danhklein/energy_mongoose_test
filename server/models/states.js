var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var State = new Schema({
    name : String,
    strict: false,
    producer : [{type : Schema.Types.mixed}]
});

module.exports = mongoose.model('states', State);