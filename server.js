let express = require("express");
let path = require("path");

let app = express();
const PORT = process.env.PORT || 3000;

let friends = require("./app/data/friend.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("app/public"));


// Routes
// =============================================================
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get("/match", function (req, res) {
    res.send("hi there");
});

// Displays all characters
app.get("/api/friends", function (req, res) {
    return res.json(friends);
});

// Create New Friends
app.post("/api/friends", function(req, res) {
    let newFriend = req.body
    friends.push(newFriend);
    res.json(newFriend);
});








app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});