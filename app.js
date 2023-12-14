const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors())
// for preflighting read more https://www.npmjs.com/package/cors
app.options('*', cors())

app.use('/', indexRouter);
app.use('/api', usersRouter);

module.exports = app;
