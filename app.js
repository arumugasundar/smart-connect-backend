const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser')
const dotenv = require('dotenv');
dotenv.config();

const auth = require('./routes/auth');
const dashboard = require('./routes/dashboard');

const app = express();
const MONGO_DB_URL = process.env.MONGO_DB_URL;

mongoose.connect(MONGO_DB_URL
  ,{useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to Database!');
  })
  .catch((err) =>{
    console.log('Connection Failed!',err);
  });

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","*");
    res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, PUT, DELETE, OPTIONS")
    next();
});

app.get('/', (req,res,next) => {
    res.send('smart-connect-backend app is running!');
});

app.use('/api/auth',auth);
app.use('/api/dashboard',dashboard);

module.exports = app;