var express = require('express');
var app = express();

var filePath = __dirname+"/views/index.html";

app.get("/", function(req, res){
    res.sendFile(filePath);
});




































 module.exports = app;
