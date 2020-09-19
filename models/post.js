const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: "Title is required",
        minlength: 4,
        maxlength: 150
    },
    body: {
        type: String,
        required: "This is required",
        minlength: 4,
        maxlength: 2000
    }
});

//to be acquired in controllers to create a new post:
module.exports = mongoose.model("Post", postSchema);