// eslint-disable-next-line no-unused-vars
const dotenv = require('dotenv');

require('dotenv').config();

const env = process.env.NODE_ENV || 'development';

const config = {};
switch (env) {
  case 'test': // TODO: test environment
    config.username = process.env.USERNAME_TEST;
    config.password = process.env.PASSWORD_TEST;
    config.database = process.env.DATABASE_TEST;
    config.host = process.env.HOST_TEST;
    config.dialect = process.env.DIALECT_TEST;
    break;
  default: // development
    config.username = process.env.USERNAME_DEV;
    config.password = process.env.PASSWORD_DEV;
    config.database = process.env.DATABASE_DEV;
    config.host = process.env.HOST_DEV;
    config.dialect = process.env.DIALECT_DEV;
    break;
}

module.exports = config;