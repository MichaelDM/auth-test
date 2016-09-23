const express = require('express');
const app = express();
const morgan = require('morgan');
const http = require ('http');
const bodyParser = require('body-parser');
const routes = require('./routes');
const mongoose = require('mongoose');

//Database connection
mongoose.connect('mongodb://localhost:27017/test');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('We are connected to database!');
});

//Middleware
app.use(bodyParser.json());
app.use(morgan('combined'));

// Routing
routes(app);

//Server
const server = http.createServer(app);
server.listen(3024, function () {
  console.log('Backend server listening on port 3024!');
});
