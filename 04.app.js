/*
클라이언트(Browser)에서 보낸 데이터를 받는법 3가지
- GET
	1. http://127.0.0.1:3000/gbook/save?content=ABCD
		=> 
		app.get('/gbook/save', (req, res, next) => {
			let content = req.query.content;
		})
	2. http://127.0.0.1:3000/gbook/save/ABCD
		=> 
		app.get('/gbook/save/:content', (req, res, next) => {
			let content = req.params.content;
		})

- POST
	1. <form method="POST" action="/gbook/save">
	=>
	app.post('/gbook/save/', (req, res, next) => {
		let content = req.body.content;
	})
*/

const express = require('express');
const app = express();
require('./modules/server-init')(app, 3000);
const path = require('path');
const moment = require('moment');

/* ************ Ejs Init ************ */
// app.set(변수명, 값)
app.set('view engine', 'ejs'); // view engine으로 ejs를 쓰겠다.
app.set('views', path.join(__dirname, './views')); // pug파일 위치
app.locals.pretty = true; // 브라우저에 보내주는 html을 이쁘게

/* ************ req.body Init ************ */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* ************ Global variables ************ */
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
];

const gbook = [
	{id: 2, content: '좋아요 좋아요~', createdAt: '2021-05-28 13:25:19'},
	{id: 1, content: '좋아요~', createdAt: '2021-05-28 13:25:17'},
];

/* ************ Rounter Static ************ */
app.use('/', express.static(path.join(__dirname, './public')));

/* ************ Rounter Dynamic ************ */
app.get('/event', (req, res, next) => {
	res.render('event/event', { event, pageTitle: '이벤트 사이트' });
});

app.get('/gbook', (req, res, next) => {
	res.render('gbook/gbook', {pageTitle: '방명록 서비스', gbook});
});

app.post('/gbook/save', (req, res, next) => {
	let { content } = req.body;
	let createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
	let id = gbook[0].id + 1;
	gbook.unshift({ id, content, createdAt });
	res.redirect('/gbook');
});