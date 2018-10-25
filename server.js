let express = require("express");
let path = require("path");

let app = express();
const PORT = process.env.PORT || 3000;

let friends = require("./app/data/friend.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("app/public"));

let scoreArray = [];
let bestIndex;


// Routes
// =============================================================
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get("/match", function (req, res) {
    // res.json(friends[bestIndex]);
    res.send(`<html><body><h1>You're best match is</h1><br><h3>${friends[bestIndex].name}</h3><br><img src="${friends[bestIndex].photo}"</body></html>`)
});

// Displays all friends
app.get("/api/friends", function (req, res) {
    return res.json(friends);
});

// Create New Friends
app.post("/api/friends", function (req, res) {
    let newFriend = req.body
    let o = 0
    friends.push(newFriend);
    res.json(newFriend);
    // Find the best match
    friends.forEach(function () {
        let score = 0;
        for (let i = 0; i < newFriend.scores.length; i++) {
            if (parseInt(newFriend.scores[i]) - parseInt(friends[o].scores[i]) < 0) {
                score += (parseInt(newFriend.scores[i]) - parseInt(friends[o].scores[i])) * -1;
            }
            else {
                score += parseInt(newFriend.scores[i]) - parseInt(friends[o].scores[i]);
            }

        }
        o++;
        scoreArray.push(score);
    });
    // Remove current submission from array
    scoreArray.pop();
    bestIndex = scoreArray.indexOf(Math.min.apply(null, scoreArray));

});


app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});