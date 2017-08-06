'use strict';

var Product = require('../models/product');

exports.addProduct = function(args, res, next) {
  /**
   * Ajoute une nouvelle product
   *
   *
   * body Body_9 description d'une product à ajouter a la base de données
   * no response value expected for this operation
   **/
   var product = new Product(args.body.value);
        if (product.description == null || product.price == null){
            res.status(405).json({error:"Invalid input"}).end();
            return;
        }else{
          product.save(function(err){
              if(err){
                  res.status(500).json(err).end();
                  return;
              }

              res.json({
                  product: product
              }).end();
          })
        }
}

exports.deleteProduct = function(args, res, next) {
  /**
   * Deletes a product
   *
   *
   * productId Long Product id to delete
   * api_key String  (optional)
   * no response value expected for this operation
   **/
   Product.find({ _id:args.productId.value }).remove(function(err){
     if(err){
         res.status(500).json(err).end();
         return;
     }

     res.json({"deleted":true}).end();
   });
}

exports.getProductById = function(args, res, next) {
  /**
   * Find product by ID
   * Returns a single product
   *
   * productId Long ID of product to return
   * returns inline_response_200_1
   **/
   Product.findOne({ _id:args.productId.value }).select().exec(function(err, product){
     if(err){
         res.status(500).json(err).end();
         return;
     }

     res.json({
         product: product
     }).end();
   });
}

exports.updateProduct = function(args, res, next) {
  /**
   * Met à jour un product existant
   *
   *
   * body Body_8 description d'un product à ajouter a la base de données
   * no response value expected for this operation
   **/
   Product.findOneAndUpdate({_id:args.body.value._id}, {$set:{description:args.body.value.description, price:args.body.value.price}}, {new: true}, function(err, product){
         if(err){
           res.status(500).json(err).end();
           return;
         }

         res.json({
             product: product
         }).end();
     });
}

exports.updateProductWithForm = function(args, res, next) {
  /**
   * Updates a product in the store with form data
   *
   *
   * productId string ID of product that needs to be updated
   * description String
   * prixunitaire Double
   * no response value expected for this operation
   **/

   Product.findOneAndUpdate({_id:args.productId.value}, {$set:{description:args.description.value, price:args.price.value}}, {new: true}, function(err, product){
         if(err){
           res.status(500).json(err).end();
           return;
         }

         res.json({
             product: product
         }).end();
     });
}
