const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'shop',
	password: '000000',
	database: 'shop'
});

// READ
router.get('/', (req, res, next) => {
	let sql = 'SELECT * FROM product';
	connection.query(sql, (err, r) => {
		res.json(r);
	});
});

// CREATE
// router.post('/', (req, res, next) => { // req.body
router.get('/insert', (req, res, next) => {
	let sql = 'INSERT INTO product SET prdname=?, price=?, content=?';
	let values = ['잘나가 스마트폰2', 900000, '너무 잘나가는 스마트폰2'];
	connection.query(sql, values, (err, r) => {
		res.json(r);
	});
});

// DELETE
router.get('/remove/:id', (req, res, next) => {
	let id = req.params.id;
	let sql = 'DELETE FROM product WHERE id=?';
	let values = [id];
	connection.query(sql, values, (err, r) => {
		res.json(r);
	});
});




module.exports = router;