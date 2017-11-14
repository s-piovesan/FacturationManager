var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
module.exports = mongoose.model('Price', new mongoose.Schema({
	customerId: String,
    productId : String,
	price : Number
}));