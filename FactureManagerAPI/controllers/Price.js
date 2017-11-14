'use strict';

var url = require('url');

var Price = require('./PriceService');

module.exports.addPrice = function addPrice (req, res, next) {
  Price.addPrice(req.swagger.params, res, next);
};

module.exports.deletePrice = function deletePrice (req, res, next) {
  Price.deletePrice(req.swagger.params, res, next);
};

module.exports.getPriceById = function getPriceById (req, res, next) {
  Price.getPriceById(req.swagger.params, res, next);
};

module.exports.updatePrice = function updatePrice (req, res, next) {
  Price.updatePrice(req.swagger.params, res, next);
};

module.exports.updatePriceWithForm = function updatePriceWithForm (req, res, next) {
  Price.updatePriceWithForm(req.swagger.params, res, next);
};

module.exports.addPriceForProductAndCustomer = function addPriceForProductAndCustomer (req, res, next) {
  Price.addPriceForProductAndCustomer(req.swagger.params, res, next);
};