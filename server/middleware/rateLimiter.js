var rateLimiter = function (req, res, next) {
  if(req.url.endsWith('/api/pokemon') && req.headers.hasOwnProperty('user')) {
    return next()
  }
  res.status(400).send("Missing User Header")
};

module.exports = rateLimiter;
