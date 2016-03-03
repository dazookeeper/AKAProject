var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin@ds017248.mlab.com:17248/heroku_6v7wv7qw');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
   console.log("Connected to Mongoose!");
});



/////////

var hbs = require('handlebars');
var fs = require('fs');

var partialsDir = __dirname + '/views/partials';

var filenames = fs.readdirSync(partialsDir);

filenames.forEach(function (filename) {
    var matches = /^([^.]+).hbs$/.exec(filename);
    if (!matches) {
        return;
    }
    var name = matches[1];
    var template = fs.readFileSync(partialsDir + '/' + filename, 'utf8');
    hbs.registerPartial(name, template);
});




////////////
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
var aws = require('aws-sdk');

var registration = require('./routes/registration');
var accountrecovery = require('./routes/accountrecovery');


var about = require('./routes/about');
var artists = require('./routes/artists');
var review = require('./routes/review');

var reviewSubmit = require('./routes/reviewSubmit');
var editSubmit = require('./routes/editSubmit');
var editSubmitReview = require('./routes/editSubmitReview');

var contact = require('./routes/contact');
var profile = require('./routes/profile');
var editprofile = require('./routes/editprofile');
var editreview = require('./routes/editreview');
var index = require('./routes/index');
var shortcodes = require('./routes/shortcodes');
var artist = require('./routes/artist');

var reviewLoad= require ('./routes/reviewLoad');
var editProfileLoad = require ('./routes/editProfileLoad');

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
app.get('/editreview', editreview.view);
app.get('/index', index.view);
app.get('/shortcodes', shortcodes.view);
app.get('/artist/:name', artist.viewArtist);
app.get('/artist2/:name', artist.viewArtist2);
// app.get('/artist/porter-robinson', artists.viewPorterRobinson);
// app.get('/artist/taylor-swift', artists.viewTaylorSwift);
// app.get('/artist/kanye-west', artists.viewKanyeWest);
app.get('/registration', registration.view);
app.get('/accountrecovery', accountrecovery.view);
app.get('/reviewLoad', reviewLoad.loadReview);
app.get('/editProfileLoad', editProfileLoad.loadProfile);
app.post('/reviewSubmit', reviewSubmit.loadReview);
app.post('/editSubmit', editSubmit.pushProfile);
app.get('/editSubmitReview', editSubmitReview.pushReview);


//var AWS_ACCESS_KEY = "AKIAIPRY7BNMDBLMN6AA";
var AWS_ACCESS_KEY ="AKIAIQFJM4WHXN5BLE7Q";
//var AWS_SECRET_KEY = "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";
var AWS_SECRET_KEY = "XWii/4G1yycLI6qqKtgGCdIx9tLdfVJHAuyaC5/0";
var S3_BUCKET = "akaimages";



app.get('/sign_s3', function(req, res){
    aws.config.update({accessKeyId: AWS_ACCESS_KEY, secretAccessKey: AWS_SECRET_KEY});
    console.log(aws.config);
    var s3 = new aws.S3();
    var s3_params = {
        Bucket: S3_BUCKET,
        Key: req.query.file_name,
        Expires: 60,
        ContentType: req.query.file_type,
        ACL: 'public-read'
    };
    console.log(s3_params);
    s3.getSignedUrl('putObject', s3_params, function(err, data){
        if(err){
            console.log("wtf");
            console.log(err);
        }
        else{
            console.log("Jake for VP");
            var return_data = {
                signed_request: data,
                url: 'https://'+S3_BUCKET+'.s3.amazonaws.com/'+req.query.file_name
            };
            res.write(JSON.stringify(return_data));
            res.end();
        }
    });
});












// delete this line if NOT using socket.io
var io = require('socket.io').listen(server);   





server.listen(app.get('port'), function(){
   console.log('Express server on port ' + app.get('port'));
});









// var router = express.Router();
// router.use(function(req, res, next) {
// 	console.log('Something is happening.');
// 	next();
// });

// router.get('/', function(req, res) {
// 	var query = Experience.find({}).limit(10);
// 	query.exec(function (err, docs) {
// 		if (err) {
// 			throw Error;
// 		}
// 		res.render('review', {Experience: docs});
// 	});
// }); 
// app.use('/', router);