module.exports = mongoose.model('Song', songSchema);

var Schema = mongoose.Schema;


var songSchema = new Schema({
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
