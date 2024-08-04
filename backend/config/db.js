const mongoose = require('mongoose');
const config = require('./config');

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(config.mongoURI, {
        serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
        socketTimeoutMS: 45000,          // Increase socket timeout to 45 seconds
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  };

module.exports = connectDB;
