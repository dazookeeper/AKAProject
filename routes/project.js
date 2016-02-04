exports.viewProject = function(req, res) {
	var name = req.params.name;
	console.log("This project has a name of: "+name);
	res.render('project', {
		'projectName': name
	});
};