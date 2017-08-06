var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
module.exports = mongoose.model('LigneFacture', new mongoose.Schema({
	factureId: String,
  produitId : String,
	designation: String,
	quantity : Number,
  prixUnitaire : Number
}));
