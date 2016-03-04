/*
 * GET home page.
 */

/*
exports.view = function(req, res){
  res.render('editreview');
};
*/

exports.viewReview = function(req, res) {
    var id = req.url.split('/')[2];
    console.log(id);

    var MongoClient = require('mongodb').MongoClient;

    MongoClient.connect('mongodb://admin:admin@ds017248.mlab.com:17248/heroku_6v7wv7qw', function (err, db) {
        if (!err) {
            db.collection('artist', function (err, collection) {
                if (!err) {
                    collection.find({}).toArray(function (err, docs) {
                        if (!err) {
                            db.close();
                            console.log(docs);
                            var string = "";
                            for (var i = 0; i < docs.length; i++) {
                                for (var j = 0; j < docs[i].reviews.length; j++) {
                                    if (docs[i].reviews[j].reviewId == id)
                                    string = '{"totalObject":'+JSON.stringify(docs[i].reviews[j])+
                                        ',"name":'+JSON.stringify(docs[i].name)+'}';
                                }
                            }                            
                            console.log(string);
                            res.render('editreview', JSON.parse(string));
                        } else {
                            throw err;
                        }
                    });
                } else {
                    throw err;
                }
            });
        }
    });
    
};