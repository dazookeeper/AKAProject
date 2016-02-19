/**
 * Created by arnoldchen on 2/18/16.
 */
var editProfile = require('../public/profile.json');
exports.edit = function(req, res) {
    // Your code goes here
    // editProfile['Favorite1']=res.query.fav1;
    // editProfile['Favorite2']=res.query.fav2;
    // editProfile['Favorite3']=res.query.fav3;
    // editProfile['Venue1']=res.query.venue1;
    // editProfile['Venue2']=res.query.venue2;
    // editProfile['Venue3']=res.query.venue3;
    // editProfile['Genre1']=res.query.genre1;
    // editProfile['Genre2']=res.query.genre2;
    // editProfile['Genre3']=res.query.genre3;
    // editProfile['Mood1']=res.query.mood1;
    // editProfile['Mood2']=res.query.mood2;
    // editProfile['Mood3']=res.query.mood3;
    //editProfile['AboutMe']=res.query.aboutme;
    //console.log(editProfile['AboutMe']);


    res.json(editProfile);
}