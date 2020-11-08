const mongoose = require('mongoose');

const PostSchema = new  mongoose.Schema({
    header: {
        type:String,
        trim: true,
        required: [true, 'Please add a header']
    },
    author: {
        type:String,
        required: [true, 'Please add an author name']
    },
    text: {
        type:String,
        required: [true, 'Please add text']
    },
    imageurl: {
        type:String,
        default:null
    },
    createdAt: {
        type: Date,
        default: Date.now
      }
})

module.exports= mongoose.model('Post',PostSchema);