// Import all the necessary npm modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);


// Import models for db operations
const CustomerModel = require('./models/Customers.js');
const OrderModel = require('./models/Orders.js');
const ServiceModel = require('./models/Services.js');
const TestimonialModel = require('./models/Testimonials.js');
const WorkerModel = require('./models/Workers.js');


// Import routes 
const CustomerRoutes = require('./routes/Customers.js');
const OrderRoutes = require('./routes/Orders.js');
const ServiceRoutes = require('./routes/Services.js');
const TestimonialRoutes = require('./routes/Testimonials.js');
const WorkerRoutes = require('./routes/Workers.js');
const cors = require ('cors');


// Configure express to parse BODY
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

// Connect to our database
const dbURL = "mongodb+srv://admin:P@ssw0rd@cluster0-5ujxi.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(
    dbURL,
    {useNewUrlParser: true, useUnifiedTopology: true}
)
.then(
   ()=>{ // Sorry, not this tim
       console.log('DB is connected')
   } 
).catch(
    ()=>{
        console.log('No response from mongoose')
    }
)

app.use(
    '/customer', //http://www.tracker.com/customer
    CustomerRoutes // routes/Customer.js
);

app.use(
    '/worker', //http://www.tracker.com/worker
    WorkerRoutes // routes/Worker.js
);

app.use(
    '/orders', //http://www.tracker.com/order
    OrderRoutes // routes/Customer.js
);

app.use(
    '/services', //http://www.tracker.com/services
    ServiceRoutes // routes/Customer.js
);

app.use(
    '/testimonials', //http://www.tracker.com/testimonials
    TestimonialRoutes // routes/Testimonials.js
);

app.get(
    '/',  // http://www.tasker.com/
    (req, res)=>{
        res.send("<h1 style='color:blue'>Welcome Home</h1>");
    }
);

app.get(
    '*',
    (req, res)=>{
        res.send("<h1 style='color:black'>404 Not found</h1>");
    }
);


// Listen to the port
app.listen(
    4010, // connect to this port
    () => {
        console.log('you are connected');
    } // do this when you're connected
);


