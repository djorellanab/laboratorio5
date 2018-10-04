const express = require('express');
const app = express();

app.use(require('/api','./api/index.js'));

module.exports = app;