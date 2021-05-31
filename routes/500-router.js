module.exports = (err, req, res, next) => {
	// 모든 에러의 종착점
	console.log('===========ERROR==========');
	// res.json({ code: err.status, message: err.message });
	const ejs = { 
		status: err.status === 404 ? 404 : 500, 
		message: err.message, 
		pageTitle: `ERROR ${err.status === 404 ? 404 : 500}`,
		description: err.description || err.message
	}
	res.render('error/error', ejs);
};
