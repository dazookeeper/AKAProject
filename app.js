var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin@ds013908.mongolab.com:13908/heroku_qmhr9291');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
   console.log("Connected to Mongoose!");
});
var Experience = require('./models/experience');



var express = require('express');
var app = express();
var favicon = require('serve-favicon');
var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');
var bodyParser = require('body-parser');
var multer = require('multer');
var errorHandler = require('errorhandler');
var http = require('http');
var server = http.createServer (app);
var path = require('path');
var handlebars = require('express3-handlebars');

var registration = require('./routes/registration');
var accountrecovery = require('./routes/accountrecovery');


var about = require('./routes/about');
var artists = require('./routes/artists');
var review = require('./routes/review');
var contact = require('./routes/contact');
var profile = require('./routes/profile');
var editprofile = require('./routes/editprofile');
var index = require('./routes/index');
var shortcodes = require('./routes/shortcodes');
var artist = require('./routes/artist');


var reviewLoad= require ('./routes/reviewLoad');
var editProfileLoad = require ('./routes/editProfileLoad');
var editSubmit = require('./routes/editSubmit');


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(methodOverride());
app.use(session({ resave: true, saveUninitialized: true, 
                  secret: 'uwotm8' }));
// parse application/json
app.use(bodyParser.json());                        
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse multipart/form-data
//app.use(multer());
app.use(express.static(path.join(__dirname, 'public')));
// development only
if ('development' == app.get('env')) {
  app.use(errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/about', about.view);
app.get('/artists', artists.view);
app.get('/review', review.view);
app.get('/contact', contact.view);
app.get('/profile', profile.view);
app.get('/editprofile', editprofile.view);
app.get('/index', index.view);
app.get('/shortcodes', shortcodes.view);
// app.get('/artist/:name', artist.viewArtist);
app.get('/artist/porter-robinson', artists.viewPorterRobinson);
app.get('/artist/taylor-swift', artists.viewTaylorSwift);
app.get('/artist/kanye-west', artists.viewKanyeWest);
app.get('/registration', registration.view);
app.get('/accountrecovery', accountrecovery.view);
app.get('/reviewLoad', reviewLoad.loadReview);
app.get('/editProfileLoad', editProfileLoad.loadProfile);
app.get('/editSubmit', editSubmit.edit);
// delete this line if NOT using socket.io
var io = require('socket.io').listen(server);   

server.listen(app.get('port'), function(){
   console.log('Express server on port ' + app.get('port'));
});