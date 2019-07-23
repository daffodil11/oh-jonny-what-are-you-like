const express = require('express');
const app = express();
const produceReportRouter = require('./route');

app.use(express.json())
app.use('/api', produceReportRouter);

module.exports = app;