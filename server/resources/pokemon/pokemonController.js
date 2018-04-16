var Pokemon = require('./Pokemon');

// Complete each of the following controller methods
exports.createOne = function (req, res) {
	var pokemon = new Pokemon({ 
		number:req.body.number,
		name:req.body.name,
		types:req.body.types,
		imageUrl:req.body.imageUrl
	 });
	pokemon.save(function (err) {
  if (err) return handleError(err);
    })
	res.send()
};

exports.retrieve = function (req, res) {
	Pokemon.
  find({
   'number':req.body.number
  }).
  limit(10).exec(callback);
  res.send();

};

exports.retrieveOne = function (req, res) {
	Pokemon.findOne({ 'number':req.body.number }, 'name', function (err, pokemon) {
	  if (err) return handleError(err);
	  console.log( pokemon.name);
	});
  res.send();
};

exports.updateOne = function (req, res) {
	Pokemon.findOneAndUpdate(query, { name: 'jason bourne' }, options, callback);
	res.send();

};

exports.delete = function (req, res) {
	Pokemon.findByIdAndRemove({id:req.body.id}, callback);
	res.send();


};

exports.deleteOne = function (req, res) {
	Pokemon.where().findOneAndRemove({'number':req.body.number}, callback)
	res.send();
};
