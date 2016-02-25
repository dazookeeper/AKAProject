exports.pushProfile = function (req, res) {
    
    //console.log(req.body);

    var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect('mongodb://admin:admin@ds017248.mlab.com:17248/heroku_6v7wv7qw', function(err,db) {
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
            db.collection('Profile').remove({}, true);
            //console.log("SUCCESSFULLY REMOVED FROM PROFILE");            
            db.collection('Profile').insert(req.body);
            //console.log("SUCCESSFULLY UPDATED PROFILE");
        }
    });


    //data would be in req.body

}