var mbaas = require('fh-mbaas-express');
var express = require('express');
var fh = require('fh-mbaas-api');

var app = express();
app.use('/sys', mbaas.sys([]));
app.use('/mbaas', mbaas.mbaas);
app.use(mbaas.fhmiddleware());
app.use('/hello', require('lib/hello.js')());

app.use('/', function(req, res){
  res.end('Your Cloud App is Running');
});

app.use(mbaas.errorHandler());

var server;

exports.setUp = function(finish){
  var port = 8052;
  server = app.listen(port, function(){
    console.log("App started at: " + new Date() + " on port: " + port);
    finish();
  });
};

exports.tearDown = function(finish) {
  fh.db({
    "act": "close"
  }, function(err) {
    if (server) {
      server.close(function() {
        finish();
      });
    }
  });
};
