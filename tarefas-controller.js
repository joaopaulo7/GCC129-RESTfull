//importa a classe de modelo Tarefa
var tarefas = require('./tarefas-model')

//As funções abaixo são definidas e exportadas para o Index.js 

//Busca no DB e lista todas tarefas
exports.listarTarefas = function (req, res) {
    tarefas.find({}, function (err, tarefas) {
        if (err) return next(err)
        return res.json(tarefas);
    })
}

//Busca no DB por ID e lista a tarefa correspondente
exports.buscarTarefa = function (req, res) {
    tarefas.findById(req.params.id, function(err, tarefa){
        if (err) return next(err)
        return res.json(tarefa)
    })
}

//Cria um objeto tarefa com os dados dados na requisição e envia pro DB
exports.cadastrarTarefa = function (req, res) {
    if(req.body.descricao == null)
    {
        res.send("Descrição vazia")
        throw(("Descrição vazia")
    }
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

//Busca uma tarefa por ID no DB, ao encontar, faz as alterações necessárias
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

//Busca uma tarefa por ID no DB, ao encontar, deleta ela do DB
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
