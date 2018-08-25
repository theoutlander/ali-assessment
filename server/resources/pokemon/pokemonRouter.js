var pokemonRouter = require('express').Router();
var pokemonController = require('./pokemonController');

// Create route handlers for each of the six methods in pokemonController
pokemonRouter.route('/')
  .get(pokemonController.retrieve)
  .post(pokemonController.createOne)
  .delete(pokemonController.delete)

pokemonRouter.route('/:number')
  .get(pokemonController.retrieveOne)
  .put(pokemonController.updateOne)
  .delete(pokemonController.deleteOne)
 

module.exports = pokemonRouter;
