const express = require('express');
const app = express();

app.use(require('./api/index.js'));

module.exports = app;