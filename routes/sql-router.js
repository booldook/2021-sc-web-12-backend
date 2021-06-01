const express = require('express');
const router = express.Router();

const error = require('http-errors');
const mysql = require('mysql2');

const pool = mysql.createPool({
	host: 'localhost',
	user: 'shop',
	password: '000000',
	database: 'shop',
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0
});

router.get('/list', (req, res, next) => {
	pool.execute('select * from product', function(err, r) {
		if(err) next(error(500, { code: err.code, message: err.sqlMessage }));
		else res.json(r);
	});
});


module.exports = router;