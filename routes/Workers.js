const express = require('express');
const router = express.Router();
const WorkerModel = require('../models/Workers.js');

router.post(
    '/new',
    (req, res)=>{
        const formdata = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            dateofbirth: req.body.dateofbirth,
            email: req.body.email,
            password: req.body.password,
            phonenumber: req.body.phonenumber,
            orders: req.body.orders,
            photo: req.body.photo       
            }
        const newWorkerModel = new WorkerModel(formdata);
        newWorkerModel.save();
        res.send('Worker is created');
    }
);

router.get(
    '/all',// http://www.myapp.com/testimonial/all
    (req, res)=>{
        WorkerModel
        .find()
        .then((results)=>{
            res.json(
                {
                    msg:'Here are your workers', 
                    results: results
                }
            );
        })   
    }
);



module.exports = router;