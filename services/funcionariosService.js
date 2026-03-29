const { listarFuncionarios, adicionarFuncionario } = require("../database/funcDatabase")

function cadastrarFuncionario(funcionario){
    if (!funcionario) return false

    const { nome, idade, setor, salario } = funcionario

    if (!nome || nome.trim() === "") return false
    if (idade <= 0) return false
    if (salario <= 0) return false
    if (!setor || setor.trim() === "") return false

    adicionarFuncionario({
        nome,
        idade,
        setor,
        salario
    })

    return true
}

function totalFuncionarios(){
    return listarFuncionarios()
}

module.exports = {
    cadastrarFuncionario,
    totalFuncionarios
}