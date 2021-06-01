const mysql = require('mysql2/promise');

const pool = mysql.createPool({
	host: 'localhost',
	user: 'shop',
	password: '000000',
	database: 'shop',
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0
});

module.exports = { mysql, pool };