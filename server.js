
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var appDB = require('./productDB');

app.use(express.static(__dirname + '/app'));
app.use(bodyParser.json());

app.post("/loginuser", function(req, res) {
	console.log(req.body);

	appDB.checkLogin(req.body.email, req.body.pass, function(result) {
		console.log("callback result " + result);

		res.end(result);
	});
});

app.post("/signupuser", function(req, res){
	console.log(req.body);

	appDB.registerUser(req.body.email, req.body.pass, function(result){
		console.log("callback result " + result);
		res.end(result);
	});
	
});

app.post("/saveproduct", function(req, res){
	console.log(req.body);

	res.end("1");
});

app.get("/*", function(req, res) {
	res.sendFile(__dirname + "/app/index.html");
});

var port = 8080;
app.listen(port, function() {
	console.log("App live at port: " + port);
});
