const express = require('express');
const router = express.Router();
const ServiceModel = require('../models/Services.js');

router.post(
    '/new',
    (req, res)=>{
        const formdata = {
            name: req.body.name,
            category: req.body.category,
            city: req.body.city,
            country: req.body.country,
            description: req.body.description,
            workers: req.body.workers,
            image: req.body.image,
        }
        const newServiceModel = new ServiceModel(formdata);
        newServiceModel.save();
        res.send('Service is created');
    }
);

router.get(
    '/all',// http://www.myapp.com/order/all
    (req, res)=>{

        ServiceModel
        .find()
        .then((results)=>{
            res.json(
                {
                    msg:'Here are your orders', 
                    results: results
                }
            );
        })   
    }
);



module.exports = router;