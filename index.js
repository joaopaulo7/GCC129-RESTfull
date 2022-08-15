const express = require("express")
const mongoose = require("mongoose")

const estudantes_controller = require('./estudantes-controller')


mongoose.connect('mongodb+srv://joao:RgocJQ5fJsWbs3aZ@cluster0.3wr9sde.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
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

router.post('/estudantes', estudantes_controller.cadastrarEstudante)
router.get('/estudantes', estudantes_controller.listarEstudantes)
router.get('/estudantes/:id', estudantes_controller.buscarEstudante)
router.put('/estudantes/:id', estudantes_controller.alterarEstudante)
router.delete('/estudantes/:id', estudantes_controller.deletarEstudante)

app.use('/', router)

let porta = process.env.PORT || 3000

app.listen(porta, () => {
	console.log("servidor em execucao na porta " + porta)
})

