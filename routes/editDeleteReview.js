exports.deleteReview = function (req, res) {
    var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect('mongodb://admin:admin@ds017248.mlab.com:17248/heroku_6v7wv7qw', function(err,db) {
        if (!err) {
            db.collection('artist', function(err, collection) { 
                if (!err) {
                    collection.find({}).toArray(function (err, docs) {
                        if (!err) {
                            var id = req.body.reviewId;
                            var findArtist = "";
                            var findReview = "";

                            for (var i = 0; i < docs.length; i++) {
                                for (var j = 0; j < docs[i].reviews.length; j++) {
                                    if (docs[i].reviews[j].reviewId == id) {
                                        findArtist = docs[i]._id;
                                        findReview = docs[i].reviews[j];
                                    }
                                }
                            }
                            collection.update( { _id: findArtist },
                                {
                                    $pull: {
                                        reviews: findReview
                                    }
                                }
                            );
                            console.log("REMOVED SUCCESSFULLY!"); 
                        } 
                        else {
                            throw err;
                        }
                    });
                } 
                else {
                    throw err;
                }
            });
        }
    });
}