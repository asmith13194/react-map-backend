'use strict';

const express = require('express');
const app = express();
const places = require('./routes/places');
const users = require('./routes/users');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');
const port = process.env.PORT || 8000;

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

app.use(morgan());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors())

app.use('/places',places);
// app.use(users);

app.use('/', (req,res,next)=>{
  res.sendStatus(404);
});

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
