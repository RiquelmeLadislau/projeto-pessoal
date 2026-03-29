const { cadastrarFuncionario, totalFuncionarios } = require("../services/funcionariosService")

function criarFuncionario(req){
    const sucesso = cadastrarFuncionario(req)

    if (!sucesso){
        return {
            status: 400,
            mensagem: "Dados inválidos"
        }
    }

    return {
        status: 201,
        mensagem: "Funcionário cadastrado com sucesso"
    }
}

function listar(){
    return {
        status: 200,
        dados: totalFuncionarios()
    }
}

module.exports = {
    criarFuncionario,
    listar
}