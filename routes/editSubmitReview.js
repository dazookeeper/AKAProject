exports.pushReview = function (req, res) {
    
  	res.render('editreview', req.body);
    console.log("HERE");
    console.log(req.body);

    /*
    var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect('mongodb://admin:admin@ds017248.mlab.com:17248/heroku_6v7wv7qw', function(err,db) {
        if (!err) {
            db.collection('Profile').remove({}, true);
            db.collection('Profile').insert(req.body);
        }
    });
		*/
}