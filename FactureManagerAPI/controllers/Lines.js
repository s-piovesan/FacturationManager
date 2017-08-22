'use strict';

var url = require('url');

var Products = require('./LinesService');

module.exports.getLines = function getLines (req, res, next) {
  Products.getLines(req.swagger.params, res, next);
};
