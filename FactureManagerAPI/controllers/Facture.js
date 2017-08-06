'use strict';

var url = require('url');

var Facture = require('./FactureService');

module.exports.addFacture = function addFacture (req, res, next) {
  Facture.addFacture(req.swagger.params, res, next);
};

module.exports.deleteFacture = function deleteFacture (req, res, next) {
  Facture.deleteFacture(req.swagger.params, res, next);
};

module.exports.getFactureById = function getFactureById (req, res, next) {
  Facture.getFactureById(req.swagger.params, res, next);
};

module.exports.updateFacture = function updateFacture (req, res, next) {
  Facture.updateFacture(req.swagger.params, res, next);
};

module.exports.updateFactureWithForm = function updateFactureWithForm (req, res, next) {
  Facture.updateFactureWithForm(req.swagger.params, res, next);
};
