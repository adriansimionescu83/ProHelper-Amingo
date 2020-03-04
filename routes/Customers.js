const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const customerModel = require('../models/Customers.js');
const jwt = require ('jsonwebtoken');
const secret = 'theSecret100!'; //process.env.SECRET needs to be changed

router.post(
    '/register', // http://www.myapp.com/customer/register
    (req, res)=>{

        const formdata = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password, 
            order: req.body.order,
            phonenumber: req.body.phonenumber,
            dateofbirth: req.body.dateofbirth
        }

        const theCustomerModel = new customerModel(formdata);

        // Step 1. Generate a salt
        bcrypt.genSalt(
            (err, salt)=>{
                // Step 2. Generate the hashed password
                bcrypt.hash(
                    formdata.password, //password
                    salt, //generated salt
                    (err, hashedPassword)=>{

                        // Step 3. Replace the password value in formdata
                        theCustomerModel.password = hashedPassword; //myPass123 is now $2b$10$H5IXXYWXx

                        // Step 4. Save to database
                        theCustomerModel.save();
                        res.send("Customer registration complete")

                    }// how we handle the new hased password
                )
            }
        )
    }
)

router.post(
    '/login', // http://www.myapp.com/customer/login
    (req, res)=>{
        const formdata = {
            email: req.body.email,
            password: req.body.password
        }

        // Step 1. Check to see if email exists
        customerModel
        .find({ email:  formdata.email})
        .then((isMatch)=>{
            // Step 2. If exists, check password
            if(isMatch.length>0) {
                // Step 3. Compare their password with database
                bcrypt
                .compare(formdata.password, isMatch[0].password)
                .then(
                   (passwordMatch)=>{
                       if(passwordMatch){
                        const payload = {
                            id: isMatch[0].id,
                            email: isMatch[0].email
                        }
                        // Step 4. Generate JWT
                        jwt.sign(
                            payload,
                            secret,
                            (err, theJWT)=>{
                    // Step 5. Send it to the client
                                res.json({token: theJWT})
                            }
                        )
                    }else{
                        res.send('Please check email and password')
                    }
                }
                )
                    // Step 6. Exit 

            }
            // Step 2.b If use doesn't exist, exit
            else {
                res.send('Please check email and password')
            }
        })
    }
);


router.get(
    '/all',// http://www.myapp.com/customers/all
    (req, res)=>{
        customerModel
        .find()
        .then((results)=>{
            res.json(
                {
                    msg:'Here are your customers', 
                    results: results
                }
            );
        })   
    }
);


module.exports = router;