/*
 * GET home page.
 */

exports.view = function(req, res){
  // res.render('profile');
  var MongoClient = require('mongodb').MongoClient;
  MongoClient.connect('mongodb://admin:admin@ds017248.mlab.com:17248/heroku_6v7wv7qw', function (err, db) {
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


