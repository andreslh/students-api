// eslint-disable-next-line no-unused-vars
const dotenv = require('dotenv');

require('dotenv').config();

module.exports = {
  development: {
    username: process.env.USERNAME_DEV,
    password: process.env.PASSWORD_DEV,
    database: process.env.DATABASE_DEV,
    host: process.env.HOST_DEV,
    dialect: process.env.DIALECT_DEV,
  },
};
