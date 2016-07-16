var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Song = require("./song.js");

var AlbumSchema = new Schema({
	artistName: String,
	name: String,
	releaseDate: String,
	genres: Array,
	songs: [Song.schema]
});



module.exports = mongoose.model('Album', AlbumSchema);
