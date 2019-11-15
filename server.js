const express = require("express");
const app = express();
const session = require('express-session');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/catdogemporioum', {useNewUrlParser: true});

const server = app.listen(8000, () => console.log("still listening on port 8000"));
const io = require('socket.io')(server);

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}) );
app.use(bodyParser.json())

require('./server/config/routes.js')(app)
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/catdog/dist/catdog"));
app.set('views', __dirname + '/views');


app.use(session({
  secret: 'I Solemly swear i am upto no good!',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))


var counter = 0;
    
io.on('connection', function (socket) { 
   socket.on('color',() => io.emit('color',{color:'red'}))
  console.log('someone connected')
  socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' }); //3
  socket.on('thankyou', function (data) { 
    console.log(data.msg); 
  });
    
});








