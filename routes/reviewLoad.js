/**
 * Created by arnoldchen on 2/11/16.
 */
var reviewLoad = require('../data.json');

exports.loadReview = function(req, res) {
    //var name = req.params.name;
    console.log("dsfsd");
   // console.log(reviewLoad['artist']);
    var oneArtist= reviewLoad['artist'];
    console.log(oneArtist[0]);
    res.json(oneArtist[0]);
    //console.log("This project has a name of: "+name);
};