var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/userSettings";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    var dbo = db.db("userSettings");
    dbo.createCollection("users", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  });