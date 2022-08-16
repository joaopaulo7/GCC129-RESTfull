# GCC129-RESTfull

Atualmente hosteado em: https://gcc129-restfull.herokuapp.com/

<br>

## Como executar

É importante ter dependências express, mongoose e dotenv para executar o código.

Também é necesário a criação (já configurada caso não esteja consultando o código no repositório público) com as informações de PORT, DB_ADDR, DB_USER e DB_PASSWORD.

Este app utiliza o banco de dados em nuvem Moongoose com endereço em DB_ADDR, mas pode ser alterado.

<br>

## Intruções

<ul>
<li><b>Get /tarefas:</b> retorna uma lista com todas as tarefas.</li>

<li><b>Get /tarefas/{identificador}:</b> retorna a tarefa correspondente ao identificador.</li>

<li><b>Post /tarefas:</b>  inclui uma tarefa;os dados da tarefa devem ser passados no corpo da requisição HTTP.</li>

<li><b>Delete /tarefas/{identificador}:</b> exclui a tarefa correspondente ao identificador.</li>

<li><b>Put /tarefas/{identificador}:</b> altera os dados da tarefa correspondente ao identificador; os novos dados devem ser passados no corpo da requisição HTTP.</li>
</ul>
