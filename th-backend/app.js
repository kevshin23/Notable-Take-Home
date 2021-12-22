const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.use(express.json());

//Import Routes
const physiciansRoute = require('./routes/physicians');
const appointmentsRoute = require('./routes/appointments');

app.use('/physicians', physiciansRoute);
app.use('/appointments', appointmentsRoute);

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log('connected to DB!')
});

app.listen(1337);