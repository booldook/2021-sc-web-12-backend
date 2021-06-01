/* ************ 07.app.js [데이터베이스 사용] ************ */
// mysql2 | sequelize | mongoose

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

/* ************ Router Init ************ */
const prdRouter = require('./routes/prd-router');
const userRouter = require('./routes/user-router');
const sqlRouter = require('./routes/sql-router');
const sqlRouterReview = require('./routes/sql-router-review');

app.use('/prd', prdRouter);
app.use('/user', userRouter);
app.use('/sql', sqlRouter);
app.use('/sql2', sqlRouterReview);

/* ************ Error Router ************ */
const notFoundRouter = require('./routes/404-router');
const errorRouter = require('./routes/500-router');

app.use(notFoundRouter);
app.use(errorRouter);


