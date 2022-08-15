const express = require("express")
const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://joao:KUDqRH6CJsuYRJX@cluster0.3wr9sde.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.Promise = global.Promise
try {
    let db = mongoose.connection
    db.on('errr', console.error.bind(console, 'erro de conexao no banco'))
} catch (e) {
    console.log(e)
}


const app = express()

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
	res.send('teste oi')
})

let porta = process.env.PORT || 3000

app.listen(porta, () => {
	console.log("servidor em execucao na porta " + porta)
})

