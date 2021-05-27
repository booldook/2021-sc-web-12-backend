const express = require('express');
const app = express();
const path = require('path');

/* ************ Server Init ************ */
// app.listen(3000);
app.listen(3000, () => { console.log('http://127.0.0.1:3000') });

/* ************ Pug Init ************ */
// app.set(변수명, 값)
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views'));
app.locals.pretty = true;

/* ************ Rounter Static ************ */
app.use('/', express.static(path.join(__dirname, './public')));

/* ************ Rounter Dynamic ************ */
app.get('/products', (req, res, next) => {
	const products = [
		{id: 1, title: '좋은상품', price: '20,000원'},
		{id: 2, title: '좋은상품2', price: '25,000원'},
		{id: 3, title: '좋은상품3', price: '30,000원'},
		{id: 4, title: '좋은상품4', price: '35,000원'},
		{id: 5, title: '좋은상품5', price: '38,000원'},
		{id: 6, title: '좋은상품6', price: '39,000원'},
	]
	res.render('product.pug', { count: products.length });
});