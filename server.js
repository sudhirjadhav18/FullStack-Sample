
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var appDB = require('./productDB');

app.use(express.static(__dirname + '/app'));
app.use(bodyParser.json());

app.post("/api/loginuser", function(req, res) {
	console.log(req.body);

	appDB.checkLogin(req.body.email, req.body.pass, function(result) {
		console.log("callback result " + result);

		res.end(result);
	});
});

app.post("/api/signupuser", function(req, res){
	console.log(req.body);

	appDB.registerUser(req.body.email, req.body.pass, function(result){
		console.log("callback result " + result);
		res.end(result);
	});
	
});

app.post("/api/saveproduct", function(req, res){
	console.log(req.body);

	appDB.saveProduct(req.body, function(result){
		console.log("save product callback result: " + result);
		res.end(result);
	});

	res.end("1");
});

app.get("/api/product", function(req, res) {
	appDB.getProduct(false, function(result) {
		//console.log(result);
		res.end(JSON.stringify(result));
	});

});

app.get("/api/product/:id", function(req, res) {
	appDB.getProduct(req.params.id, function(result) {
		console.log(result);
		res.end(JSON.stringify(result));
	});

});

app.delete("/api/product/:id", function(req, res) {
	appDB.deleteProduct(req.params.id, function(result) {
		console.log(result);
		res.end(result);
	});

});

app.get("/*", function(req, res) {
	res.sendFile(__dirname + "/app/index.html");
});

var port = 8080;
app.listen(port, function() {
	console.log("App live at port: " + port);
});
