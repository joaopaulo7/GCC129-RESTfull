var tarefas = require('./tarefas-model')

exports.listarTarefas = function (req, res) {
    tarefas.find({}, function (err, tarefas) {
        if (err) return next(err)
        return res.json(tarefas);
    })
}

exports.buscarTarefa = function (req, res) {
    tarefas.findById(req.params.id, function(err, tarefa){
        if (err) return next(err)
        return res.json(tarefa)
    })
}

exports.cadastrarTarefa = function (req, res) {
    let tarefa = new tarefas({
        descricao: req.body.descricao,
        prazo: req.body.prazo,
        completa: req.body.completa     
    })
    tarefa.save(function (err){
        if (err) {
            return next(err)
        }
    })
    res.send('tarefa cadastrada com sucesso.')
}

exports.alterarTarefa = function (req, res) {
    tarefas.findById(req.params.id, function(err, tarefa){
        if (err) return next(err)
        tarefa.updateOne(req.body, function (err){
		if (err) {
		    return next(err)
		}
    	})
    })
    res.send('tarefa alterada com sucesso.')
}

exports.deletarTarefa = function (req, res) {
    tarefas.findById(req.params.id, function(err, tarefa){
        if (err) return next(err)
        tarefa.deleteOne( function (err){
		if (err) {
		    return next(err)
		}
    	})
    })
    res.send('tarefa deletada com sucesso.')
}
