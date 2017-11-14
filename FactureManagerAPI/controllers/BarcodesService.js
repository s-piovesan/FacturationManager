'use strict';

var Barcode = require('../models/Barcode');

exports.getBarcodes = function(args, res, next) {
  /**
   * Find barcodes
   * Returns all barcodes
   *
   * returns barcodes
   **/
   Barcode.find(function(err, barcodes) {
     if(err){
         res.status(500).json(err).end();
         return;
     }

     res.json({
         barcodes: barcodes
     }).end();
  });
}