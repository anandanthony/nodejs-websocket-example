var express = require('express')
var ws = require('./ws')
var port = process.env.PORT || 3000;

var app = express()

var server = require('http').createServer(app);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/ws.html');
})

server.listen(port, function () {
  console.log('Example app listening on port 3000! - test-1')
})
