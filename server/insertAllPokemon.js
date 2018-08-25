var data = require('../data/pokemon')
require('./db/index')
var Pokemon = require('./resources/pokemon/Pokemon')

// Fill in the definition of insertAllPokemon so that when 
// this file is run in the terminal with `node insertAllPokemon.js`, 
// all 151 pokemon are inserted into the database
var insertAllPokemon = function() {
  Pokemon.insertMany(data, function(err, docs) {
    if(err) {
      return console.error(err)
    }

    console.log('Insert successful', docs)
  });
};

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
insertAllPokemon();
