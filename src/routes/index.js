const express = require('express');
const studentsRouter = require('./students');
const filtersRouter = require('./filters');

const apiRouter = express.Router();

apiRouter.use('/students', studentsRouter);
apiRouter.use('/filters', filtersRouter);

module.exports = apiRouter;