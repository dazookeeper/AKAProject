/**
 * Created by arnoldchen on 2/18/16.
 */
var editProfileLoad = require('../public/profile.json');

exports.loadProfile = function(req, res) {
    //var name = req.params.name;
    //console.log("dsfsd");
    // console.log(reviewLoad['artist']);
   // var oneArtist= reviewLoad['artist'];
    //console.log(oneArtist[0]);
    res.json(editProfileLoad);
    //console.log("This project has a name of: "+name);
};