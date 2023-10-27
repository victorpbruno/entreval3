var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Oi, mundo :-)');
});

var port = 3001;

// iniciando o processo do servidor
app.listen(port, function() {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});

function soma(a, b) {
    return a + b;
  }

function subtrair (a,b){
    return a - b
}

function multi (a,b){
    return a * b
}

function div (a,b){
    return a / b
}

app.post('/soma', function (req, res) {
    var body = req.body;
    var resultado = soma(body.a, body.b);

    res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
});

app.post('/subtrair', function (req, res) {
    var body = req.body;
    var resultado = subtrair(body.a, body.b);

    res.send(`O resultado da subtração de ${body.a} e ${body.b} é ${resultado}`);
});

app.post('/multi', function (req, res) {
    var body = req.body;
    var resultado = multi(body.a, body.b);

    res.send(`O resultado da multiplicação de ${body.a} e ${body.b} é ${resultado}`);
});

app.post('/div', function (req, res) {
    var body = req.body;
    var resultado = div(body.a, body.b);

    res.send(`O resultado da divisão de ${body.a} e ${body.b} é ${resultado}`);
});