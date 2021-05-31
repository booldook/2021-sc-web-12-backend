/* ************ Require ************ */
const express = require('express');
const app = express();
require('./modules/server-init')(app, 3000);

const path = require('path');

/* ************ View Init ************ */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.locals.pretty = true; // app.locals에 변수로 등록하면 ejs에서 바로 접근한다.

/* ************ Post Init (req.body에 접근) ************ */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* ************ Router Init ************ */