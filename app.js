
const express = require("express");

const morgan = require('morgan');

const dotenv = require('dotenv');
//to use .env, need to invoke .config method:
dotenv.config();

//create express app:
const app = express();


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