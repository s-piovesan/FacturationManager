'use strict';

var url = require('url');

var Customer = require('./CustomerService');

module.exports.addCustomer = function addCustomer (req, res, next) {
  Customer.addCustomer(req.swagger.params, res, next);
};

module.exports.deleteCustomer = function deleteCustomer (req, res, next) {
  Customer.deleteCustomer(req.swagger.params, res, next);
};

module.exports.getCustomerById = function getCustomerById (req, res, next) {
  Customer.getCustomerById(req.swagger.params, res, next);
};

module.exports.updateCustomer = function updateCustomer (req, res, next) {
  Customer.updateCustomer(req.swagger.params, res, next);
};

module.exports.updateCustomerWithForm = function updateCustomerWithForm (req, res, next) {
  Customer.updateCustomerWithForm(req.swagger.params, res, next);
};
