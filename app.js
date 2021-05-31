/* ************ 06.app.js [라우터 분리] ************ */

/* ************ Require ************ */
const express = require('express');
const app = express();
require('./modules/server-init')(app, 3000);

const path = require('path');


/* ************ View Init ************ */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.locals.pretty = true; // app.locals에 변수로 등록하면 ejs에서 바로 접근


/* ************ Post Init (req.body에 접근) ************ */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


/* ************ Router Init ************ */
app.use('/', express.static(path.join(__dirname, './public')));

app.get('/prd', (req, res, next) => {
	// 상품리스트 가져오기 - GET[READ]
});

app.get('/prd/create', (req, res, next) => {
	// 상품 등록 화면 보여주기
});

app.post('/prd', (req, res, next) => {
	// 상품 저장하기 - POST[CREATE]
});

app.get('/prd/change/:id', (req, res, next) => {
	// 상품 수정 화면 보여주기 - GET[READ]
});

app.post('/prd/:id', (req, res, next) => {
	// 상품 수정하기 - POST[UPDATE]
});

app.get('/prd/:id', (req, res, next) => {
	// 상품 삭제하기 - GET[DELETE]
});

app.get('/prd/view/:id', (req, res, next) => {
	// 상품 하나 가져오기 - GET[READ]
});