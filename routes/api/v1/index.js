const express = require('express');
const app = express();

app.use(require('./alimento.js'));

module.exports = app;