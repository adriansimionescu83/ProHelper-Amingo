const express = require('express');
const router = express.Router();
const OrderModel = require('../models/Orders.js');

router.post(
    '/new',
    (req, res)=>{
        const formdata = {
            customer: req.body.customer,
            worker: req.body.worker,
            service: req.body.service,
            price: req.body.price,
            grading: req.body.grading,
            comments: req.body.comments
        }
        const newOrderModel = new OrderModel(formdata);
        newOrderModel.save();
        res.send('Order is created');
    }
)

router.get(
    '/all',// http://www.myapp.com/orders/all
    (req, res)=>{
        OrderModel
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
)



module.exports = router;