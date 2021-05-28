const express = require('express');
const app = express();
require('./modules/server-init')(app, 3000);
const path = require('path');

/* ************ Pug Init ************ */
// app.set(변수명, 값)
app.set('view engine', 'pug'); // view engine으로 pug를 쓰겠다.
app.set('views', path.join(__dirname, './views')); // pug파일 위치
app.locals.pretty = true; // 브라우저에 보내주는 html을 이쁘게

/* ************ Rounter Static ************ */
app.use('/', express.static(path.join(__dirname, './public')));

/* ************ Rounter Dynamic ************ */
app.get('/event', (req, res, next) => {
	const event = [
		{id: 1, title: '좋은이벤트1', src:'evt01.jpg', price: '20,000원'},
		{id: 2, title: '좋은이벤트2', src:'evt02.jpg', price: '25,000원'},
		{id: 3, title: '좋은이벤트3', src:'evt03.jpg', price: '30,000원'},
		{id: 4, title: '좋은이벤트4', src:'evt04.jpg', price: '35,000원'},
		{id: 5, title: '좋은이벤트5', src:'evt05.jpg', price: '38,000원'},
		{id: 6, title: '좋은이벤트6', src:'evt06.jpg', price: '39,000원'},
		{id: 7, title: '좋은이벤트7', src:'evt07.jpg', price: '29,000원'},
		{id: 8, title: '좋은이벤트8', src:'evt08.jpg', price: '49,000원'},
		{id: 9, title: '좋은이벤트9', src:'evt09.jpg', price: '89,000원'},
	]
	res.render('event.pug', { event });
});
