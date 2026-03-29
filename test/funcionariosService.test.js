const { criarFuncionario, listar } = require("../controllers/funcionariosController")
const { limpar } = require("../database/funcDatabase")

beforeEach(() => {
    limpar()
})

describe("Sistema de Funcionários", () => {

    test("1. Banco começa vazio", () => {
        expect(listar().dados.length).toBe(0)
    })

    test("2. Cadastrar funcionário válido", () => {
        const res = criarFuncionario({
            nome: "João",
            idade: 25,
            setor: "TI",
            salario: 2000
        })

        expect(res.status).toBe(201)
    })

    test("3. Não cadastrar sem nome", () => {
        const res = criarFuncionario({
            nome: "",
            idade: 25,
            setor: "TI",
            salario: 2000
        })

        expect(res.status).toBe(400)
    })

    test("4. Não cadastrar idade negativa", () => {
        const res = criarFuncionario({
            nome: "João",
            idade: -1,
            setor: "TI",
            salario: 2000
        })

        expect(res.status).toBe(400)
    })

    test("5. Não cadastrar salário negativo", () => {
        const res = criarFuncionario({
            nome: "João",
            idade: 25,
            setor: "TI",
            salario: -100
        })

        expect(res.status).toBe(400)
    })

    test("6. Não cadastrar setor vazio", () => {
        const res = criarFuncionario({
            nome: "João",
            idade: 25,
            setor: "",
            salario: 2000
        })

        expect(res.status).toBe(400)
    })

    test("7. Adicionar 1 funcionário", () => {
        criarFuncionario({
            nome: "Ana",
            idade: 22,
            setor: "RH",
            salario: 2500
        })

        expect(listar().dados.length).toBe(1)
    })

    test("8. Adicionar vários funcionários", () => {
        criarFuncionario({
            nome: "A",
            idade: 20,
            setor: "TI",
            salario: 2000
        })

        criarFuncionario({
            nome: "B",
            idade: 22,
            setor: "RH",
            salario: 2500
        })

        expect(listar().dados.length).toBe(2)
    })

    test("9. Dados do funcionário corretos", () => {
        criarFuncionario({
            nome: "Carlos",
            idade: 28,
            setor: "Financeiro",
            salario: 3500
        })

        const lista = listar().dados

        expect(lista[0]).toEqual({
            nome: "Carlos",
            idade: 28,
            setor: "Financeiro",
            salario: 3500
        })
    })

    test("10. Banco limpa corretamente", () => {
        criarFuncionario({
            nome: "Teste",
            idade: 30,
            setor: "TI",
            salario: 3000
        })

        limpar()

        expect(listar().dados.length).toBe(0)
    })
})