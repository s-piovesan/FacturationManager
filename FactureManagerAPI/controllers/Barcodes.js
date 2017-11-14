'use strict';

var url = require('url');

var Barcodes = require('./BarcodesService');

module.exports.getBarcodes = function getBarcodes (req, res, next) {
  Barcodes.getBarcodes(req.swagger.params, res, next);
};