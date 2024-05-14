require('dotenv').config();
const express =require("express");
const connectDB = require('./database.js');
const cors =require("cors");// cross origin rquest  allowed


// init connect to database//

const app =express();
connectDB();

// Express middleware//
//----------- it excute before rquest--------//

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());

// -------
const userRoutes =require('./userRoutes.js');


app.use('/',userRoutes);
module.exports =app;