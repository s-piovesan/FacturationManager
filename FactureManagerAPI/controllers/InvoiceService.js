'use strict';

var Invoice = require('../models/invoice');

exports.addInvoice = function(args, res, next) {
  /**
   * Ajoute une nouvelle invoice
   *
   *
   * body Body_5 description d'une invoice à ajouter a la base de données
   * no response value expected for this operation
   **/
   var invoice = new Invoice(args.body.value);
        invoice.save(function(err){
            if(err){
                res.status(500).json(err).end();
                return;
            }

            res.json({
                invoice: invoice
            }).end();
        })
}

exports.deleteInvoice = function(args, res, next) {
  /**
   * Deletes a invoice
   *
   *
   * invoiceId Long Invoice id to delete
   * api_key String  (optional)
   * no response value expected for this operation
   **/
   Invoice.find({ _id:args.invoiceId }).remove(function(){res.json({"deleted":true})});
   res.end();
}

exports.getInvoiceById = function(args, res, next) {
  /**
   * Find invoice by ID
   * Returns a single invoice
   *
   * invoiceId Long ID of invoice to return
   * returns inline_response_200_1
   **/
   Invoice.findOne({ _id:args.invoiceId.value }).select().exec(function(err, invoice){
     if(err){
         res.status(500).json(err).end();
         return;
     }

     res.json({
         invoice: invoice
     }).end();
   });
}

exports.getCurrentInvoiceByCustomerId = function(args, res, next) {
  /**
   * Find invoice by ID
   * Returns a single invoice
   *
   * invoiceId Long ID of invoice to return
   * returns inline_response_200_1
   **/
   Invoice.findOne({ customerId:args.customerId.value,status:"under_construction" }).select().exec(function(err, invoice){
     if(err){
         res.status(500).json(err).end();
         return;
     }

     res.json({
         invoice: invoice
     }).end();
   });
}

exports.updateInvoice = function(args, res, next) {
  /**
   * Met à jour un invoice existant
   *
   *
   * body Body_4 description d'un invoice à ajouter a la base de données
   * no response value expected for this operation
   **/
   Invoice.findOneAndUpdate({_id:args.body.value.id}, {$set:{designation:args.body.value.status}}, {new: true}, function(err, invoice){
         if(err){
           res.status(500).json(err).end();
           return;
         }

         res.json({
             invoice: invoice
         }).end();
     });
}

exports.updateInvoiceWithForm = function(args, res, next) {
  /**
   * Updates a invoice in the store with form data
   *
   *
   * invoiceId Long ID of invoice that needs to be updated
   * status String
   * no response value expected for this operation
   **/
   Invoice.findOneAndUpdate({_id:args.invoiceId.value}, {$set:{status:args.status.value}}, {new: true}, function(err, invoice){
         if(err){
           res.status(500).json(err).end();
           return;
         }

         res.json({
             invoice: invoice
         }).end();
     });
}
