const express = require('express');
const app = express();
const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'sql10.freemysqlhosting.net',
  user: 'sql10593821',
  password:'qsewpPkAhY',
  database:'sql10593821'
});

app.get('/api/despesas', (req, res) =>{
  con.query('SELECT VALOR, DATA_COMPRA, DESCRICAO, NOME, TIPO FROM despesas INNER JOIN categorias ON categorias.id = categoria_id INNER JOIN tipo_pagamento ON tipo_pagamento.id = tipo_pagamento_id WHERE year(data_compra)= year(curdate()) AND MONTH(data_compra) = month(curdate())', (err,result)=>{
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

module.exports = app;