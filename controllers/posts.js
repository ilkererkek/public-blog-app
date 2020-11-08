const Post = require('../models/Post');
const { post } = require('../routes/posts');

//@desc   Get All Posts
//@route  GET /posts
//@access Public
exports.getPosts = async (req,res,next) => {
    try {
        const posts = await Post.find().sort({"createdAt": -1});
        return res.status(200).json({
            success: true,
            data: posts,
            count: posts.length
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};


//@desc   Create A New Post
//@route  POST /posts
//@access Public
exports.postPost = async (req,res,next) => {
    
   try {
    let postjson = req.body;
    
     if(req.file)
     {
         
         postjson={
             ...postjson,
             imageurl:req.file.path
         }
     }
     const post = await Post.create(postjson);
     return res.status(201).json(
         {
             success:true,
             data:post
         }
     )
   } catch (error) {
       if(error.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);

      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
   }
};

//@desc   Get Single Posts
//@route  GET /posts/:id
//@access Public
exports.getPost = async (req,res,next) => {
    try {
        const post = await  Post.findById(req.params.id);
        if(!post)
        {
            return res.status(404).json(
                {
                    success:false,
                    error:'No post found with specific id.'
                }
            );
        }
        return res.status(200).json({
            success:true,
            data:post
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

//@desc   Delete Post
//@route  DELETE /posts/:id
//@access Public
exports.deletePost = async (req,res,next) => {
    try {
        const post = await Post.findById(req.params.id);
        if(!post)
        {
            return res.status(404).json(
                {
                    success:false,
                    error:'No post found with specific id.'
                }
            );
        }
        post.remove();
        return res.status(200).json({
            success:true,
            data:{}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};