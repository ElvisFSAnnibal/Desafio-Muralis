const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const moment = require('moment');
module.exports = app;

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
        res.json({
          "data":null,
          "success":success
        });
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
        res.json({
          "data":null,
          "success":success
        });
      };
      res.json({
        "data":result.insertId,
        "success":success
      });
    }
  );
});

app.get('/api/ingressantes', (req, res) =>{
  con.query(
    `select * from ingressantes`, 
    (err,result) =>{
      res.statusCode = 200;
      res.setHeader('Content-type', 'application/json');
      let success = true;
      if(err){
        success= false;
        res.json({
          "data":null,
          "success":success
        });
      };
      res.json({
        "data":result,
        "success":success
      });
    });
  });

  app.post('/api/ingressantes', (req, res) =>{
    con.query(
      `INSERT INTO ingressantes (nome,curso,estado,cidade) 
      VALUES (
        '${req.body.nome}',
        '${req.body.curso}',
        '${req.body.estado}',
        '${req.body.cidade}')`, 
       (err,result)=>{
        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json');
        let success = true;
        if(err){
          console.error('error: ' + err.message);
          success= false;
          res.json({
            "data":null,
            "success":success
          });
        };
        res.json({
          "data":result.insertId,
          "success":success
        });
      }
    );
  });
