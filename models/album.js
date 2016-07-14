var mongoose = require("mongoose");
var Song = require("./song");

var Schema = mongoose.Schema;

var albumSchema = new Schema({
	artistName: "String",
	name: "String",
	releaseDate: "String",
	genres: "String",
	songs: [Song.schema]
});

var songSchema = new Schema({

});



var Album = mongoose.model('Album', albumSchema);

module.exports = Album;
