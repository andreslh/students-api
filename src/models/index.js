'use strict';

const Sequelize = require('sequelize');
const config = require('../../config');
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password, {
    host: config.host,
    dialect: config.dialect
  }
);

const models = [
	require('./student.js'),
	require('./filter.js'),
];
  
models.forEach((modelFunction) => {
  const model = modelFunction(sequelize);
  db[model.name] = model;
});

module.exports = db;
