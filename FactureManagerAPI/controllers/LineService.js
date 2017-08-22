'use strict';

var Line = require('../models/invoiceLine');
var Product = require('../models/product');
var Customer = require('../models/customer');
var Invoice = require('../models/invoice');

exports.addLine = function(args, res, next) {
  /**
   * Ajoute une nouvelle line
   *
   *
   * body Body_7 description d'une line à ajouter a la base de données
   * no response value expected for this operation
   **/
   var line = new Line(args.body.value);
        line.save(function(err){
            if(err){
                res.status(500).json(err).end();
                return;
            }

            res.json({
                line: line
            }).end();
        })
}

exports.deleteLine = function(args, res, next) {
  /**
   * Deletes a line
   *
   *
   * lineId Long Line id to delete
   * api_key String  (optional)
   * no response value expected for this operation
   **/
   Line.find({ _id:args.lineId }).remove(function(){res.json({"deleted":true})});
   res.end();
}

exports.getLineById = function(args, res, next) {
  /**
   * Find line by ID
   * Returns a single line
   *
   * lineId Long ID of line to return
   * returns inline_response_200_1
   **/
   Line.findOne({ _id:args.lineId.value }).select().exec(function(err, line){
     if(err){
         res.status(500).json(err).end();
         return;
     }

     res.json({
         line: line
     }).end();
   });
}

exports.updateLine = function(args, res, next) {
  /**
   * Met à jour un line existant
   *
   *
   * body Body_6 description d'un line à ajouter a la base de données
   * no response value expected for this operation
   **/
   Line.findOneAndUpdate({_id:args.body.value.id}, {$set:{factureId:args.body.value.factureId, quantity:args.body.value.quantity, price:args.price.value, description:args.description.value}}, {new: true}, function(err, line){
         if(err){
           res.status(500).json(err).end();
           return;
         }

         res.json({
             line: line
         }).end();
     });
}

exports.updateLineWithForm = function(args, res, next) {
  /**
   * Updates a line in the store with form data
   *
   *
   * lineId Long ID of line that needs to be updated
   * factureId Long
   * quantity Integer
   * price Double
   * description String
   * no response value expected for this operation
   **/
   Line.findOneAndUpdate({_id:args.lineId.value}, {$set:{factureId:args.factureId.value, quantity:args.quantity.value, price:args.price.value, description:args.description.value}}, {new: true}, function(err, line){
         if(err){
           res.status(500).json(err).end();
           return;
         }

         res.json({
             line: line
         }).end();
     });
}

exports.addLineForProductAndCustomer = function(args, res, next) {
  /**
   * Add  a line for the selected product and the selected customer
   *
   *
   **/

Customer.findOne({_id:args.customerId.value}).select().exec(function(err, customer){
  if(err){
      res.status(500).json(err).end();
      return;
  }
  Product.findOne({_id:args.productId.value}).select().exec(function(err, product){
    if(err){
        res.status(500).json(err).end();
        return;
    }
    if (product){
      Invoice.findOne({customerId:args.customerId.value,status:"under_construction" }).select().exec(function(err, invoice){
        if(err){
            res.status(500).json(err).end();
            return;
        }
        var now = new Date()
        var dayDate = now;
        if (!invoice){

          var firstDayMonth = new Date(now.getFullYear(), now.getMonth(),1);
          var lastDayMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

          invoice = new Invoice();

          invoice.customerId=args.customerId.value;
        	invoice.number= "TODO";
        	invoice.creation_date = dayDate;
        	invoice.start_period = firstDayMonth;
        	invoice.end_period = lastDayMonth;
          invoice.status = "under_construction"

          invoice.save(function(err){
            if(err){
              res.status(500).json(err).end();
              return;
            }

            var invoiceLine = new Line();
            invoiceLine.invoiceId= invoice._id;
            invoiceLine.productId = product._id;
          	invoiceLine.description=  product.description;
          	invoiceLine.quantity =  1;
            invoiceLine.price =  product.price;

            invoiceLine.save(function(err){
              if(err){
                res.status(500).json(err).end();
                return;
              }
              res.json({
                  invoiceLine: invoiceLine
              }).end();
            })
          })
        }else{
          var startDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0,0,0)
          var endDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23,59,59)

          Line.findOneAndUpdate({invoiceId:invoice._id,productId:args.productId.value,creationDate: {$gte:startDay,$lte:endDay}}, {$inc: {quantity: 1}}).select().exec(function(err, line){
           if(err){
               res.status(500).json(err).end();
               return;
           }

           if (!line){
            var invoiceLine = new Line();
            invoiceLine.invoiceId= invoice._id;
            invoiceLine.productId = product._id;
            invoiceLine.description=  product.description;
            invoiceLine.quantity =  1;
            invoiceLine.price =  product.price;

            invoiceLine.save(function(err){
              if(err){
                res.status(500).json(err).end();
                return;
              }
              res.json({
                 invoiceLine: invoiceLine
              }).end();
            })
          }else{
            res.json({
                invoiceLine: line
            }).end();
          }

         });
        }
      });
    }
  });
});
}
