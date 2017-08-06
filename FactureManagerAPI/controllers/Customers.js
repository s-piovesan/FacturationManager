'use strict';

var url = require('url');

var Customers = require('./CustomersService');

module.exports.getCustomers = function getCustomers (req, res, next) {
  Customers.getCustomers(req.swagger.params, res, next);
};
