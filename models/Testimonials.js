const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestimonialSchema = new Schema(
    {
 /*       customer:{
            type: Schema.Types.ObjectId, 
            ref: 'customer',
            required: false
        }, 
        worker:{
            type: Schema.Types.ObjectId, 
            ref: 'worker',
            required: false
        },
        order:{
            type: Schema.Types.ObjectId, 
            ref: 'order',
            required: false
        },
        */
        description:{
            type: String
        },
        image:{
            type: String
        },
        title:{
            type: String
        } 
    }
)

const testimonialModel = mongoose.model('testimonial', TestimonialSchema);
module.exports = testimonialModel;