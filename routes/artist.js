var data = require('../data.json');

exports.viewArtist = function(req, res) {
	var name = req.params.name;
	//console.log("This project has a name of: "+name);
	res.render('artist', {
		'name': name
	});
};