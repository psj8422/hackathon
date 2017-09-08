var express = require("express")

var app = express();

var ejs = require('ejs');

app.set('views', __dirname+'/views')

app.set('view engine', 'html');

app.engine('html', ejs.renderFile);

app.get('/', function(req, res){


res.render('index.html')


})

var server = app.listen(3000, function(){


console.log('http://start')

})