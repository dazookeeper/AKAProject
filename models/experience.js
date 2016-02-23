var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExperienceSchema = new Schema({
	user	: String,
	who		: String,
	where	: String,
	mood : Number,
	emoticon: Number,
	summary	: String,
	review	: String
});

module.exports = mongoose.model('Experience', ExperienceSchema);