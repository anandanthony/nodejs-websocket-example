var express = require('express')
var ws = require('./ws')
var port = process.env.PORT || 3000;

var app = express()

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/ws.html');
})

app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})
