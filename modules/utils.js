const createError = require('http-errors');

const error = (err) => {
	console.log(err);
	return createError(500, { code: err.code || undefined, message: err.sqlMessage || err });
}

module.exports = { error, createError }