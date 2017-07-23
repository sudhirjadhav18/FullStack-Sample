
var express = require('express');
var app = express();
var appPath = __dirname + '\\app\\';

app.get("/", function(req, res) {
	res.sendFile(appPath + "index.html");
});

var port = 8080;
app.listen(port, function() {
	console.log("App live at port: " + port);
	//console.log("App Path: " + appPath);
});
