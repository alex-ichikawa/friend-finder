let path = require("path");

let htmlRoutes = (app) => {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    app.get("/match", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/match.html"));
    });

    // 404
    app.use(function (req, res) {
        res.send("404 not found");
    });
}

module.exports = htmlRoutes;