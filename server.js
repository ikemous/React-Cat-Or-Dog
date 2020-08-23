const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 3001;
const server = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  server.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ticketing_system", error => {
  if(error) return console.log(error);
  console.log("Connection To Database Successful!");
});

// Send every request to the React app
// Define any API routes before this runs
server.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

server.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
