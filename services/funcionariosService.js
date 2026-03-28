const { listarFuncionarios, adicionarFuncionario } = require("../database/funcDatabase")

function cadastrarFuncionario(funcionario) {
    if (
        !funcionario ||
        !funcionario.nome ||
        funcionario.idade <= 0 ||
        !funcionario.setor ||
        funcionario.salario <= 0
    ) {
        return false
    }

    adicionarFuncionario(funcionario);
    return true
}

function totalFuncionarios() {
    return listarFuncionarios()
}

module.exports = {
    totalFuncionarios,
    cadastrarFuncionario
};