const mongoose = require('mongoose');
require('dotenv').config()

const URI = "mongodb+srv://" + process.env.dbUser + ":" + process.env.password + "@" + process.env.clusterName + ".9xewa.mongodb.net/" + process.env.dbName + "?retryWrites=true&w=majority";
const connectDB = async () => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log('db connected..!');
};

module.exports = connectDB;