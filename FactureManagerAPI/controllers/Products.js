'use strict';

var url = require('url');

var Products = require('./ProductsService');

module.exports.getProducts = function getProducts (req, res, next) {
  Products.getProducts(req.swagger.params, res, next);
};
