'use strict';

var Price = require('../models/Price');

exports.getPrices = function(args, res, next) {
  /**
   * Find prices
   * Returns all prices
   *
   * returns prices
   **/
   Price.find(function(err, prices) {
     if(err){
         res.status(500).json(err).end();
         return;
     }

     res.json({
         prices: prices
     }).end();
  });
}