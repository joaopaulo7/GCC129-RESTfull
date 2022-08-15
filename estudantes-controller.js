var Estudantes = require('./estudantes-model')

exports.listarEstudantes = function (req, res) {
    Estudantes.find({}, function (err, estudantes) {
        if (err) return next(err)
        return res.json(estudantes);
    })
}

exports.buscarEstudante = function (req, res) {
    Estudantes.findById(req.params.id, function(err, estudante){
        if (err) return next(err)
        return res.json(estudante)
    })
}

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

exports.alterarEstudante = function (req, res) {
    Estudantes.findById(req.params.id, function(err, estudante){
        if (err) return next(err)
        estudante.updateOne(req.body, function (err){
		if (err) {
		    return next(err)
		}
    	})
    })
    res.send('estudante alterado com sucesso.')
}

exports.deletarEstudante = function (req, res) {
    Estudantes.findById(req.params.id, function(err, estudante){
        if (err) return next(err)
        estudante.deleteOne( function (err){
		if (err) {
		    return next(err)
		}
    	})
    })
    res.send('estudante deletado com sucesso.')
}
