var tarefas = require('./tarefas-model')

exports.listartarefas = function (req, res) {
    tarefas.find({}, function (err, tarefas) {
        if (err) return next(err)
        return res.json(tarefas);
    })
}

exports.buscartarefa = function (req, res) {
    tarefas.findById(req.params.id, function(err, tarefa){
        if (err) return next(err)
        return res.json(tarefa)
    })
}

exports.cadastrartarefa = function (req, res) {
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
    res.send('tarefa cadastrado com sucesso.')
}

exports.alterartarefa = function (req, res) {
    tarefas.findById(req.params.id, function(err, tarefa){
        if (err) return next(err)
        tarefa.updateOne(req.body, function (err){
		if (err) {
		    return next(err)
		}
    	})
    })
    res.send('tarefa alterado com sucesso.')
}

exports.deletartarefa = function (req, res) {
    tarefas.findById(req.params.id, function(err, tarefa){
        if (err) return next(err)
        tarefa.deleteOne( function (err){
		if (err) {
		    return next(err)
		}
    	})
    })
    res.send('tarefa deletado com sucesso.')
}
