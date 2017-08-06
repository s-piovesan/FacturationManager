'use strict';

var Product = require('../models/product');

exports.getProducts = function(args, res, next) {
  /**
   * Find customers
   * Returns all customers
   *
   * returns inline_response_200_2
   **/
   Product.find({}, function(err, products) {
     if(err){
         res.status(500).json(err).end();
         return;
     }

     res.json({
         products: products
     }).end();
  });
}
