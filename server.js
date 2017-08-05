// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

var PORT = 3000;

// Allows for adding data via POST method
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var roster = [
    {
        name: "Master Ting",
        stance: "Tiger"
    },
    {
        name: "Master Sha",
        stance: "Ox"
    },
    {
        name: "Master Qi",
        stance: "Crane"
    }
];

// Define GET route to return welcome message

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});

// GET route that returns three students

app.get("/students", function(req, res) {
    res.json(roster);
});

app.get("/students/:rosterId", function(req, res) {
    res.json(roster[
        req.params.rosterId
    ]);
});

app.post("/add", function(req, res) {
    console.log(req.body);
    if (req.body.name) {
        roster.push(req.body);
        res.send("Student added");
    } else {
        console.log("Please enter a valid data entry.");
    }
});

app.listen(PORT, function() {
    console.log(`Listening on PORT ${PORT}`)
});