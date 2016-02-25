//var reviewLoad = require('../data.json');
//var data = require('../data.json');

exports.viewArtist = function(req, res) {
    var name = req.params.name;
    //res.json(data[0]);
    //console.log("This project has a name of: "+name);
    var artist = req.url.split('/')[2];
    var firstName = artist.split('-')[0];
    var lastName = artist.split('-')[1];
    artist = firstName.slice(0, 1).toUpperCase() + firstName.slice(1) + ' ' +
        lastName.slice(0, 1).toUpperCase() + lastName.slice(1);
    console.log(artist);
    //collection.find({"name": artist})(function(err, docs) {
    var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect('mongodb://admin:admin@ds013908.mongolab.com:13908/heroku_qmhr9291', function (err, db) {
        if (!err) {
            //console.log("We are connected");
            db.collection('artist', function (err, collection) {
                if (!err) {
                    collection.find({"name": artist}).toArray(function (err, docs) {
                        if (!err) {
                            db.close();
                           // console.log(docs[0].reviews);

                            var string = '{"reviews":'+JSON.stringify(docs[0].reviews)+'}';
                            /*
                            *
                            *
                            *  HERE is RENDER 1
                            *
                            *
                            * */
                            return
                            res.render('review', JSON.parse(string));

                        } else {
                            throw err;
                        }
                    }); //end collection.find
                } else {
                    throw err;
                }
            }); //)
        }
        //if(err) throw err;
        //db.collection('Experience').insert(req.body);
    });

    /*
    *
    *
    *
    * HERE is RENDER 2
    *
    *
    * */
    //console.log(artist);
    res.render('artist', {'name': name});
};