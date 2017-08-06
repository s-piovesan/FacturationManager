'use strict';

var Facture = require('../models/facture');

exports.addFacture = function(args, res, next) {
  /**
   * Ajoute une nouvelle facture
   *
   *
   * body Body_5 description d'une facture à ajouter a la base de données
   * no response value expected for this operation
   **/
   var facture = new Facture(args.body.value);
        facture.save(function(err){
            if(err){
                res.status(500).json(err).end();
                return;
            }

            res.json({
                facture: facture
            }).end();
        })
}

exports.deleteFacture = function(args, res, next) {
  /**
   * Deletes a facture
   *
   *
   * factureId Long Facture id to delete
   * api_key String  (optional)
   * no response value expected for this operation
   **/
   Facture.find({ _id:args.factureId }).remove(function(){res.json({"deleted":true})});
   res.end();
}

exports.getFactureById = function(args, res, next) {
  /**
   * Find facture by ID
   * Returns a single facture
   *
   * factureId Long ID of facture to return
   * returns inline_response_200_1
   **/
   Facture.findOne({ _id:args.factureId.value }).select().exec(function(err, facture){
     if(err){
         res.status(500).json(err).end();
         return;
     }

     res.json({
         facture: facture
     }).end();
   });
}

exports.updateFacture = function(args, res, next) {
  /**
   * Met à jour un facture existant
   *
   *
   * body Body_4 description d'un facture à ajouter a la base de données
   * no response value expected for this operation
   **/
   Facture.findOneAndUpdate({_id:args.body.value.id}, {$set:{designation:args.body.value.status}}, {new: true}, function(err, facture){
         if(err){
           res.status(500).json(err).end();
           return;
         }

         res.json({
             facture: facture
         }).end();
     });
}

exports.updateFactureWithForm = function(args, res, next) {
  /**
   * Updates a facture in the store with form data
   *
   *
   * factureId Long ID of facture that needs to be updated
   * status String
   * no response value expected for this operation
   **/
   Facture.findOneAndUpdate({_id:args.factureId.value}, {$set:{status:args.status.value}}, {new: true}, function(err, facture){
         if(err){
           res.status(500).json(err).end();
           return;
         }

         res.json({
             facture: facture
         }).end();
     });
}
