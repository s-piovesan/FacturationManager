'use strict';

var Ligne = require('../models/ligneFacture');

exports.addLigne = function(args, res, next) {
  /**
   * Ajoute une nouvelle ligne
   *
   *
   * body Body_7 description d'une ligne à ajouter a la base de données
   * no response value expected for this operation
   **/
   var ligne = new Ligne(args.body.value);
        ligne.save(function(err){
            if(err){
                res.status(500).json(err).end();
                return;
            }

            res.json({
                ligne: ligne
            }).end();
        })
}

exports.deleteLigne = function(args, res, next) {
  /**
   * Deletes a ligne
   *
   *
   * ligneId Long Ligne id to delete
   * api_key String  (optional)
   * no response value expected for this operation
   **/
   Ligne.find({ _id:args.ligneId }).remove(function(){res.json({"deleted":true})});
   res.end();
}

exports.getLigneById = function(args, res, next) {
  /**
   * Find ligne by ID
   * Returns a single ligne
   *
   * ligneId Long ID of ligne to return
   * returns inline_response_200_1
   **/
   Ligne.findOne({ _id:args.ligneId.value }).select().exec(function(err, ligne){
     if(err){
         res.status(500).json(err).end();
         return;
     }

     res.json({
         ligne: ligne
     }).end();
   });
}

exports.updateLigne = function(args, res, next) {
  /**
   * Met à jour un ligne existant
   *
   *
   * body Body_6 description d'un ligne à ajouter a la base de données
   * no response value expected for this operation
   **/
   Ligne.findOneAndUpdate({_id:args.body.value.id}, {$set:{factureId:args.body.value.factureId, quantity:args.body.value.quantity, price:args.price.value, description:args.description.value}}, {new: true}, function(err, ligne){
         if(err){
           res.status(500).json(err).end();
           return;
         }

         res.json({
             ligne: ligne
         }).end();
     });
}

exports.updateLigneWithForm = function(args, res, next) {
  /**
   * Updates a ligne in the store with form data
   *
   *
   * ligneId Long ID of ligne that needs to be updated
   * factureId Long
   * quantity Integer
   * price Double
   * description String
   * no response value expected for this operation
   **/
   Ligne.findOneAndUpdate({_id:args.ligneId.value}, {$set:{factureId:args.factureId.value, quantity:args.quantity.value, price:args.price.value, description:args.description.value}}, {new: true}, function(err, ligne){
         if(err){
           res.status(500).json(err).end();
           return;
         }

         res.json({
             ligne: ligne
         }).end();
     });
}
