var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var port = process.env.PORT || 3000;

//middlewares
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
}));

//default route respond with index.html file

app.use(express.static(__dirname + "/public"));


//post routes


app.listen(port, function(){
    console.log('server is listening..');
});