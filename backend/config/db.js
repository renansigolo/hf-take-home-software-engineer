// Export mongoose
const mongoose = require('mongoose')

// Assign MongoDB connection string to Uri and declare options settings
const uri =
  'mongodb+srv://hfadmin:y5JAc30lAkYNYx1X@cluster0.xysrs.mongodb.net/hf?retryWrites=true&w=majority'

// Declare a variable named option and assign optional settings
const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
}

// Connect MongoDB Atlas using mongoose connect method
mongoose.connect(uri, options)

// Monitor the connection
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('Mongo DB Atlas connection established!')
})
