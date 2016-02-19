exports.view = function(req, res){
  res.render('artists');
};

exports.viewTaylorSwift = function(req, res){
	res.render('taylorswift');
};
exports.viewPorterRobinson = function(req, res){
	res.render('porterrobinson');
};
exports.viewKanyeWest = function(req, res){
	res.render('kanyewest');
};