// web.js
var express = require("express");
var logfmt = require('logfmt');
var routes = require("./routes");
var http = require("http");
var path = require('path');

var app = express();

app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname, ''));
app.set('view engine', 'jade');
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/'))

app.use(logfmt.requestLogger());

// Handle Errors gracefully
app.use(function(err, req, res, next) {
	if(!err) return next();
	console.log(err.stack);
	res.json({error: true});
});

// Main App Page
app.get('/', routes.index);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});