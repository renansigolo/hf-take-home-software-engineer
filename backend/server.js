const express = require("express");
const recipeRoutes = require("./api/routes/recipeRoutes.js");

// Import DB Connection
require("./config/db");

// create express app on port 5000
const app = express();
const port = process.env.PORT || 5000;

// parse the data to json
app.use(express.json());

// listen for requests
app.listen(port, () => {
  console.log(`Hello Fresh Backend listening at http://localhost:${port}`);
});

// Import API route
const routes = require("./api/routes/recipeRoutes"); //importing route
routes(app);
