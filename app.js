/* ************ 06.app.js [라우터 분리] ************ */

/* ************ Require ************ */
const express = require('express');
const app = express();
require('./modules/server-init')(app, 3000);

const path = require('path');
const error = require('http-errors');


/* ************ View Init ************ */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.locals.pretty = true; // app.locals에 변수로 등록하면 ejs에서 바로 접근


/* ************ Post Init (req.body에 접근) ************ */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* ************ Router Init ************ */
const prdRouter = require('./routes/prd-router');
const userRouter = require('./routes/user-router');

app.use('/', express.static(path.join(__dirname, './public')));
app.use('/prd', prdRouter);
app.use('/user', userRouter);

/* ************ Error Router(예외처리) ************ */
app.use((req, res, next) => {
	// 경로를 못찾으면 도착
	next(error(404, '요청하신 페이지를 찾을 수 없습니다.'));
});

app.use((err, req, res, next) => {
	// 모든 에러의 종착점
	res.json({ code: err.status, message: err.message });
});