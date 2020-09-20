
const express = require('express');
const postController = require('../controllers/post');

/**
 * OR:odirectly export methods:
 * const {getPosts, createPost} =  require('../controllers/post');
 */

const router = express.Router();

router.get("/", postController.getPosts);

//create post route:
router.post("/post", postController.createPost);

module.exports = router;

