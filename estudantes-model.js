const mongoose = require('mongoose')
const Schema = mongoose.Schema

let EstudanteSchema = new Schema({
    descricao: {type: String, required: true},
    prazo: {type: Date, required: false},
    completa: {type: Boolean, required: false}
})

module.exports = mongoose.model('Estudantes', EstudanteSchema)
