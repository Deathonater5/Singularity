// Require
const express = require("express");
const router = express.Router();


// Routes
router.get("/:user_id/feed", (req, res) => {
	res.render("feed", {currentUser: req.user});
});

router.get("/:user_id/profile", (req, res) => {
	res.send("this will be your profile page")
})

module.exports = router;