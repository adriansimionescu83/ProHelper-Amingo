const express = require('express');
const router = express.Router();
const TestimonialModel = require('../models/Testimonials.js');

router.post(
    '/new',
    (req, res)=>{
        const formdata = {
            customer: req.body.customer,
            worker: req.body.worker,
            order: req.body.order,
            date: req.body.date,
            description: req.body.description,
            }
        const newTestimonialModel = new TestimonialModel(formdata);
        newTestimonialModel.save();
        res.send('Testimonial is created');
    }
);

router.get(
    '/all',// http://www.myapp.com/testimonial/all
    (req, res)=>{

        TestimonialModel
        .find()
        .then((results)=>{
            res.json(
                {
                    msg:'Here are your testimonials', 
                    results: results
                }
            );
        })   
    }
);



module.exports = router;