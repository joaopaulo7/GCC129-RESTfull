var Estudantes = require('./estudantes-model')

exports.cadastrarEstudante = function (req, res) {
    let estudante = new Estudantes({
        nome: req.body.nome,
        matricula: req.body.matricula,
        integralizado: req.body.integralizado     
    })
    estudante.save(function (err){
        if (err) {
            return next(err)
        }
    })
    res.send('estudante cadastrado com sucesso.')
}
