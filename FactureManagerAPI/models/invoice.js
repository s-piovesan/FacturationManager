var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
module.exports = mongoose.model('Invoice', new mongoose.Schema({
	customerId: String,
	number: String,
	creation_date : Date,
	start_period : Date,
	end_period : Date,
  status : String
}));
