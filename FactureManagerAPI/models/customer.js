var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
module.exports = mongoose.model('Customer', new mongoose.Schema({
	name: String,
  address : String,
  zipcode : String,
  city : String
}));
