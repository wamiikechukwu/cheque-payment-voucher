const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

const indexRouter = require('./routes/index');
const usersRouter = require('./api/users');
const cpvRouter = require('./api/cpv');
const api = require('./api/index')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors())
// for preflighting read more https://www.npmjs.com/package/cors
app.options('*', cors())

//index router is redundate
app.use('/', indexRouter);
// app.use('/api', usersRouter);
app.use('/api', api);
// app.use('/api/cpv', cpvRouter);

module.exports = app;
