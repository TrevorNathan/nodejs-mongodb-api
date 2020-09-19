
exports.getPosts = (req, res) => {
    res.json({
        posts: [
            {"title":"This is 1st post"},
            {"title": "This is the 2nd post"},
            {"title": "This is the 3rd post"}
        ]
    });
};
