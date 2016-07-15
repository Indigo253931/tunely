// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
var db = require('./models');
// generate a new express app and call it 'app'
var app = express();
//var mongoose = require("mongoose");
var bodyParser = require('body-parser');

//mongoose.connect("mongodb://localhost/tunely_test");

//var Album = require('./album');
//var Song = require('./song');
//var models = require('./models');
//var genre_array = req.body.genre;

// serve static files from public folder

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
/************
 * DATABASE *
 ************/




/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});



/*
 * JSON API Endpoints
 */

app.get('/api', function api_index (req, res){
  res.json({
    message: "Welcome to tunely!",
    documentation_url: "https://github.com/tgaff/tunely/api.md",
    base_url: "http://tunely.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api/albums", description: "Describes available endpoints"}
    ]
  });
});

app.get('/api/albums', function album_index(req, res){
db.Album.find({}, function(err, albums){
res.json(albums);
});
});

app.get('/api/albums/:id', function albumShow(req, res){
console.log('requested album id=', req.params.id);
db.Album.findOne({_id: req.params.id}, function(err, album){
res.json(album);
});
});

app.post('/api/albums', function create(req, res){
var newAlbum = req.body;
var genres = newAlbum.genres.split(",");
newAlbum.genres = genres;

db.Album.create(newAlbum, function(err, album) {
    if (err) { 
      res.send('error' + err); }
    res.json(album);
});
});

app.post('/api/albums/:albumId/song', function songsCreate(req, res){
  console.log('body', req.body);
  db.Album.findOne({_id: req.params.albumId}, function(err, album){
if (err) { console.log('error', err);
var song = new db.Song(req.body);
album.songs.push(song);
album.save(function(err, savedAlbum){
  if (err) { console.log('error', err);}
  console.log('album with new song saved:', savedAlbum);
      res.json(song);
});
}
});

app.delete('/api/albums/:id', function deleteAlbum(req, res){
console.log('delete id: ', req.params.id);
db.Album.remove({_id: req.params.id}, function(err){
if (err) { return console.log(err); }
console.log("removal" + req.params.id + " successful.");
res.status(200).send();
});
});
//module.exports.Album = Album;
//module.exports.Song = Song;

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function() {
  console.log('Express server is running on http://localhost:3000/');
});
});
