/**
 * Serving up Node.js application with Express
 */
var express = require('express');
var app = express();
var path = require('path');
//Port as defined by Heroku, else local
var port = process.env.PORT || 5000;
app.set('port', port);
//Server static file
app.get('/', function appGet(req, res)) {
	res.sendFile(path.join(__dirname + '/index.html'));
}):
//Listen on chosen port
app.listen(port, function appListen() {
	console && console.log('Serving static page on port: ' + port);
});