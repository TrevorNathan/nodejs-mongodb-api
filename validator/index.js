
 
exports.createPostValidator = (req, res, next) => {
    //ensure title is not-empty & correct length:
    req.check("title", "Write a title").notEmpty();
    req.check("title", "Title must be bettween 4 to 150 characters").isLength({
        min: 4, 
        max: 150
    });

    //same for body:
    req.check("body", "Your post is empty").notEmpty();
    req.check("body", "The body must be between 4 to 2000 characters").isLength({
        min: 4,
        max: 2000
    });

    //loop through all the errors one by one:
    //get the errors:
    const errors = req.ValidationErrors();

    //if there is error, show first one:
    if(errors){
        const firstError = errors.map((error) => error.msg)[0]
        return res.status(400).json({error: firstError});
    }
    //go to next middleware:
    next();

};