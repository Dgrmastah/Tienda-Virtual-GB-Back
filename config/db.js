const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const mongoURI= process.env.MONGODB_URI;

const connectDB = async () => {
    try{
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('conectado a mongoDB');
    }catch(err) {
        console.error('Error al conectarse a mongoDB', err);
        process.exit(1);
    }

};
module.exports = connectDB;