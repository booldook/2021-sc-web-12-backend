const express = require('express');
const path = require('path');
const app = express();


/****************** server start ********************/
app.listen(3000, () => { console.log('http://127.0.0.1:3000') });


/****************** router ********************/
// http://127.0.0.1:3000 : app.use(GET/POST 가리지 않고 다 받겠다)
app.use('/', express.static( path.join(__dirname, './public') ));