require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const htmling = require('htmling');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('html', htmling.express(__dirname + '/views/', {watch:true}));
app.set('view engine', 'html');

app.get('/', (req, res) => {
  res.render('index');
});
// play midi
app.get('/piano', (req, res) => {
  res.render('piano');
});
// phone view
app.get('/minim', (req, res) => {
  res.render('minim');
});
// big screen
app.get('/stepseq', (req, res) => {
  // var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  var fullUrl = req.protocol + '://' + req.get('host') + '/minim';
  req.JOIN_URL = fullUrl;
  res.render('crowdsynth');
});

// var pusher = new Pusher({
//   appId: process.env.PUSHID,
//   key: process.env.PUSHKEY,
//   secret: process.env.PUSHSEC
// });
// pusher.port = 443;


// app.post('/pusher/auth', function(req, res) {
//   console.log('auth called', req.body);
//   var socketId = req.body.socket_id;
//   var channel = req.body.channel_name;
//   var auth = pusher.authenticate(socketId, channel);
//   res.send(auth);
// });

app.listen(process.env.PORT || 3001);


