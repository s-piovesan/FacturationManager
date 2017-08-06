var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
module.exports = mongoose.model('Product', new mongoose.Schema({
	description: String,
  price : Number
}));
