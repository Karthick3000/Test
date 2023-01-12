const express = require('express');
const app = express();
const controller = require('./controller/sendMail.js')

app.get('/gmail')

app.get('/sendmail', controller)


app.listen(3000, () => {
    console.log("server listen on port 3000 ");
})