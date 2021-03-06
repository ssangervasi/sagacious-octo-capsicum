/**
 * Serving up Node.js application with Express
 */
var express = require('express');
var app = express();
//Port as defined by Heroku, else local
var port = process.env.PORT || 5000;
app.set('port', port);
//
app.use(express.static(__dirname + '/dist'));
//Server static file
app.get('/', function appGet(req, res) {
	res.sendFile('index.html');
});