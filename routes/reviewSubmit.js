exports.loadReview = function (req, res){
	console.log("loadReviewloadReview");
	console.log(req.body);
	var MongoClient = require('mongodb').MongoClient;
	MongoClient.connect('mongodb://admin:admin@ds013908.mongolab.com:13908/heroku_qmhr9291', function(err,db) {
		if(err) throw err;

		db.collection('Experience').insert(req.body);
	});


	//data would be in req.body

}