const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
    {
        customer:{ // Points to the customer model
            type: Schema.Types.ObjectId, 
            ref: 'customer',
            required: false
        }, 
        worker:{ // Points to the worker model
            type: Schema.Types.ObjectId, 
            ref: 'worker',
            required: false
        },
        service:{ // Points to the service model
            type: Schema.Types.ObjectId, 
            ref: 'service',
            required: false
        },
        price:{
            type: Number,
            required: false
        }, 
        grading:{
            type: Number,
            required: false
        }, 
        comments:{
            type: String,
            required: false
        }
    }
)

const orderModel = mongoose.model('order', OrderSchema);
module.exports = orderModel;