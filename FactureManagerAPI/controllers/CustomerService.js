'use strict';

var Customer = require('../models/customer');

exports.addCustomer = function(args, res, next) {
  /**
   * Ajoute un nouveau customer
   *
   *
   * body Body_3 description d'un customer à ajouter a la base de données
   * no response value expected for this operation
   **/

   var customer = new Customer(args.body.value);
        if (customer.address == null || customer.zipcode == null  || customer.city == null || customer.name == null ){
            res.status(405).json({error:"Invalid input"}).end();
            return;
        }else{
          customer.save(function(err){
              if(err){
                  res.status(500).json(err).end();
                  return;
              }

              res.json({
                  customer: customer
              }).end();
          })
        }


  //res.end();
}

exports.deleteCustomer = function(args, res, next) {
  /**
   * Deletes a customer
   *
   *
   * customerId Long Customer id to delete
   * api_key String  (optional)
   * no response value expected for this operation
   **/

   Customer.find({ _id:args.customerId.value }).remove(function(err){
     if(err){
         res.status(500).json(err).end();
         return;
     }

     res.json({"deleted":true}).end();
   });
}

exports.getCustomerById = function(args, res, next) {
  /**
   * Find customer by ID
   * Returns a single customer
   *
   * customerId Long ID of customer to return
   * returns inline_response_200_1
   **/
   Customer.findOne({ _id:args.customerId.value }).select().exec(function(err, customer){
     if(err){
         res.status(500).json(err).end();
         return;
     }

     res.json({
         customer: customer
     }).end();
   });

}

exports.updateCustomer = function(args, res, next) {
  /**
   * Met à jour un customer existant
   *
   *
   * body Body_2 description d'un customer à ajouter a la base de données
   * no response value expected for this operation
   **/
  Customer.findOneAndUpdate({_id:args.body.value._id}, {$set:{name:args.body.value.name, address:args.body.value.address, zipcode:args.body.value.zipcode, city:args.body.value.city}}, {new: true}, function(err, customer){
        if(err){
          res.status(500).json(err).end();
          return;
        }

        res.json({
            customer: customer
        }).end();
    });
}

exports.updateCustomerWithForm = function(args, res, next) {
  /**
   * Updates a customer in the store with form data
   *
   *
   * customerId Long ID of customer that needs to be updated
   * name String Updated name of the customer (optional)
   * address String Updated address of the customer (optional)
   * cp String Updated cp of the customer (optional)
   * city String Updated city of the customer (optional)
   * no response value expected for this operation
   **/
   Customer.findOneAndUpdate({_id:args.customerId.value}, {$set:{name:args.name.value, address:args.address.value, zipcode:args.zipcode.value, city:args.city.value}}, {new: true}, function(err, customer){
         if(err){
           res.status(500).json(err).end();
           return;
         }

         res.json({
             customer: customer
         }).end();
     });
}
