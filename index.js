const express = require("express")
const mongoose = require("mongoose")

const tarefas_controller = require('./tarefas-controller')


console.log('mongodb+srv://'+process.env.DB_USER+':'+process.env.DB_PASSWORD+'@cluster0.3wr9sde.mongodb.net/?retryWrites=true&w=majority')

mongoose.connect('mongodb+srv://'+process.env.DB_USER+':'+process.env.DB_PASSWORD+'@cluster0.3wr9sde.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.Promise = global.Promise
try {
    let db = mongoose.connection
    db.on('errr', console.error.bind(console, 'erro de conexao no banco'))
} catch (e) {
    console.log(e)
}

const router = express.Router()

const app = express()

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
	res.send('teste oi')
})

router.post('/tarefas', tarefas_controller.cadastrartarefa)
router.get('/tarefas', tarefas_controller.listartarefas)
router.get('/tarefas/:id', tarefas_controller.buscartarefa)
router.put('/tarefas/:id', tarefas_controller.alterartarefa)
router.delete('/tarefas/:id', tarefas_controller.deletartarefa)

app.use('/', router)

let porta = process.env.PORT || 3000

app.listen(porta, () => {
	console.log("servidor em execucao na porta " + porta)
})

