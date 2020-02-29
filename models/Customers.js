const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema(
    {
        firstname:{
            type: String,
            required: false
        }, 
        lastname:{
            type: String,
            required: false
        },
        dateofbirth:{
            type: Date,
            required: false
        },
        email:{
            type: String,
            required: false
        }, 
        password:{
            type: String,
            required: false
        }, 
        phonenumber:{
            type: Number,
            required: false
        },
        orders: [{ // Array with all the orders for that customer
            type: Schema.Types.ObjectId, 
            ref: 'order' 
                     }]
    
    }
)

const customerModel = mongoose.model('customer', CustomerSchema);
module.exports = customerModel;