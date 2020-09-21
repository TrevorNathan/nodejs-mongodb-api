
const express = require('express');
const postController = require('../controllers/post');

//add validator: validate before going to controllers
const validator = require("../validator");


/**
 * OR:odirectly export methods:
 * const {getPosts, createPost} =  require('../controllers/post');
 */

const router = express.Router();

router.get("/", postController.getPosts);

//create post route:
//first validate before creating a post:
router.post("/post", validator.createPostValidator, postController.createPost);

module.exports = router;

