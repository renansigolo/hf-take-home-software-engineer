const express = require("express");
const cors = require('cors')
const routes = require("./api/routes/recipeRoutes");

// Import DB Connection
require("./config/db");

// create express app on port 5000
const app = express();
const port = process.env.PORT || 5000;

// use cors
app.use(cors())
// parse the data to json
app.use(express.json());

// listen for requests
app.listen(port, () => {
  console.log(`Hello Fresh Backend listening at http://localhost:${port}`);
});

// Use API route
routes(app);
