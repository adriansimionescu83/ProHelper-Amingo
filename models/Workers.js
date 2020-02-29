const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkerSchema = new Schema(
    {
        firstname:{
            type: String,
            required: true
        }, 
        lastname:{
            type: String,
            required: true
        },
        dateofbirth:{
            type: Date, 
            required: false
        },
        email:{
            type: String,
            required: true
        }, 
        password:{
            type: String,
            required: true
        }, 
        phonenumber:{
            type: Number,
            required: false
        },
        photo:{
            type: String,
            required: true
        },
       orders: [{
            type: Schema.Types.ObjectId, 
            ref: 'order' 
                     }]
    }
)

const workerModel = mongoose.model('worker', WorkerSchema);
module.exports = workerModel;