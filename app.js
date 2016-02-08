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
var albums = require('./routes/albums');
var contact = require('./routes/contact');
var features = require('./routes/features');
var index = require('./routes/index');
var shortcodes = require('./routes/shortcodes');

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
app.get('/albums', albums.view);
app.get('/contact', contact.view);
app.get('/features', features.view);
app.get('/index', index.view);
app.get('/shortcodes', shortcodes.view);

// delete this line if NOT using socket.io
var io = require('socket.io').listen(server);   

server.listen(app.get('port'), function(){
   console.log('Express server on port ' + app.get('port'));
});