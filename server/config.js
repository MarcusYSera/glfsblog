const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  port: process.env.SERVER,
  mongoUser: process.env.MONGODB_USER,
  mongoPassword: process.env.MONGODB_PSW,
  mongoDB: process.env.MONGODB_DB
};