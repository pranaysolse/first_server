var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Model = mongoose.model;
var air_data = new Schema({
    id: String,
  country: String,
  state: String,
  city: String,
  station: String,
  last_update: String,
  pollutant_id: String,
  pollutant_min: String,
  pollutant_max: String,
  pollutant_avg: String,
  pollutant_unit:String
});

var Air_data= Model('Air_Data',air_data);

module.exports = Air_data;