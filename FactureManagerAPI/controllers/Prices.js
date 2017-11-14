'use strict';

var url = require('url');

var Prices = require('./PricesService');

module.exports.getPrices = function getPrices (req, res, next) {
  Prices.getPrices(req.swagger.params, res, next);
};