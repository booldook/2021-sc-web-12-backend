const express = require('express');
const router = express.Router();

router.get('/login', (req, res, next) => {
	// 로그인 화면
	res.send('<h1>로그인 화면</h1>');
});

router.post('/login', (req, res, next) => {
	// 로그인 처리
	console.log('로그인 되었습니다.');
	res.redirect('/');
});

router.get('/join', (req, res, next) => {
	// 회원가입 화면
	res.send('<h1>회원가입</h1>');
});

router.post('/join', (req, res, next) => {
	// 회원가입 처리
	console.log('회원가입 되었습니다.');
	res.redirect('/');
});

module.exports = router;