
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/app'));
app.use(bodyParser.json());

app.post("/loginuser", function(req, res) {
	console.log(req.body);

	if(req.body.email == "sudhirjadhav@gmail.com" && req.body.pass == "password123")
		res.end("1");
	else
		res.end("0");
});

app.post("/signupuser", function(req, res){
	console.log(req.body);

	res.end("1");
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
	//console.log("dir Path: " + __dirname); 
});
