const express = require('express');

var app = express();

app.use('/',function (req, res){
    res.send('holaaaaa otra vez');
})

app.listen(3000);
console.log('tu aplicacion esta corriendo');