var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
module.exports = mongoose.model('Barcode', new mongoose.Schema({
	customerId: String,
    productId : String,
	value : Number
}));