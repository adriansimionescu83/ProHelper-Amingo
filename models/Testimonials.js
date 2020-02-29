const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestimonialSchema = new Schema(
    {
        customer:{
            type: Schema.Types.ObjectId, 
            ref: 'customer',
            required: true
        }, 
        worker:{
            type: Schema.Types.ObjectId, 
            ref: 'worker',
            required: true
        },
        order:{
            type: Schema.Types.ObjectId, 
            ref: 'order',
            required: false
        },
        description:{
            type: String, 
            required: true
        },
        date:{
            type: Date,
            default: Date.now
        }, 
    }
)

const testimonialModel = mongoose.model('testimonial', TestimonialSchema);
module.exports = testimonialModel;