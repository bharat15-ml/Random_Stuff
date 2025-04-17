var express = require('express');
var dt = require('./myfirstmodule');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!! '+dt.myDateTime());
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
