'use strict';

var Price = require('../models/Price');
var Product = require('../models/product');
var Customer = require('../models/customer');

exports.addPrice = function(args, res, next) {
  /**
   * Ajoute une nouvelle price
   *
   *
   * body description d'une price à ajouter a la base de données
   * no response value expected for this operation
   **/
   var price = new Price(args.body.value);
        price.save(function(err){
            if(err){
                res.status(500).json(err).end();
                return;
            }

            res.json({
                price: price
            }).end();
        })
}

exports.deletePrice = function(args, res, next) {
  /**
   * Deletes a price
   *
   *
   * priceId Long Price id to delete
   * api_key String  (optional)
   * no response value expected for this operation
   **/
   Price.find({ _id:args.priceId }).remove(function(){res.json({"deleted":true})});
   res.end();
}

exports.getPriceById = function(args, res, next) {
  /**
   * Find price by ID
   * Returns a single price
   *
   * priceId Long ID of price to return
   * returns inprice_response_200_1
   **/
   Price.findOne({ _id:args.priceId.value }).select().exec(function(err, price){
     if(err){
         res.status(500).json(err).end();
         return;
     }

     res.json({
         price: price
     }).end();
   });
}

exports.updatePrice = function(args, res, next) {
  /**
   * Met à jour un price existant
   *
   *
   * body description d'un price à ajouter a la base de données
   * no response value expected for this operation
   **/
   Price.findOneAndUpdate({_id:args.body.value.price}, {$set:{value:args.body.value.price}}, {new: true}, function(err, price){
         if(err){
           res.status(500).json(err).end();
           return;
         }

         res.json({
             price: price
         }).end();
     });
}

exports.updatePriceWithForm = function(args, res, next) {
  /**
   * Updates a price in the store with form data
   *
   *
   * priceId Long ID of price that needs to be updated
   * factureId Long
   * quantity Integer
   * price Double
   * description String
   * no response value expected for this operation
   **/
   Price.findOneAndUpdate({_id:args.priceId.value}, {$set:{price:args.body.value.price}}, {new: true}, function(err, price){
         if(err){
           res.status(500).json(err).end();
           return;
         }

         res.json({
             price: price
         }).end();
     });
}

exports.addPriceForProductAndCustomer = function(args, res, next) {
  /**
   * Add  a price for the selected product and the selected customer
   *
   *
   **/

}