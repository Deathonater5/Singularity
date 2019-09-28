// Require
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const methodOverride = require("method-override");
const expressSession = require("express-session");

// Require models
const User = require("./models/user");

// Database setup: MongoDB
mongoose.connect("mongodb://localhost/Singularity", {
	useNewUrlParser: true,
    useUnifiedTopology: true
});

// Require Routes
const indexRoutes = require("./routes/index");
const userRoutes = require("./routes/user");

// Express app
const app = express();

// Set
app.set("view engine", "ejs");

// Use
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
app.use(methodOverride("_method"));
app.use((req, res, next) => {
	res.locals.currentUser = req.user;
	next();
});

// Passport configuration
app.use(expressSession({
	secret: "Test to see if passport works?",
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Use Routes
app.use(indexRoutes);
app.use(userRoutes);

// Listener
const PORT = 8080
app.listen(PORT, () => {
	console.log("Singularity server has started");
})
	
		

