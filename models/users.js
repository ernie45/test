/** Require mongoose as the MongoDB ORM */
const mongoose = require("mongoose");

/** Define the model of the schema */
const schema = new mongoose.Schema({
    /** User reference */
    email: String,
    username: String,
    password: String,
    persistToken: String,
    loggedIn: Boolean
});


// Create model in db if not already there, and export model for controller
const User = mongoose.model('users', schema)


/** Export the Suite */
module.exports = User;
