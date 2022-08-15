//imports necessários
const express = require("express")
const mongoose = require("mongoose")
require('dotenv').config()

//import dos controllers
const tarefas_controller = require('./tarefas-controller')

//Conexão com o BD (usando variávies do ambiente).
// Usamos variáveis de ambiente para não expor o login do DB em repositórios públicos.
mongoose.connect('mongodb+srv://'+process.env.DB_USER+':'+process.env.DB_PASSWORD+
'@'+process.env.DB_ADDR+'.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})

mongoose.Promise = global.Promise
try {
    let db = mongoose.connection
    db.on('errr', console.error.bind(console, 'erro de conexao no banco'))
} catch (e) {
    console.log(e)
}


//criação dos contorles express
const router = express.Router()
const app = express()

//configuração do express
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//escreve uma tela de 'boas vindas' na raiz do serviço
app.get('/', (req, res) => {
	res.send('REST tarefas. por favor, faça requisições no /tarefas')
})

//define as rotas dos serviços REST utilizando o express router
router.post('/tarefas', tarefas_controller.cadastrarTarefa)
router.get('/tarefas', tarefas_controller.listarTarefas)
router.get('/tarefas/:id', tarefas_controller.buscarTarefa)
router.put('/tarefas/:id', tarefas_controller.alterarTarefa)
router.delete('/tarefas/:id', tarefas_controller.deletarTarefa)
app.use('/', router)

//define porta (prioridade à do arquivo de ambiente)
let porta = process.env.PORT || 3000

//começa o serviço na porta dada
app.listen(porta, () => {
	console.log("servidor em execucao na porta " + porta)
})

