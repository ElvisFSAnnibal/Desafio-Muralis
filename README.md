# Desafio-node.js
Repositório contendo os arquivos do desafio

Este repositório contem o servidor de API REST para métodos GET e POST, podem ser consumidas via link desafio-node.vercel.app/api/despesas de forma online
Este serviço online está rodando em serviço serveless da Vercel, apondando as Querys para banco de dados MySQL criado e hospedado em servidor online.

O método GET retornará os dados cadastrados no banco de dados, exibindo as despesas cadastradas com datas com o mês vigente.
O método POST retorna o id do novo cadastro.Podendo ser testado via POSTMAN com dados inseridos no Body em x-www-form-urlencoded no padrão de dados:

KEY                 VALUE

valor               10,35

data_compra         31-01-203 10:00

descricao           Conserto carro

tipo_pagamento_id   1

categoria_id        4



Os campos tipo_pagamento_id e categoria_id são chaves estrangeiras das tabelas tipo_pagamentos e categorias respectivamente, sendo populadas da seguinte maneira:

tipo_pagamento

id        tipo

1         Dinheiro

2         Débito

3         Crédito

4         Pix

categorias

id    nome          descricao

1     Lazer	        Despesas como: Passeios, Viagens, Jantares, Festas,...

2	    Alimentação	  Despesas como: Mercado, almoços rotineiros,...

3	    Educação	    Despesas como: Cursos, Escolas, Livros,...

4	    Transporte	  Despesas como: Transporte rotineiros, Ir ao trabalho, Ir à escola,...

5	    Casa	        Despesas como: Contas de Água, Luz, Internet,...

6	    Médica	      Despesas como: Remédios, Atendimentos emergenciais,...


Para testes em serviço local deve-se ter o node.js instalado, baixar os arquivos do repositório,
criar o banco de dados importando os arquivos ou excutando as querys contidas nos arquivos da pasta MySQL deste repositório.
Via terminal dentro da pasta dos arquivos do servidor deve-se executar o comando "npm run start" com tudo funcionando as Mensagens:

Running in http://localhost:80
Connected to the MySQL server.

Desta forma as APIs podem ser consumidas de modo local.


