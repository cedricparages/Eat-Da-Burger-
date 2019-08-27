// Requirements
var express = require("express");
var bodyParser = require("body-parser");

// Variables
var PORT = process.env.PORT || 3000;
var app = express();

// Serve static content for the app from the "public" directory 
app.use(express.static("public"));

// Parsing
app.use(bodyParser.urlencoded({ extended: true }));
// Parse application/json
app.use(bodyParser.json());

// Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// Server start
app.listen(PORT, function() {
  // Log 
  console.log("Server listening on: http://localhost:" + PORT);
});