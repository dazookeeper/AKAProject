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
    
    // RENDER 3 - aeri
   /*
    MongoClient.connect('mongodb://admin:admin@ds017248.mlab.com:17248/heroku_6v7wv7qw', function (err, db) {
        if (!err) {
            db.collection('artist', function (err, collection) {
                if (!err) {
                    collection.find({"name": artist}).toArray(function(err, results) {
                        console.log(results[0].reviews);
                        db.close();
                        res.render('artist', {'totalReview': results[0].reviews});
                    }); 
                }
            })
        }
    });*/

    MongoClient.connect('mongodb://admin:admin@ds017248.mlab.com:17248/heroku_6v7wv7qw', function (err, db) {
        if (!err) {
            //console.log("We are connected");
            db.collection('artist', function (err, collection) {
                if (!err) {
                    collection.find({"name": artist}).toArray(function (err, docs) {
                        if (!err) {
                            db.close();
                           // console.log(docs[0].reviews);
                            var string = '{"totalReview":'+JSON.stringify(docs[0].reviews)+'}';
                            res.render('artist2', JSON.parse(string));
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
    //res.render('artist', {'name': name});
};