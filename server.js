var express = require("express");
var path  = require("path");
var app = express();
var bodyParser = require('body-parser');
var NetflixRoulette = require('netflix-roulette');
var Yelp = require('yelp');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static(path.join(__dirname, './client')));
//app.use(express.static(path.join(__dirname, './client/js')));
//app.use(express.static(path.join(__dirname, './client/static/partials')));


//requires mongoose
require('./server/config/mongoose.js');//for mongoose usage
require('./server/config/routes.js')(app);

app.listen(5000, function(){
	console.log('party on 5000')
});
