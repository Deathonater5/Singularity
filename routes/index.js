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
			return res.render("register");
		}
		passport.authenticate("local")(req, res, () => {
			res.redirect("/feed");
		});
	});
});



// Login routes
router.post("/login", passport.authenticate("local"), (req, res) => {
	res.redirect("/feed");
});

router.get("/logout", (req, res) => {
	req.logOut();
	res.redirect("/");
});

// Export
module.exports = router;