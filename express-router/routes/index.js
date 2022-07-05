const express = require('express');
const alphaRouter = require('./alpha');
const betaRouter = require('./beta');

const mainRouter = express();

mainRouter.use('/alpha', alphaRouter);
mainRouter.use('/beta', betaRouter);

module.exports = mainRouter

