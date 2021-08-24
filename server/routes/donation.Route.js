const express = require('express');
const donationRoutes =express.Router();

// let RTNCartProduct = require('../models/RTNcart.model');
// let RTNrecord = require('../models/RTNrecord.model');

//add product to RTN cart
donationRoutes.route('/addProductRTN').post(function(req,res){
    let addProduct = new RTNCartProduct(req.body);
    addProduct.save()
        .then(addProduct=>{
            RTNCartProduct.find(function(err,products){
                if(err){
                    console.log(err);
                }
                else{
                    res.json(products);
                }
            });
        })
        .catch(err=>{
            res.status(400).send("unable to save database");
        });
});

donationRoutes.route('/viewCart').get(function(req,res){
    RTNCartProduct.find(function(err,products){
        if(err){
            console.log(err);
        }
        else{
            res.json(products);
        }
    });
});
//delete RTN item
donationRoutes.route('/deleteRTNitem/:id').delete(function(req,res){
    RTNCartProduct.findOneAndDelete({"_id":req.params.id}, function(error,item){
        if(error){
            console.log('a');
            console.log(error);
        }
        else{
            RTNCartProduct.find(function(err,products){
                if(err){
                    console.log(err);
                }
                else{
                    res.json(products);
                }
            });
        }
    })
  })
  //submit RTN cart
  donationRoutes.route('/submitRTN').post(function(req,res){
    let addRTN = new RTNrecord(req.body);
    addRTN.save()
        .then(addRTN=>{
            res.status(200).json({'record':addRTN});
        })
        .catch(err=>{
            res.status(400).send("unable to save database");
        });
});
//delete RTN cart after submit
donationRoutes.route('/deleteRTNcart').delete(function(req,res){
    RTNCartProduct.remove({},function(error,item){
        if(error){
            console.log('a');
            console.log(error);
        }
        else{
            RTNCartProduct.find(function(err,products){
                if(err){
                    console.log(err);
                }
                else{
                    res.json(products);
                }
            });
        }
    })
  })

  //view RTN history
  donationRoutes.route('/viewRTN').get(function(req,res){
    RTNrecord.find(function(err,records){
        if(err){
            console.log(err);
        }
        else{
            res.json(records);
        }
    }).sort('-_id');
});
//view RTN history range
donationRoutes.route('/viewRTNrange/:start/:end').get(function(req,res){
    RTNrecord.find({'createdAt':{$gte:new Date(req.params.start),$lt:new Date(req.params.end)}},
        function(err,records){
        if(err){
            console.log(err);
        }
        else{
            console.log(records);
            res.json(records);
        }
    }).sort('-_id');
});
module.exports=RTNproductRoutes;