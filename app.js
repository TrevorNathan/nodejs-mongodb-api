
//########## EXPRESS MODULE #######################
const express = require("express");

//create express app:
const app = express();

//##############################################



//########### MORGAN MODULE ###################
//import morgan: see paths in terminal:
const morgan = require('morgan');

//use middleware:
app.use(morgan("dev"));

//#############################################



//########## DOTENV MODULE ####################
//import dotenv: access db credentials securely:
const dotenv = require('dotenv');
//to use .env, need to invoke .config method:
dotenv.config();

//############################################



//######### DB CONNECTION ###################
//import mongoose: connect to mongodb:
const mongoose = require('mongoose');

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

//to use a local DB:
//MONGO_URI=mongodb://localhost/nodeapi

//################################################



//############-ADD-ROUTES-##########################
//export routes:
const postRoutes = require("./routes/post");

//add routes middleware:
app.use("/", postRoutes);

//###################################################



//##########-SERVE-APP-WITH-A-PORT####################
//use port from .env:
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("The app is running here: http://localhost:8080");
});

//######################################################