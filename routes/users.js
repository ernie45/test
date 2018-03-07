var express = require('express');
var router = express.Router();
const controller = require('../controllers/userControl.js')
/* GET users listing to check authentication. */

/** Note that the index file in this same folder */
/** Will tag a /api path to these routes so they match what they are called in the client */
/** For example, insteaad of /auth/persist, the index will make the route: /api/auth/persist */

router.get("/all", function(req, res){
	controller.findAllUsers(data =>{
		res.send(data);
	});
});

router.post('/auth/persist', function(req, res) {
	/** Takes in a token and a callback */
	controller.findPersistedUser(req.body.persistToken, (bool) => {
		/** Send true or false to the client */
		/** It's true or false depending on if the user is in the database */
		/** Client side will use this boolean to set loggedIn state to true or false */
		res.send(bool)
	})
});

/** This post is received when a user is trying to login */
router.post('/auth', function(req, res) {
	controller.findUserToAuth(req.body.email, req.body.password, (result) => {
		/** Send true or false depending on if the user's info is valid */
		/** Also send the username to update the greeting */
		res.send(result);
	})
});

router.post('/create', function(req, res) {
	controller.createUser(req)
	res.send(true);
});

router.post('/persist', function(req, res) {
	controller.findUserToUpdate(req.body.email, req.body.persistToken, (result) => {
		console.log(result, '!!!!!!!!!!!!!!!!')
		res.send(result)
	})
})

module.exports = router;
