var express = require('express');
var request = require('request');
var app = express();

const PORT_NUM = 4200;
var stocksUrl = "http://finance.google.com/finance";
var albumsUrl = "https://itunes.apple.com/search";
var postUrl = "http://httpbin.org/post";
var jokesUrl = "https://api.chucknorris.io/jokes/search";

if (appStartedInTestMode()) {
  switchToTesUrls();
}
// This endpoint is a gateway for calling the httpbin test apis.
app.use('/post', function(req, res) {
    req.pipe(request.post({ url: postUrl}), {end: false}).pipe(res);
});

// This endpoint is a gateway for calling the itunes service.
app.use('/albums', function(req, res) {
  var url = albumsUrl + req.url;
  req.pipe(request(url)).pipe(res);
});


// This endpoint is a gateway for calling the Chuck Norris jokes api.
app.use('/jokes', function(req, res) {
  var url = jokesUrl + req.url.substring(1);
  req.pipe(request(url)).pipe(res);
});

app.listen(PORT_NUM, function () {
  console.log(`Listening on port ${PORT_NUM}`);
});

app.use(express.static("./"));

// -- private --
function appStartedInTestMode() {
  if (process.argv.length > 2) {
    const arg3 = process.argv[2];
    if (arg3.startsWith('-') && (arg3.substring(1)) == 'test' ) {
      return true;
    }
  }
}

function switchToTesUrls() {
  const BOMBAYJS_URL = 'http://localhost:3039/';
  jokesUrl = BOMBAYJS_URL + 'jokes';
  albumsUrl = BOMBAYJS_URL + 'albums';
}
