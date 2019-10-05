// Require
const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user");

// Root route
router.get("/", (req, res) => {
	res.render("landing")
});

// Register routes
// Show register form
router.get("/register", (req, res) => {
	res.render("register");
});

router.post("/register", (req, res) => {
	const newUser = new User({username: req.body.username});
	User.register(newUser, req.body.password, (err) => {
		if (err) {
			console.log(err);
			return res.render("register");
		}
		passport.authenticate("local")(req, res, () => {
			const newlyRegisteredUser = User.findOne({username: req.body.username});
			res.redirect("/" + newlyRegisteredUser._id + "/feed");
		});
	});
});


// Login routes
router.post("/login", passport.authenticate("local"), (req, res) => {
	res.redirect("/" + req.user._id + "/feed");
});



// Logout route
router.get("/logout", (req, res) => {
	console.log("Bye: " + req.user.username);
	req.logOut();
	res.redirect("/");
});

// Export
module.exports = router;