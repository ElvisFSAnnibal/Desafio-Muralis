const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'sql10.freemysqlhosting.net',
  user: 'sql10593821',
  password:'qsewpPkAhY',
  database:'sql10593821'
});
con.connect(function(err) {
  if (err) {
    console.error('error: ' + err.message);
  }else{
    console.log('Connected to the MySQL server.');
  }  
});

app.get('/api/despesas', (req, res) =>{
  con.query('SELECT VALOR, DATA_COMPRA, DESCRICAO, NOME, TIPO FROM despesas INNER JOIN categorias ON categorias.id = categoria_id INNER JOIN tipo_pagamento ON tipo_pagamento.id = tipo_pagamento_id WHERE year(data_compra)= year(curdate()) AND MONTH(data_compra) = month(curdate())', (err,result)=>{
    res.send({message: result});
  });
});

app.get('/api/categorias', (req, res) =>{
  con.query('SELECT * FROM categorias', (err,result)=>{
    res.send({message: result});
  });
});

app.get('/api/pagamentos', (req, res) =>{
  con.query('SELECT * FROM tipo_pagamento', (err,result)=>{
    res.send({message: result});
  });
});

/*app.listen(PORT, () =>{
  console.log(`Running in http://localhost:${PORT}`)
});*/

module.exports = app;
