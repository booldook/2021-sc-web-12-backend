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
	// Callback Hell
	pool.execute('select * from users where id=1', function(err, r) {
		if(err) next(error(500, { code: err.code, message: err.sqlMessage }));
		else {
			pool.execute('select * from product where seller = "'+r[0].userid+'"', function(err, r2) {
				if(err) next(error(500, { code: err.code, message: err.sqlMessage }));
				else {
					pool.execute('select * from event where pid = "'+r2[0].id+'"', function(err, r3) {
						res.json(r3);
					});
				}
			});
		}
	});
	// Promise
	pool.execute('select * from users where id=1')
	.then((r) => {
		return pool.execute('select * from product where seller = "'+r[0].userid+'"');
	})
	.then((r2) => {
		return pool.execute('select * from event where pid = "'+r2[0].id+'"');
	})
	.then((r3) => {
		res.json(r3);
	})
	.catch((err) => {
		next(error(500, { code: err.code, message: err.sqlMessage }));
	})
});

// async/await
router.get('/list', async (req, res, next) => {
	try {
		const r = await pool.execute('select * from users where id=1');
		const r2 = await pool.execute('select * from product where seller = "'+r[0].userid+'"');
		const r3 = await pool.execute('select * from event where pid = "'+r2[0].id+'"'); 
		res.json(r3);
	}
	catch(err) {
		next(error(500, { code: err.code, message: err.sqlMessage }));
	}
});


module.exports = router;
