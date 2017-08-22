var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
module.exports = mongoose.model('InvoiceLine', new mongoose.Schema({
	invoiceId: String,
  productId : String,
	creationDate: { type: Date, default: Date.now },
	description: String,
	quantity : Number,
  price : Number
}));
