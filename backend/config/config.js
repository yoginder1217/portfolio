require('dotenv').config();

module.exports = {
  mongoURI: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  saltRounds: parseInt(process.env.SALT_ROUNDS, 10) || 10,
};
