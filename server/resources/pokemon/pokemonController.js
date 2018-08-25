var Pokemon = require('./Pokemon');

// Complete each of the following controller methods
exports.createOne = function (req, res) {
  console.log(req.body)
  Pokemon.create(req.body, (err, doc) => {
    if(err) {
      return res.status(400).send(err.message)
    }

    res.send(doc)
  })
};

exports.retrieve = function (req, res) {
  Pokemon.find({}, (err, docs) => {
    if(err) {
      return res.status(400).send(err.message)
    }

    res.send(docs)
  })
};

exports.retrieveOne = function (req, res) {
  Pokemon.find({number: req.params.number}, (err, docs) => {
    if(err) {
      return res.status(400).send(err.message)
    }

    res.send(docs)
  })
};

exports.updateOne = function (req, res) {
  Pokemon.updateOne({number: req.params.number}, req.body, (err, doc) => {
    if(err) {
      return res.status(400).send(err.message)
    }

    res.send(doc)
  })
};

exports.delete = function (req, res) {
  // Find all documents
  Pokemon.find({}, (err, docs) => {
    if(err) {
      return res.status(400).send(err.message)
    }

    // Delete All documents
    Pokemon.deleteMany({}, (err) => {
      if(err) {
        return res.status(400).send(err.message)
      }

      // Return documents we found earlier
      res.send(docs)
    })
  })
};

exports.deleteOne = function (req, res) {
  Pokemon.findOneAndDelete({number: req.params.number}, (err, docs) => {
    if(err) {
      return res.status(400).send(err.message)
    }

    res.send(docs)
  })
};
