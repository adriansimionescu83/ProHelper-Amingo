const express = require('express');
const router = express.Router();
const TestimonialModel = require('../models/Testimonials.js');

router.post(
    '/new',
    (req, res)=>{
        const formdata = {
            title: req.body.title,
            description: req.body.description,
            image: req.body.image              
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
                    msg:'Here are your Testimonials', 
                    results: results
                }
            );
        })   
    }
);



module.exports = router;