
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SongSchema = new Schema({
	
	name: {
		type: String
	},
	trackNumber: {
		type: Number
	}
});


var Song = mongoose.model("Song", SongSchema);


module.exports = Song;