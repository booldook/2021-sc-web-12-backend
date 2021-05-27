const express = require('express');
const path = require('path');
const app = express();


/****************** server start ********************/
app.listen(3000, () => { console.log('http://127.0.0.1:3000') });


/****************** router ********************/
// http://127.0.0.1:3000 : app.use(GET/POST 가리지 않고 다 받겠다)
app.use('/', express.static( path.join(__dirname, './public') ));

app.get('/product', (req, res, next) => {
	let disp = req.query.disp;
	// 가상으로 데이터베이스에서 상품정보를 가져왔음.
	const products = [
		{id: 1, title: '좋은상품', price: '20,000원'},
		{id: 2, title: '좋은상품2', price: '25,000원'},
		{id: 3, title: '좋은상품3', price: '30,000원'},
		{id: 4, title: '좋은상품4', price: '35,000원'},
		{id: 5, title: '좋은상품5', price: '38,000원'},
		{id: 6, title: '좋은상품6', price: '39,000원'},
	]
	let html = `
		<!doctype html>
		<html lang="ko">
			<head> 
				<meta charset="utf-8">
				<title>상품정보</title>
			</head>
			<body>
				<h1>우리회사 상품: ${products.length}개</h1>
				<ul>
	`;
					for(let v of products) {
						html += `<li>${v.id} | ${v.title} | ${v.price}</li>`;
					}
	html += 
	`
				</ul>
			</body>
		</html>`;
	res.send(html);
});