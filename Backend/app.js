const express = require("express");
const app = express();
const error = require('./Middlewares/error');
const rou = require('./Routes/Routes');

app.use(express.json());
app.use('/api/v1',rou);
app.use(error);

module.exports = app;