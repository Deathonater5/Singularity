// Require
const express = require("express");
const bodyParser = require("body-parser");

// Require Routes
const indexRoutes = require("./routes/index");

// Express app
const app = express();

// Set
app.set("view engine", "ejs");

// Use
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
app.use(indexRoutes);

// Listener
const PORT = 8080
app.listen(PORT, () => {
	console.log("Singularity server has started");
})
	
		

