exports.loadReview = function (req, res){
	//console.log("loadReviewloadReview");
    //console.log(req.body);

	var MongoClient = require('mongodb').MongoClient;
	MongoClient.connect('mongodb://admin:admin@ds017248.mlab.com:17248/heroku_6v7wv7qw', function(err,db) {
        if(!err) {
            console.log("We are connected");
            db.collection('artist', function(err, collection) { if (!err) {
                var string= '{"reviewId":"0000",'+'"author":"'+req.body.user+'",'+'"date":"'+req.body.date+
                        '",'+'"rating":"'+ req.body.quality+'",'+'"reviewImg": "#",'+'"review":"'+
                    req.body.review+'",'+'"summary":"'+req.body.summary+'",'+'"where":"'+req.body.where+'",'+'"emoticon":"'+req.body.mood+'"}';
                var goodJson=JSON.parse(string);
                //console.log(goodJson);
                //console.log(goodJson);
                collection.update(
                    {"name": req.body.who},
                    {$push: {"reviews": goodJson} } 
                ); //end collection.find
                db.close();
            } else {
                throw err;
            }
            }); //)
        }
		//if(err) throw err;
		//db.collection('Experience').insert(req.body);
	});
	//data would be in req.body

}



