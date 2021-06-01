const moment = require('moment');
const path = require('path');
const fs = require('fs-extra');
const { v4: uuid } = require('uuid');
const { allowExt } = require('../modules/utils');
const multer = require('multer');

// storage 엔진의 destination callback
const destination = async (req, file, cb) => {
	try {
		let folder = path.join(__dirname, '../storages', moment().format('YYMMDD'));
		await fs.ensureDir(folder);
		cb(null, folder);
	}
	catch(err) {
		cb(err);
	}
}

// storage 엔진의 filename callback
const filename = (req, file, cb) => {
	try {
		let filename = moment().format('YYMMDD') + '-' + uuid() + path.extname(file.originalname);
		cb(null, filename);
	}
	catch(err) {
		cb(err);
	}
}

// storage engine 생성
const storage = multer.diskStorage({ destination, filename });

// filesize 제한
const mega = 1024000;
const limits = { fileSize: mega * 50 }

// filetype 제한
function fileFilter(req, file, cb) {
	try {
		let ext = path.extname(file.originalname).substr(1).toLowerCase();
		if(allowExt.includes(ext)) cb(null, true);
		else cb(null, false);
	}
	catch(err) {
		cb(err);
	}
}

// multer instance 생성
const upload = multer({ storage, limits, fileFilter });

module.exports = { multer, upload };