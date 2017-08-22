'use strict';

var Line = require('../models/invoiceLine');

exports.getLines = function(args, res, next) {
  /**
   * Find customers
   * Returns all customers
   *
   * returns inline_response_200_2
   **/
   Line.find({invoiceId:args.invoiceId.value}, function(err, lines) {
     if(err){
         res.status(500).json(err).end();
         return;
     }

     res.json({
         lines: lines
     }).end();
  });
}
