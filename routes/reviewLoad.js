/**
 * Created by arnoldchen on 2/11/16.
 */
var reviewLoad = require('../data.json');


var MongoClient = require('mongodb').MongoClient;



exports.loadReview = function(req, res) {
    /*//var name = req.params.name;
    console.log("dsfsd");
   // console.log(reviewLoad['artist']);
    var oneArtist= reviewLoad['artist'];
    console.log(oneArtist[0]);
    res.json(oneArtist[0]);
    //console.log("This project has a name of: "+name);*/

    //console.log('EugeneEatsCOWS1111!!\n');


    // Connect to the db

    MongoClient.connect("mongodb://admin:admin@ds017248.mlab.com:17248/heroku_6v7wv7qw", function(err, db) {
        if(!err) {
            console.log("We are connected");
            db.collection('artist', function(err, collection) { if (!err) {
                collection.find().toArray(function(err, docs) {
                    if (!err) {
                        db.close();
                        /*var intCount = docs.length;
                        if (intCount > 0) {
                            var strJson = "";
                            for (var i = 0; i < intCount;) {
                                strJson += '{"name":"' + docs[i].name + '","image":"' + docs[i].image + '","id":"' +
                                    docs[i].id;
                                    //review fields need to do more loops
                                strJson=strJson+'"}';
                                i = i + 1;
                                if (i < intCount) {
                                    strJson += ',';
                                }
                            }
                            strJson = '[' + strJson + ']';
                            //res("", JSON.parse(strJson));
                            res.json(JSON.parse(strJson));
                            console.log(strJson);
                            }
                            */
                        res.json(JSON.parse(JSON.stringify(docs)));
                        //console.log(JSON.stringify(docs));
                    } else {
                        throw err;
                    }
                }); //end collection.find
            } else {
                throw err;
            }
            }); //)
        }
    });

};
