'use strict';

var Barcode = require('../models/Barcode');
var Product = require('../models/product');
var Customer = require('../models/customer');

exports.addBarcode = function(args, res, next) {
  /**
   * Ajoute une nouvelle barcode
   *
   *
   * body description d'une barcode à ajouter a la base de données
   * no response value expected for this operation
   **/
   var barcode = new Barcode(args.body.value);
        barcode.save(function(err){
            if(err){
                res.status(500).json(err).end();
                return;
            }

            res.json({
                barcode: barcode
            }).end();
        })
}

exports.deleteBarcode = function(args, res, next) {
  /**
   * Deletes a barcode
   *
   *
   * barcodeId Long Barcode id to delete
   * api_key String  (optional)
   * no response value expected for this operation
   **/
   Barcode.find({ _id:args.barcodeId }).remove(function(){res.json({"deleted":true})});
   res.end();
}

exports.getBarcodeById = function(args, res, next) {
  /**
   * Find barcode by ID
   * Returns a single barcode
   *
   * barcodeId Long ID of barcode to return
   * returns inbarcode_response_200_1
   **/
   Barcode.findOne({ _id:args.barcodeId.value }).select().exec(function(err, barcode){
     if(err){
         res.status(500).json(err).end();
         return;
     }

     res.json({
         barcode: barcode
     }).end();
   });
}

exports.updateBarcode = function(args, res, next) {
  /**
   * Met à jour un barcode existant
   *
   *
   * body description d'un barcode à ajouter a la base de données
   * no response value expected for this operation
   **/
   Barcode.findOneAndUpdate({_id:args.body.value.id}, {$set:{value:args.body.value.value}}, {new: true}, function(err, barcode){
         if(err){
           res.status(500).json(err).end();
           return;
         }

         res.json({
             barcode: barcode
         }).end();
     });
}

exports.updateBarcodeWithForm = function(args, res, next) {
  /**
   * Updates a barcode in the store with form data
   *
   *
   * barcodeId Long ID of barcode that needs to be updated
   * factureId Long
   * quantity Integer
   * price Double
   * description String
   * no response value expected for this operation
   **/
   Barcode.findOneAndUpdate({_id:args.barcodeId.value}, {$set:{value:args.body.value.value}}, {new: true}, function(err, barcode){
         if(err){
           res.status(500).json(err).end();
           return;
         }

         res.json({
             barcode: barcode
         }).end();
     });
}

exports.addBarcodeForProductAndCustomer = function(args, res, next) {
  /**
   * Add  a barcode for the selected product and the selected customer
   *
   *
   **/

}