/*
 * GET home page.
 */

exports.view = function(req, res){
  // res.render('profile');
  var MongoClient = require('mongodb').MongoClient;
  MongoClient.connect('mongodb://admin:admin@ds013908.mongolab.com:13908/heroku_qmhr9291', function (err, db) {
        if (!err) {
            db.collection('Profile', function (err, collection) {
                if (!err) {
                    collection.find({"user": "temporary"}).toArray(function(err, results) {
                        db.close();
                        res.render('profile', {'profileinfo': results[0]});
                    }); 
                }
            })
        }
    });


};


