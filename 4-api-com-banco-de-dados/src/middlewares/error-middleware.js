const HttpError = require("../errors/HttpError");

function errorMiddleware(error, req, res, next) {
  if (error instanceof HttpError) {
    res.status(error.status).json({ errorMessage: error.message })
  } else {
    res.status(400).json({ errorMessage: error.message })
  }
}

module.exports = errorMiddleware