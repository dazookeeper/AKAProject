exports.pushProfile = function (req, res){
    console.log(req.body);
    var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect('mongodb://admin:admin@ds013908.mongolab.com:13908/heroku_qmhr9291', function(err,db) {
        if(err) throw err;

        // db.collection('Profile', function(err, collection) { if (!err) {
        //         // collection.update(
        //         //     {"date": req.body.date,
        //         //      "user": req.body.user,
        //         //      "aboutme": req.body.aboutme,
        //         //      "fav1": req.body.fav1,
        //         //      "fav2": req.body.fav2,
        //         //      "fav3": req.body.fav3,
        //         //      "gen1": req.body.gen1,
        //         //      "gen2": req.body.gen2,
        //         //      "gen3": req.body.gen3
        //         // 	});                

        //         db.close();
        //     } else {
        //         throw err;
        //     }
        //     });

        // db.collection.find({"user": "temporary"}).delete();
        if (!err) {
            db.collection('Profile', function (err, collection) {
                if (!err) {
                    collection.findOne().remove();
                    console.log("SUCCESSFULLY REMOVED FROM PROFILE");
                }
            });
        }

        db.collection('Profile').insert(req.body);
    });


    //data would be in req.body

}