/*
- express.js : nodejs기반의 웹서버를 구축하기 위한 최적의 Framework
- express는 middleware가 핵심이다.
- app.use() | app.get() | app.post() | app.put() | app.delete() 
- middleware의 첫번째 인자가 주소라면 Router다 app.get('/board', () => {})

- express.static(path.join(__dirname, './public')) => (req, res, next) => {}
*/

const path = require('path');
const express = require('express');
const app = express();
require('./modules/server-init')(app, 3000);


app.use('/', express.static(path.join(__dirname, './public')));

const sampleCb = () => {
	return (req, res, next) => {
		res.send('<h1>HELLO</h1>');
	};
}

app.get('/sample', sampleCb());