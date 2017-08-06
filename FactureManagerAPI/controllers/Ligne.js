'use strict';

var url = require('url');

var Ligne = require('./LigneService');

module.exports.addLigne = function addLigne (req, res, next) {
  Ligne.addLigne(req.swagger.params, res, next);
};

module.exports.deleteLigne = function deleteLigne (req, res, next) {
  Ligne.deleteLigne(req.swagger.params, res, next);
};

module.exports.getLigneById = function getLigneById (req, res, next) {
  Ligne.getLigneById(req.swagger.params, res, next);
};

module.exports.updateLigne = function updateLigne (req, res, next) {
  Ligne.updateLigne(req.swagger.params, res, next);
};

module.exports.updateLigneWithForm = function updateLigneWithForm (req, res, next) {
  Ligne.updateLigneWithForm(req.swagger.params, res, next);
};
