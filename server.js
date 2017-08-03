// Dependencies
var express = require("express");
var app = express();

var PORT = 3000;

// Define GET route to return welcome message

app.get("/", function(req, res) {
    res.send("Welcome to the Peak");
});

app.listen(PORT, function() {
    console.log(`Listening on PORT ${PORT}`)
});