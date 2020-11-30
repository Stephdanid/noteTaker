// Dependencies

var express = require("express");
var path = require("path");

// Sets up the Express App

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.get("/", function(req, res) {
    // res.send("note home page")
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", function(req, res) {
    // res.send("notetaking page")
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("/api/notes", function(req, res) {
    // res.send("json file")
    res.sendFile(path.join(__dirname, "/db/db.json"));
});

app.post("/api/notes", function(req, res) {
    // res.send("json file")
    res.sendFile(path.join(__dirname, "/db/db.json"));
});


app.delete("/api/notes/:id", function(req, res) {
    // res.send("json file")
    res.sendFile(path.join(__dirname, "/db/db.json"));
});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});