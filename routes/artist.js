//var reviewLoad = require('../data.json');
var data = require('../data.json');

exports.viewArtist = function(req, res) {
    var name = req.params.name;
    //res.json(data[0]);
    //console.log("This project has a name of: "+name);
    res.render('artist', {
        'name': name
    });
};