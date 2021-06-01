const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'storages/' })

router.post('/save', upload.single('upfile'), (req, res, next) => {
	res.json({ body: req.body, file: req.file });
});

module.exports = router;