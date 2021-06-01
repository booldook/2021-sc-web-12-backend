const express = require('express');
const router = express.Router();
const { error } = require('../modules/utils');
const { mysql, pool } = require('../modules/mysql-init');

router.get('/', async (req, res, next) => {
	try {
		const [r] = await pool.execute('SELECT * FROM product'); // [[],[]]
		res.json(r);
	}
	catch(err) {
		next(error(err));
	}
});


module.exports = router;


