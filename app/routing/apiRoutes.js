let friends = require("./../data/friend.js");
let best = require("./../data/best.js");

let apiRoutes = (app) => {
    // Displays all friends
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    // Display best friend
    app.get("/api/best", function(req, res) {
        return res.json(best);
    })

    // Create New Friends
    app.post("/api/friends", function (req, res) {
        let scoreArray = [];
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
        let bestIndex = scoreArray.indexOf(Math.min.apply(null, scoreArray));
        best = [];
        best.push(friends[bestIndex]);
    });

}

module.exports = apiRoutes;