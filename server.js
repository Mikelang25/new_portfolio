const express = require('express');
const session = require("express-session");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

require('./routes/apiRoutes.js')(app)

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});