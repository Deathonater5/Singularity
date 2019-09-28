// Require
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");


// User Schema
const userSchema = new mongoose.Schema({
	username: String,
	password: String
});

// Passport plugin
userSchema.plugin(passportLocalMongoose);

// Module exports
module.exports = mongoose.model("User", userSchema);