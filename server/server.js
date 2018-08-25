var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var pokemonRouter = require('./resources/pokemon/pokemonRouter')
var path = require('path')
var cors = require('cors')
var rateLimiter = require('./middleware/rateLimiter')

// Create the Express application:
var app = express()


// Attach middleware:
// app.use(morgan())
app.use(cors())
app.use(bodyParser.json())
console.log(path.resolve(__dirname, '../react-client/src/dist'))
app.use(express.static(path.resolve(__dirname, '../react-client/src/dist')))
app.use(rateLimiter)
// Import the pokemonRouter and assign it to the correct route:
app.use('/api/pokemon', pokemonRouter)

// app.get('/', function (req, res) {
//
// });

module.exports = app;
