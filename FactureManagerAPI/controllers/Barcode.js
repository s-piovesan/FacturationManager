'use strict';

var url = require('url');

var Barcode = require('./BarcodeService');

module.exports.addBarcode = function addBarcode (req, res, next) {
  Barcode.addBarcode(req.swagger.params, res, next);
};

module.exports.deleteBarcode = function deleteBarcode (req, res, next) {
  Barcode.deleteBarcode(req.swagger.params, res, next);
};

module.exports.getBarcodeById = function getBarcodeById (req, res, next) {
  Barcode.getBarcodeById(req.swagger.params, res, next);
};

module.exports.updateBarcode = function updateBarcode (req, res, next) {
  Barcode.updateBarcode(req.swagger.params, res, next);
};

module.exports.updateBarcodeWithForm = function updateBarcodeWithForm (req, res, next) {
  Barcode.updateBarcodeWithForm(req.swagger.params, res, next);
};

module.exports.addBarcodeForProductAndCustomer = function addBarcodeForProductAndCustomer (req, res, next) {
  Barcode.addBarcodeForProductAndCustomer(req.swagger.params, res, next);
};