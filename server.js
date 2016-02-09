var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();
var PORT = process.env.PORT || 8090;



//middleware 

function myLoggingMiddleware(req, res, next){
    var url = request.url;
    var method = request.method;

    console.log("%s request at %s", url, method);
    next();
}

app.use(bodyParser.urlencoded({extended: false}));
app.use(myLoggingMiddleware);
app.use(session({
    secret: 'my super secret',
    cookie: {maxAge: 60000},
    saveUninitialiazed: true,
    resave: false
}));


app.use(express.static("public"));
app.use(express.static("views"));


app.get('/', function(req,res){
    res.sendFile(process.cwd() + '/views/homepage.html');
});

app.get('/about', function(req, res){
    res.sendFile(process.cwd() + '/views/about.html');
});

app.get('/works', function(req, res){
    res.sendFile(process.cwd() + '/views/works.html');
});

app.get('/sayhi', function(req, res){
    res.sendFile(process.cwd() + '/views/sayhi.html');
});

app.get('/rpsgame', function(req, res){
    res.sendFile(process.cwd() + '/views/rps.html');
});

app.listen(PORT, function(req,res){
    console.log('server is listening on port %s', PORT)
});