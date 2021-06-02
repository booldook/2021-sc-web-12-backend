const express = require('express');
const router = express.Router();

const ejs = { 
	headTitle: '한 줄 방명록',
	pageTitle: '방명록 서비스',
	pageDesc: 'Express | Multer 를 활용한 방명록 포트폴리오', 
	css: 'gbook', 
	js: 'gbook' 
};

/* ********* read/write(VIEW) ********** */
router.get('/', async (req, res, next) => {
	res.render('gbook/gbook', { ...ejs, gbook: [] });
});

/* ********* create ********** */
router.post('/create', async (req, res, next) => {
	
});

/* ********* update ********** */
router.post('/update', async (req, res, next) => {
	
});

/* ********* delete ********** */
router.post('/delete', async (req, res, next) => {
	
});

module.exports = router;