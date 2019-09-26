// Require
const express = require("express");
const router = express.Router();

// Root route
router.get("/", (req, res) => {
	res.render("landing")
})

// Register routes
// Show register form



// Login routes
router.post("/login", (req, res) => {
	res.send(req.body)
})

// Export
module.exports = router;