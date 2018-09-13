var MongoClient = require('mongodb').MongoClient(new Server("localhost", 27017), {native_parser: true});

MongoClient.connect(function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
