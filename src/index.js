const http = require("http");
const express = require("express");
const path = require("path");
const app = express(); // initail express
const indexRoute = require("../router/index.js");

app.set("views", path.join(__dirname, "..", "views"));
app.set("view engine", "ejs");
indexRoute(app);

//create a server object:
http.createServer(app).listen(8080, err => {
  console.log(`Express server listening on port 8080`);
}); //the server object listens on port 8080
