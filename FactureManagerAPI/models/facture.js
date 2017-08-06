var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
module.exports = mongoose.model('Facture', new mongoose.Schema({
	customerId: String,
	creation_date : Date,
  status : String
}));
