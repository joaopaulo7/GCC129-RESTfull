//imports necessários
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//define o modelo da entidade Tarefa a ser usada
// (id definido automaticamente no DB)
let TarefaSchema = new Schema({
    descricao: {type: String, required: true},
    prazo: {type: Date, required: false},
    completa: {type: Boolean, required: false}
})

//cria a classe de modelo Tarefa baseado na entidade do DB
module.exports = mongoose.model('Tarefa', TarefaSchema)
