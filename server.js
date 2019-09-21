var express = require("express");
var fs = require('fs');
var bodyParser = require("body-parser");
var path = require('path');

var HTTP_PORT = process.env.PORT || 8080;

var app = express();
app.use(express.static('public'));

app.use(bodyParser.urlencoded({
    extended: true
}));
  
// Initial page (Terms of Service)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

  // setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, function () {
    console.log("Server running on port: " + HTTP_PORT);
});