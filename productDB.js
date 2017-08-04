
exports.checkLogin = checkLogin;
exports.registerUser = registerUser;

var COLLECTION_PRODUCT = "Product";
var COLLECTION_USER = "User";

function checkLogin(email, pass, callback) {
	
	connectDB(function(db){
		if(db)
		{
			db.collection(COLLECTION_USER).find({}).toArray(function(err, result){
				if(err){
					console.log(err);
					callback("-1");
				}
				else if(result.length > 0) 
				{
					var foundUser;

					result.forEach(function(item, index){
						if(item.email.toLowerCase() == email.toLowerCase() && item.password == pass){
							foundUser = item;
							return;
						}
					});

					if(foundUser){
						console.log(">> user found");
						console.log(foundUser);
						db.close();
						callback(String(foundUser._id));
					}
					else{
						db.close();
						callback("0");
					}
					
				}
				else
				{
					db.close();
					callback("0");
				}
			});
		}
		else
			callback("-1"); // Error while connection
	});

}

function registerUser(email, pass, callback) {

	connectDB(function(db){
		if(db)
		{			

			db.collection(COLLECTION_USER).find({}).toArray(function(err, result){
				if(err){
					console.log(err);
					callback("-1");
				}
				else {
					var userFound = false;

					result.forEach(function(item){
						if(item.email.toLowerCase() == email.toLowerCase()){
							userFound = true;
							return;
						}
					});

					if(userFound){
						db.close();
						callback("-2"); // user already exists
					}
					else{
						// insert new user record
						var oUser = { email: email, password: pass };

						console.log(">> Inserting");
						console.log(oUser);

						db.collection(COLLECTION_USER).insertOne(oUser, function(err, res){
							if(err)
							{
								console.log(err);
								callback("-1");
							}
							else
							{
								console.log(">> User Registered");
								db.close();
								callback("1");
							}
							
						});
					}
				}
			});
			
		}
		else
			callback("-1"); // Error while connection
	});

}

function connectDB(callback) {
	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/productdb";

	MongoClient.connect(url, function(err, db) {
  
		console.log(">> db connected");

	  	if(!err) {
	  		callback(db);
		  }
		  else
		  {
		  	console.log(err);
		  	callback(false);
		  }
  

	});
}
