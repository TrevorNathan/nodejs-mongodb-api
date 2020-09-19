
const express = require("express");

//import morgan: see paths in terminal:
const morgan = require('morgan');

//import dotenv: access db credentials securely:
const dotenv = require('dotenv');
//to use .env, need to invoke .config method:
dotenv.config();

//import mongoose: connect to mongodb:
const mongoose = require('mongoose');


//create express app:
const app = express();


//connect to DB with mongoose package:
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("SUCCESS! DB connected"));

//create a callback:
mongoose.connection.on("error", err => {
    console.log('Ooh! FAILED Connection error: ${err.message}');
});


//export routes:
const postRoutes = require("./routes/post");

//use middleware:
app.use(morgan("dev"));


//add routes middleware:
app.use('/', postRoutes);


//use port from .env:
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("The app is running here: http://localhost:3000");
});