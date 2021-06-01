const express = require('express');
const router = express.Router();
const { upload } = require('../modules/multer-init');

router.post('/save', upload.single('upfile'), (req, res, next) => {
	res.json({ body: req.body, file: req.file });
});

module.exports = router;
