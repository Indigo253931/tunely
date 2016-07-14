
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sampleSongsSchema = new Schema({
	
	name: {
		type: String
	},
	artist: {
		type: String
	},
	album: {
		type: String
	
	},
	genre: {
		type: String
	},
	year: {
		type: String
	}
});


var sampleSongs = mongoose.model("Songs", sampleSongsSchema);


module.exports = sampleSongs;