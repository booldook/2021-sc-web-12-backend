const express = require('express');
const app = express();

/***************** 서버 구동 *****************/
app.listen(3000, () => { console.log('http://127.0.0.1:3000') });


/***************** 라우터(Router) *****************/
// http://127.0.0.1:3000/
app.get('/', (req, res, next) => {
	res.send('<h1>Hello Root</h1>');
});

// http://127.0.0.1:3000/hello
app.get('/hello', (req, res, next) => {
	res.send('<h1>Hello User!</h1>');
});

// http://127.0.0.1:3000/login?name=booldook
app.get('/login', (req, res, next) => {
	let loginUser = req.query.name;
	res.send(`<h1>Hello ${loginUser}</h1>`);
});

// http://127.0.0.1:3000/sign/booldook
app.get('/sign/:name', (req, res, next) => {
	let loginUser = req.params.name;
	res.send(`<h1>Hello : ${loginUser}</h1>`);
});

// https://api.openweathermap.org/data/2.5/weather?appid=...&units=metric&lat=37.xxxx&lon=127.xxx
// http://127.0.0.1:3000/data/2.5/weather?appid=abcd&units=metric&lat=37.25&lon=127.35
app.get('/data/2.5/weather', (req, res, next) => {
	let { appid, units, lat, lon } = req.query;
	console.log('날씨정보 가져오는 로직');
	res.json({
		city: 'Seoul',
		lat,
		lon,
		dt: new Date().getTime(),
		main: {
			temp: 18.95,
			feels_like: 17.25
		},
		weather: [
			{
				main: 'rain',
				description: 'scatter rain'
			}
		]
	});
});


