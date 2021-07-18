const express = require('express')
const cors = require('cors')
const routes = require('./api/routes/recipeRoutes')

// Import DB Connection
require('./config/db')

// create express app on port 5000
const app = express()
const hostname = 'localhost'
const port = 5000

// use cors
app.use(cors())
// parse the data to json
app.use(express.json())

// listen for requests
app.listen(port, hostname, () => {
  console.log(`Hello Fresh Backend listening at http://${hostname}:${port}`)
})

// Use API route
routes(app)
