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
//Listen on chosen port
app.listen(port, function appListen() {
	console.log('Serving static page on port: ', port);
	console.log('Test config var: ', process.env.TESTVAR);
});