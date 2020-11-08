const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const path= require('path')
const morgan=require('morgan');
const posts =require('./routes/posts');
const connectDB = require('./config/MongoDB');

//creating express app and config file
const app = express();
app.use(express.json());
dotenv.config({ path: './config/config.env' });
connectDB();


app.use('/posts',posts)
app.use('/postimages', express.static(__dirname + '/postimages'));
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
  }
//starting server
const PORT= process.env.PORT || 5000 ;
app.listen(PORT,() => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
});



