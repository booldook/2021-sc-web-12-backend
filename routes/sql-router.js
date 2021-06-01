const express = require('express');
const router = express.Router();
const { error } = require('../modules/utils');
const { mysql, pool } = require('../modules/mysql-init');

router.get('/', async (req, res, next) => {
	try {
		let sql = 'SELECT * FROM product ORDER BY id DESC';
		const [r] = await pool.execute(sql); // [[],[]]
		res.json(r);
	}
	catch(err) {
		next(error(err));
	}
});

router.get('/insert', async (req, res, next) => {
	try {
		let sql, values;
		sql = 'INSERT INTO product SET prdname=?, price=?, content=?';
		values = ['잘나가 가방', 25000, '잘나가요~'];
		const [r] = await pool.execute(sql, values);
		res.redirect('/sql');
	} 
	catch (err) {
		next(error(err));
	}
});


module.exports = router;


