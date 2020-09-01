const express = require("express");
const session = require("express-session");
const compression = require("compression");
const { passport } = require("./models");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 3001;//PORT #
const server = express();//server

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  server.use(express.static("client/build"));
}

//Connection to mongo Database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/aninder", error => {
  if(error) return console.log(error);
  console.log("Connection To Database Successful!");
});


//user compression for performance
server.use(compression());

// Sets up the Express app to handle data parsing
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

// Keeping track of user login
server.use(session({
  secret: process.env.SECRET || "secret",
  resave: true,
  saveUninitialized: true,
}))

//Passport Authentication
server.use(passport.initialize());
server.use(passport.session());

//Routes
server.use(require("./routes/api-routes.js"));
server.use(require("./routes/user-routes.js"));

// Send every request to the React app
// Define any API routes before this runs
server.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

server.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
