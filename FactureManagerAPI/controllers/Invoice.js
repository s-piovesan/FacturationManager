'use strict';

var url = require('url');

var Invoice = require('./InvoiceService');

module.exports.addInvoice = function addInvoice (req, res, next) {
  Invoice.addInvoice(req.swagger.params, res, next);
};

module.exports.deleteInvoice = function deleteInvoice (req, res, next) {
  Invoice.deleteInvoice(req.swagger.params, res, next);
};

module.exports.getInvoiceById = function getInvoiceById (req, res, next) {
  Invoice.getInvoiceById(req.swagger.params, res, next);
};

module.exports.getCurrentInvoiceByCustomerId = function getCurrentInvoiceByCustomerId (req, res, next) {
  Invoice.getCurrentInvoiceByCustomerId(req.swagger.params, res, next);
};

module.exports.updateInvoice = function updateInvoice (req, res, next) {
  Invoice.updateInvoice(req.swagger.params, res, next);
};

module.exports.updateInvoiceWithForm = function updateInvoiceWithForm (req, res, next) {
  Invoice.updateInvoiceWithForm(req.swagger.params, res, next);
};
