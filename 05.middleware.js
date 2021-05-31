/*
- express.js : nodejs기반의 웹서버를 구축하기 위한 최적의 Framework
- express는 middleware의 집합이다.
- app.use() | app.get() | app.post() | app.put() | app.delete() 
- middleware의 첫번째 인자가 주소라면 Router다 app.get('/board', () => {})

- express.static(path.join(__dirname, './public')) => (req, res, next) => {}
*/

const path = require('path');
const express = require('express');
const app = express();
require('./modules/server-init')(app, 3000);

/* app.use((req, res, next) => {
	// res.download('./public/img/event/evt01.jpg')
	let { headers, baseUrl, hostname, ip, ips, originalUrl, path, protocol, route, secure, subdomains, query } = req;
	res.json({ headers, baseUrl, hostname, ip, ips, originalUrl, path, protocol, route, secure, subdomains, query });
}); 

app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.use('/', express.static(path.join(__dirname, './public')));
const sampleCb = () => {
	return (req, res, next) => {
		res.send('<h1>HELLO</h1>');
	};
}
app.get('/sample', sampleCb());
*/

// 1번 방식 - app.use()에 함수로 바로 등록
app.use((req, res, next) => {
	 // 모든 request에 대해서 처리되는 미들웨어
	req.mw1 = 'Hello mw1';
	next();
});

// 2번 방식 - app.use()에 선언되 있는 함수를 등록
const mw2 = (req, res, next) => {
	req.mw2 = 'Hello mw2';
	next();
}
app.use(mw2); // 모든 request에 대해서 처리되는 미들웨어

// 3번 방식 - app.use()에 실행된 내용으로 리턴된 함수를 등록
const mw3 = (str) => {
	return (req, res, next) => {
		req.mw3 = 'Hello '+ str;
		next();
	}
}
app.use(mw3('mw3')); // 모든 request에 대해서 처리되는 미들웨어

app.get('/test', (req, res, next) => {
	let { mw1, mw2, mw3 } = req;
	res.json({ mw1, mw2, mw3 });
});

// 만들어져 있는 미들웨어를 라우터에 등록해서 쓰는 방식

// 4번 방식 - 직접 라우터에 등록해서 쓴다.
app.get('/test2', (req, res, next) => {
	// 선택된 라우터에 대해서 처리되는 미들웨어
	req.mw4 = 'Hello mw4';
	next();
}, (req, res, next) => {
	let { mw4 } = req;
	res.json({ mw4 });
});

// 5번/6번 방식 - 직접 라우터에 등록하는데 기 선언된 함수를 불러다 쓴다.
const mw5 = (req, res, next) => {
	// 선택된 라우터에 대해서 처리되는 미들웨어
	req.mw5 = 'Hello mw5';
	next();
}
const mw6 = (str) => {
	return (req, res, next) => {
		// 선택된 라우터에 대해서 처리되는 미들웨어
		req.mw6 = 'Hello '+ str;
		next();
	}
}
app.get('/test3', mw5, mw6('mw6'), (req, res, next) => {
	let { mw5, mw6 } = req;
	res.json({ mw5, mw6 });
});
