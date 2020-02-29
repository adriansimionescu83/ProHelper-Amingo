const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceSchema = new Schema(
    {
        name:{
            type: String,
            required: true
        }, 
        category:{
            type: String,
            required: true
        },
        city:{
            type: String,
            required: true
        },
        country:{
            type: String,
            required: true
        }, 
        description:{
            type: String,
            required: false
        },
        image:{
            type: String,
            required: false
        },
        workers: [{ // Array with all the workers qualified to provide the service
            type: Schema.Types.ObjectId, 
            ref: 'worker' 
                     }]
    }
)

const serviceModel = mongoose.model('service', ServiceSchema);
module.exports = serviceModel;