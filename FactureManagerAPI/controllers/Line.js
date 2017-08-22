'use strict';

var url = require('url');

var Line = require('./LineService');

module.exports.addLine = function addLine (req, res, next) {
  Line.addLine(req.swagger.params, res, next);
};

module.exports.deleteLine = function deleteLine (req, res, next) {
  Line.deleteLine(req.swagger.params, res, next);
};

module.exports.getLineById = function getLineById (req, res, next) {
  Line.getLineById(req.swagger.params, res, next);
};

module.exports.updateLine = function updateLine (req, res, next) {
  Line.updateLine(req.swagger.params, res, next);
};

module.exports.updateLineWithForm = function updateLineWithForm (req, res, next) {
  Line.updateLineWithForm(req.swagger.params, res, next);
};

module.exports.addLineForProductAndCustomer = function addLineForProductAndCustomer (req, res, next) {
  Line.addLineForProductAndCustomer(req.swagger.params, res, next);
};
