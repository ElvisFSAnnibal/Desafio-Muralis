import Fastify from 'fastify'
const mysql = require('mysql');

const app = Fastify()

let connection = mysql.createConnection({
  connectionLimit : 10,
  host: 'sql204.epizy.com',
  user: 'epiz_33461274',
  password: 'SQeVAgmmBU6iq2',
  database: 'epiz_33461274_despesas',

});

connection.connect(function(err) {
  if (err) {
    console.error('error: ' + err.message);
  }else{
    console.log('Connected to the MySQL server.');
  }  
});

app.get ( '/', ()=>{
  console.log('Rodando')

  connection.connect(function(err) {
    if (err) {
     return('error: ' + err.message);
    }else{
      return('Connected to the MySQL server.');
    } 
  })
}) 
  


app.listen ({
  port: 3333
})