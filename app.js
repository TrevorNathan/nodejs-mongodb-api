
//######## IMPORT MODULES #######################
const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const postRoutes = require("./routes/post");

//########## USE EXPRESS #######################
//const express = require("express");

//create express app:
const app = express();

//##############################################



//########### USE MORGAN ###################
//Helps to see paths in terminal:
//const morgan = require('morgan');

//use middleware:
app.use(morgan("dev"));

//#############################################


//########## USE DOTENV ####################
//import dotenv: access db credentials securely:
// const dotenv = require('dotenv');

//to use .env, need to invoke .config method:
dotenv.config();

//############################################



//######### USE MONGOOSE | DOTENV ###################
//import mongoose: connect to mongodb:
// const mongoose = require('mongoose');

//######### USE MONGOOSE | DOTENV ###################

/*
//fix connection errors:
mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

//connect to DB with mongoose package:
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("SUCCESS! DB connected"));

//create a callback:
mongoose.connection.on("error", err => {
    console.log('Ooh! FAILED Connection error: ${err.message}');
});
*/

//to use a local DB:
//MONGO_URI=mongodb://localhost/nodeapi

//Refactor-code:
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
},
err => {
    if(err == null){
        console.log("SUCCESS! DB connected");
    }else
    {console.log("Error", err)}
});

//################################################



//############-USE-ROUTES-##########################
// const postRoutes = require("./routes/post");

//add routes middleware:
app.use("/", postRoutes);

//###################################################


//############-USE-BODYPARSER-##########################
//used to pass body as a json
// const bodyParser = require('body-parser');

//add routes middleware:
app.use(bodyParser.json());

//###################################################

app.use(expressValidator());

//##########-APP-PORT | USE DOTENV ####################
//use port from .env:
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`The app is running on port ${port}`);
});

//######################################################