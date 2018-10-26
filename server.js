let express = require("express");

let app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("app/public"));

let apiRoutes = require('./app/routing/apiRoutes');
let htmlRoutes = require('./app/routing/htmlRoutes');

apiRoutes(app);
htmlRoutes(app);

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});