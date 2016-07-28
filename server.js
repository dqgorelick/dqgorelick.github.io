var express = require("express");
var app = express();
var path = require("path");
var port = process.argv[2] || 8080;

app.use(express.static(__dirname));
app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
app.listen(port, function() {
    console.log("[ SERVER ] Hosting server on port " + port);
});



