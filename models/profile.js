var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProfileSchema = new Schema({
	date	: String,
	user	: String,
	aboutme : String,
	fav1	: String,
	fav2	: String,
	fav3 	: String,
	gen1 	: String,
	gen2	: String,
	gen3	: String
	
});



module.exports = mongoose.model('Profile', ProfileSchema);