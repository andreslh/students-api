const express = require('express');
const studentsRouter = require('./students');

const apiRouter = express.Router();

apiRouter.use('/students', studentsRouter);

module.exports = apiRouter;