var mongoose = require('mongoose');
// Complete the pokemonSchema below.

var pokemonSchema=new mongoose.Schema({
number:{unique:true,type:Number},
name:{unique:true,type:String},
types:[String],
imageUrl:String
});


// Register the pokemonSchema with Mongoose as the 'Pokemon' collection.
var Pokemon=mongoose.model('Pokemon',pokemonSchema);


module.exports = Pokemon;
