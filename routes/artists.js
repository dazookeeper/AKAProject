// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res) {
	res.render('artists', data);
};

exports.viewArtists = function(req, res) {
	var name = req.params.name;
	//console.log("This project has a name of: "+name);
	res.render('artists', {
		'name': name
	});
};