var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/productdb";

MongoClient.connect(url, function(err, db) {
  
	console.log(">> db connected.");

  	if(!err) {

		/*db.collection("Users").drop(function(err, delOK) {
		    if (err) throw err;
		    if (delOK) console.log("Users deleted");
		  });

		db.collection("Product").drop(function(err, delOK) {
		    if (err) throw err;
		    if (delOK) console.log("Product deleted");
		  });*/

		db.collection("User").find({}).toArray(function(err, result) {
		    if (err) throw err;
		    console.log(">> Users Collection: ");
		    console.log(result);
		  });

		db.collection("Product").find({}).toArray(function(err, result) {
		    if (err) throw err;
		    console.log(">> Product Collection: ");
		    console.log(result);
		  });

		db.close();
  }
  else
  {
  	console.log(err);
  }
  

});