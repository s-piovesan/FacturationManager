'use strict';

var Customer = require('../models/customer');

exports.getCustomers = function(args, res, next) {
  /**
   * Find customers
   * Returns all customers
   *
   * returns inline_response_200_2
   **/
   Customer.find({}, function(err, customers) {
     if(err){
         res.status(500).json(err).end();
         return;
     }

     res.json({
         customers: customers
     }).end();
  });
}
