var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tunely");
//var Album = require("./album");
module.exports.Album = require("./album.js");
module.exports.Song = require("./song.js");
