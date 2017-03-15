const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const todoRouter = require('./todo/todoAppRouter');

const app = express();
app.use(cors());
app.options('*', cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/todo/', todoRouter);

// todo add port (3004)
module.exports = app;
