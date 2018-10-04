const express = require('express');
const app = express();

app.use(require('./v1/index.js'));

module.exports = app;