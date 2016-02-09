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
var handlebars = require('express3-handlebars')

var about = require('./routes/about');
var artists = require('./routes/artists');
var review = require('./routes/review');
var contact = require('./routes/contact');
var profile = require('./routes/profile');
var index = require('./routes/index');
var shortcodes = require('./routes/shortcodes');
var TS = require('./routes/artists');

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
app.get('/index', index.view);
app.get('/shortcodes', shortcodes.view);
app.get('/artists/:name', artists.viewArtists);
app.get('/taylor-swift', TS.viewTS);

// delete this line if NOT using socket.io
var io = require('socket.io').listen(server);   

server.listen(app.get('port'), function(){
   console.log('Express server on port ' + app.get('port'));
});