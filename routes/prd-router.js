const express = require('express');
const router = express.Router();

router.get(['/', '/list', '/list/:page'], (req, res, next) => {
	// 상품리스트 가져오기 - GET[READ]
	res.send('<h1>상품리스트</h1>');
});

router.get('/create', (req, res, next) => {
	// 상품 등록 화면 보여주기
	res.send('<h1>상품등록</h1>');
});

router.get('/change/:id', (req, res, next) => {
	// 상품 수정 화면 보여주기 - GET[READ]
	res.send('<h1>상품수정</h1>');
});

router.post('/', (req, res, next) => {
	// 상품 저장하기 - POST[CREATE]
	console.log('저장하였습니다.');
	res.redirect('/prd');
});


router.post('/:id', (req, res, next) => {
	// 상품 수정하기 - POST[UPDATE]
	console.log('수정하였습니다.');
	res.redirect('/prd');
});

router.get('/:id', (req, res, next) => {
	// 상품 삭제하기 - GET[DELETE]
	console.log('삭제하였습니다.');
	res.redirect('/prd');
});

router.get('/view/:id', (req, res, next) => {
	// 상품 하나 가져오기 - GET[READ]
	res.send('<h1>상품상세</h1>');
});

module.exports = router;