var express = require('express');
var request = require('request');
var app = express();

// This endpoint is a gateway for calling the itunes service.
app.use('/api', function(req, res) {  
  var url = "https://itunes.apple.com/search" + req.url;
  req.pipe(request(url)).pipe(res);
});

// This endpoint is a gateway for calling the google finance api.
app.use('/finance', function(req, res) {
  var url = "http://finance.google.com/finance" + req.url;
  req.pipe(request(url)).pipe(res);
});

app.listen(4200, function () {
  console.log('Listening on port 4200');
});

app.use(express.static("./"));
