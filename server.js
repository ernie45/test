/** Require express */
const express = require("express");
/** Create the express app */
const app = express();
/** Require body-parser */
const bodyParser = require("body-parser");
/** Require mongoose as the MongoDB ORM */
const mongoose = require("mongoose");
/** Require the express routing */
const routes = require("./routes");
// require schema from models
const schemas = require("./models")

/** If 3001 isn't available, define a new port */
var PORT = process.env.PORT || 3001;

/** Define the usage of the app */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


/** The root directory will route on over to client/build to be accessed by the index file */
app.use(express.static("client/build"));
/** Listen in on the routes */
app.use(routes);


/** Make a connection to the MongoDB using the mongoose ORM */
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/homesuite"
);
mongoose.Promise = global.Promise;

app.listen(PORT, function(){
    console.log("App listening on port " + PORT);
});