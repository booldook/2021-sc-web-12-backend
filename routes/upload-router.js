const express = require('express');
const router = express.Router();
const moment = require('moment');
const path = require('path');
const fs = require('fs-extra');
const multer = require('multer');
const storage = multer.diskStorage({
	destination: async (req, file, cb) => {
		try {
			let folder = path.join(__dirname, '../storages', moment().format('YYMMDD'));
			await fs.ensureDir(folder);
			cb(null, folder);
		}
		catch(err) {
			cb(err);
		}
	},
	filename: async (req, file, cb) => {
		let ext = path.extname(file.originalname);
		cb(null, file.fieldname + '-' + Date.now() + ext);
	}
})
const upload = multer({ storage });

router.post('/save', upload.single('upfile'), (req, res, next) => {
	res.json({ body: req.body, file: req.file });
});

module.exports = router;

