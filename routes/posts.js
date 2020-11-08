const Router = require('express').Router();
const upload =require('../config/Multer');

const {getPosts, postPost, getPost , deletePost} =require('../controllers/posts');

Router
    .route('/')
        .get(getPosts)
        .post(upload.single('postimage'),postPost)

Router
    .route('/:id')
        .get(getPost)
        .delete(deletePost)

module.exports=Router;