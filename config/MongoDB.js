const mongoose =require('mongoose');

const connectDB = async () => {
    try {
        const db= await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
        console.log(`Connected to MongoDB : ${db.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(`Error occured while connecting to MongoDB : ${error.message}`.red.bold);
        process.exit(1);
    }
};

module.exports = connectDB;