const express = require('express');
const app = express();
const PORT = 80;
const mysql = require('mysql');
const bodyParser = require('body-parser');
const moment = require('moment');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password:'1234',
  database:'despesas'
});
con.connect(function(err) {
  if (err) {
    console.error('error: ' + err.message);
  }else{
    console.log('Connected to the MySQL server.');
  }  
});

app.listen(PORT, () =>{
  console.log(`Running in http://localhost:${PORT}`)
});
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get('/api/despesas', (req, res) =>{
  con.query(
    `SELECT 
      despesas.ID, 
      VALOR, 
      DATA_COMPRA, 
      DESCRICAO, 
      NOME, 
      TIPO 
      FROM despesas 
      INNER JOIN categorias ON categorias.id = categoria_id 
      INNER JOIN tipo_pagamento ON tipo_pagamento.id = tipo_pagamento_id 
      WHERE year(data_compra)= year(curdate()) 
      AND MONTH(data_compra) = month(curdate())`, 
    (err,result) =>{
      res.statusCode = 200;
      res.setHeader('Content-type', 'application/json');
      let success = true;
      if(err){
        success= false;
      };
      res.json({
        "data":result,
        "success":success
      });
    });
  });


app.post('/api/despesas', (req, res) =>{
  let valor = req.body.valor;
  valor = valor.replace(",",".");
  let data = req.body.data_compra;
  data = moment(data,"DD-MM-YYYY HH:mm:ss").format("YYYY-MM-DD HH:mm:ss");
  con.query(
    `INSERT INTO despesas(
      valor,
      data_compra,descricao,
      tipo_pagamento_id,
      categoria_id
      ) 
    VALUES (
      ${valor},
      '${data}',
      '${req.body.descricao}',
      ${req.body.tipo_pagamento_id},
      ${req.body.categoria_id})`, 
     (err,result)=>{
      res.statusCode = 200;
      res.setHeader('Content-type', 'application/json');
      let success = true;
      if(err){
        console.error('error: ' + err.message);
        success= false;
      };
      res.json({
        "data":result.insertId,
        "success":success
      });
    }
  );
});

/*app.post('/api/despesas', (req, res) =>{
  con.query(
    `INSERT INTO despesas(
      valor,
      data_compra,descricao,
      tipo_pagamento_id,
      categoria_id
      ) 
    VALUES (
      ${req.body.valor},
      '${req.body.data_compra}',
      '${req.body.descricao}',
      ${req.body.tipo_pagamento_id},
      ${req.body.categoria_id})`,
    (err,result)=>{
      let success = true;
      if (err) {
        console.error('error: ' + err.message)
        success= false;
      };
      res.json({
        "req": req.body,
        "data":result.body.id,
        "success":success
      });
  });
});

app.get('/categorias', (req, res) =>{
  con.query('SELECT * FROM categorias', (err,result)=>{
    res.send({result});
  });
});

app.get('/pagamentos', (req, res) =>{
  con.query('SELECT * FROM tipo_pagamento', (err,result)=>{
    res.send({result});
  });
});
*/