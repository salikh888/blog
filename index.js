var express = require('express');

var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

var arr = ['hello', 'world', 'test'];

app.get('/', function (req, res) {
    res.render('index', {arr: arr});
});

app.get('/create', function (req, res) {
    res.render('create');
});

app.post('/create', function (req, res) {
    console.log(req.body);
    arr.push(req.body.text);
    res.redirect('/');
});

app.listen(3000, function (){
    console.log('Слушаем порт 3000')
});