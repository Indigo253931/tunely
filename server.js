// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
var models = require('./models');
// generate a new express app and call it 'app'
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// serve static files from public folder
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
models.Album.find({}, function(err, albums){
res.json(albums);

});
});

app.post('/api/albums', function album_index(req, res){
models.Album.create({}, function(err, albums){
console.log(albums);
res.json(albums);

});
});
/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
