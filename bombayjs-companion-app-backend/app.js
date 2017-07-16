var express = require('express');
var request = require('request');
var app = express();

const PORT_NUM = 4200;

// This endpoint is a gateway for calling the itunes service.
app.use('/albums', function(req, res) {  
  var url = "https://itunes.apple.com/search" + req.url;
  req.pipe(request(url)).pipe(res);
});

// This endpoint is a gateway for calling the google finance api.
app.use('/finance', function(req, res) {
  var url = "http://finance.google.com/finance" + req.url;
  console.log('++hdd++ req.url = ' + req.url);
  req.pipe(request(url)).pipe(res);
});

// This endpoint is a gateway for calling bombayjs endpoints
app.use('/testfinance', function(req, res) {
  var url = "http://localhost:3039/finance" + req.url;
  req.pipe(request(url)).pipe(res);
});

app.listen(PORT_NUM, function () {
  console.log(`Listening on port ${PORT_NUM}`);
});

app.use(express.static("./"));
