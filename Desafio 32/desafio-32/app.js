'use strict';

var express = require('express');
var cors = require('cors');
var app = express();
var port = process.env.PORT || 3000;
var routes = require('./routes');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', function(req, res) {
  res.json({ message: 'hi' });
});

app.use('/car', routes);

app.listen(port, function() {
  console.log('Listening on port http://localhost:%d', port);
});
