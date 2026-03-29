let funcionarios = []

function adicionarFuncionario(func){
    funcionarios.push(func)
}

function listarFuncionarios(){
    return funcionarios
}

function limpar(){
    funcionarios = []
}

module.exports = {
    adicionarFuncionario,
    listarFuncionarios,
    limpar
}