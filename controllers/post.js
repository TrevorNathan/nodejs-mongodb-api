
const Post = require("../models/post");

exports.getPosts = (req, res) => {
    res.json({
        posts: [
            {"title":"This is 1st post"},
            {"title": "This is the 2nd post"},
            {"title": "This is the 3rd post"}
        ]
    });
};

exports.createPost = (req, res) => {
    const post = new Post(req.body);
    //console.log("CREATING POST: ", req.body);

    //save to database:
    post.save((err, result) => {
        if(err) {
            return res.status(400).json({
                error: err
            });
        }

        res.status(200).json({
            post: result
        });
    });
};

/**
 * OR:
 * module.exports = {getPosts, createPost}
 */