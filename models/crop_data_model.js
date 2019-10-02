var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Model = mongoose.model;
var crop_data = new Schema({
	timestamp:String,
    state: String,
    district: String,
    market: String,
    commodity: String,
    variety: String,
    arrival_date: String,
    min_price: String,
    max_price: String,
    modal_price:String
});

var crop_Data = Model('crop_Data', crop_data)
module.exports = crop_Data;