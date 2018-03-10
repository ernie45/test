/** Bring in the database to be able to manipulate it */
const db = require("../models");
const bcrypt = require('bcrypt')
/** Find every element in the database */

/** Create a new user */


module.exports = {
    passwordCheck: function (password, hash) {
        return bcrypt.compareSync(password, hash)
    },
    findAllUsers: function (callback) {
        db.User.find({}, (err, res) => { callback(res) })
    },
    /** Called by the apiRoutes when a user tries signing in */
    findUserToAuth: function (email, password, callback) {
        /** Look through database for the email input */
        db.User.find({ email: email }, (err, res) => {
            console.log(res);
            /** If the result doesn't show up in the database */
            if (res.length === 0) {
                console.log('incorrect email')
                /** If the user IS in the database */
            } else {
                console.log(this.passwordCheck(password, res[0].password))
                /** Check password: send true if exists and false if not */
                /** Send username to update the greeting on main page */
                callback({
                    loggedIn: this.passwordCheck(password, res[0].password),
                    username: res[0].username
                })
            }
        })
    },
    findUserToUpdate: function (email, key, callback) {
        db.User.update({ email: email }, { persistToken: key }, (err, res) => {
            callback(res[0])
        })
    },

    findPersistedUser: function (key, callback) {
        /** Search database for the key passed in */
        db.User.find({ persistToken: key }, (err, res) => {
            /** If there is a match of the key stored in database */
            if (res.length !== 0) {
                /** Send true through the callback */
                callback(true)
                /** If no match, send false through the callback */
            } else {
                callback(false)
            }
        })
    },
    createUser: function (req, callback) {
        this.findAllUsers(function (data) {
            /** Check if the email and username provided already exist */
            let emailCheck = data.filter(dat => { return req.body.email === dat.email });
            let usernameCheck = data.filter(dat => { return req.body.username === dat.username });

            /** If either email or username already live in database */
            if (emailCheck.length || usernameCheck.length) {
                console.log("One or both have length");
                callback(false);
            }
            /** If both don't already live in the database */
            else {
                // salt to make life harder for a potential hacker
                let salt = bcrypt.genSaltSync(5);
                // return actual hash to store in db
                let hash = bcrypt.hashSync(req.body.password, salt);
                /** Create a space in database for the user */
                db.User.create({
                    email: req.body.email,
                    username: req.body.username,
                    password: hash,
                    loggedIn: true
                })
                callback(true);
            }
        });
    }
}
