/* ************ 08.app.js [Multer 추가] ************ */

/* ************ Require ************ */
const express = require('express');
const app = express();
require('dotenv').config();
require('./modules/server-init')(app, 3000);
const path = require('path');

/* ************ View Init ************ */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.locals.pretty = true;

/* ************ Post Init ************ */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* ************ Static Router ************ */
app.use('/', express.static(path.join(__dirname, './public')));
app.use('/uploads', express.static(path.join(__dirname, './storages')));

/* ************ Router Init ************ */
const prdRouter = require('./routes/prd-router');
const userRouter = require('./routes/user-router');
const sqlRouter = require('./routes/sql-router');
const uploadRouter = require('./routes/upload-router');
const gbookRouter = require('./routes/gbook-router');

app.use('/prd', prdRouter);
app.use('/user', userRouter);
app.use('/sql', sqlRouter);
app.use('/upload', uploadRouter);
app.use('/gbook', gbookRouter);

/* ************ Error Router ************ */
const notFoundRouter = require('./routes/404-router');
const errorRouter = require('./routes/500-router');

app.use(notFoundRouter);
app.use(errorRouter);


