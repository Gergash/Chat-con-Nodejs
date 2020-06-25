const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);

router.get('/messege', function (req, res) {
  console.log(req.headers);
  res.send("lista de mensajes");
  res.header({
        "custom-header": "Valor personalizado"
  });
});

/*
router.get('/messege', function (res, req){
    console.log(req.headers);  
    res.send('lista de mensajes');
});
*/
router.delete('/messege', function(req, res){
    console.log(req.query);
    console.log(req.body);
    res.send('Mensaje añadido correctamente');
});



app.listen(3000);
console.log('la aplicacion inicio en el puerto 3000')