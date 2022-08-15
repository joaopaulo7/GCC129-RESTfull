const mongoose = require('mongoose')
const Schema = mongoose.Schema

let EstudanteSchema = new Schema({
    nome: {type: String, required: true},
    matricula: {type: Number, required: false},
    integralizado: {type: Boolean, required: false}
})

module.exports = mongoose.model('Estudantes', EstudanteSchema)
