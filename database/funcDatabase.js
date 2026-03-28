let funcionarios = [];

function adicionarFuncionario(funcionario) {
    funcionarios.push(funcionario);
}

function listarFuncionarios() {
    return funcionarios;
}

function limpar() {
    funcionarios = [];
}

module.exports = {
    adicionarFuncionario,
    listarFuncionarios,
    limpar
};