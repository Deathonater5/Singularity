// Require
const express = require("express");
const router = express.Router();


// Routes
router.get("/feed", (req, res) => {
	res.send("Logged in successfully " + req.user.username);
});

module.exports = router;