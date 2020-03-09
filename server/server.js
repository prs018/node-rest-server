require('./config/config.js');
const express = require('express');
const app = express();

//BODY-PARSER
const  bodyParser  = require ( 'body-parser' );
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));  // App.use son middlewares.
// parse application/json
app.use(bodyParser.json());


//PETICIONES
app.get('/usuario', (req,res)=>{
  res.send('Peticion GET');
});

app.post('/usuario', (req,res)=>{
  let body = req.body;  // body aparecera cuando body-parser procese las peticiones.

  if(body.nombre === undefined){
    res.status(400).json({
      ok: false,
      mensaje: 'El nombre es necesario'
    });

  } else {
    res.json({
      persona: body
    });
  }

})

app.put('/usuario/:id', (req,res)=>{
  let id = req.params.id;

  res.send({
    id
  });
})

app.delete('/usuario', (req,res)=>{
  res.send('Peticion DELETE');
})

//ESCUCHA EN EL PUERTO 3000.
app.listen(process.env.PORT,()=>{
  console.log('listen on port :',process.env.PORT);
})
