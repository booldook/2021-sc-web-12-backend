const express = require('express');
const router = express.Router();

const mysql = require('mysql2');
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'shop',
	password: '000000',
	database: 'shop',
});

router.post('/save', (req, res, next) => {
	let { prdname, price, content } = req.body;
	let sql = 'INSERT INTO product SET prdname=?, price=?, content=?';
	let values = [prdname, price, content];
	connection.query(sql, values, (err, r) => {
		console.log(err);
		res.json(r);
	});
});

module.exports = router;