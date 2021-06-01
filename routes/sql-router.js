const express = require('express');
const router = express.Router();
const error = require('http-errors');
const { mysql, pool } = require('../modules/mysql-init');

router.get('/', async (req, res, next) => {
	try {
		const r = await pool.execute('SELECT * FROM product');
		res.json(r);
	}
	catch(err) {
		next(error(500, { code: err.code, message: err.sqlMessage }));
		// next(error(500, err));
	}
});


module.exports = router;


