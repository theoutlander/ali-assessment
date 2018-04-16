var pokemonRouter = require('express').Router();
var pokemonController = require('./pokemonController');

// Create route handlers for each of the six methods in pokemonController
pokemonRouter.route('/')

pokemonRouter.route('/:number').get(pokemonController.retrieve)
.get(pokemonController.retrieveOne)
.put(pokemonController.updateOne)
.delete(pokemonController.delete)
.delete(pokemonController.deleteOne);

 

module.exports = pokemonRouter;
