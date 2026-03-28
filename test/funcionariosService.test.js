const { totalFuncionarios, cadastrarFuncionario } = require("../services/funcionariosService");
const { limpar } = require("../database/funcDatabase");

beforeEach(() => {
  limpar();
});

describe("Sistema de Funcionários", () => {

  test("1. Banco começa vazio", () => {
    expect(totalFuncionarios().length).toBe(0);
  });

  test("2. Cadastrar funcionário válido", () => {
    const resultado = cadastrarFuncionario({
      nome: "João",
      idade: 25,
      setor: "TI",
      salario: 3000
    });

    expect(resultado).toBe(true);
  });

  test("3. Não cadastrar sem nome", () => {
    const resultado = cadastrarFuncionario({
      nome: "",
      idade: 25,
      setor: "TI",
      salario: 3000
    });

    expect(resultado).toBe(false);
  });

  test("4. Não cadastrar idade negativa", () => {
    const resultado = cadastrarFuncionario({
      nome: "João",
      idade: -1,
      setor: "TI",
      salario: 3000
    });

    expect(resultado).toBe(false);
  });

  test("5. Não cadastrar salário negativo", () => {
    const resultado = cadastrarFuncionario({
      nome: "João",
      idade: 25,
      setor: "TI",
      salario: -100
    });

    expect(resultado).toBe(false);
  });

  test("6. Não cadastrar setor vazio", () => {
    const resultado = cadastrarFuncionario({
      nome: "João",
      idade: 25,
      setor: "",
      salario: 3000
    });

    expect(resultado).toBe(false);
  });

  test("7. Adicionar 1 funcionário", () => {
    cadastrarFuncionario({
      nome: "Maria",
      idade: 30,
      setor: "RH",
      salario: 4000
    });

    expect(totalFuncionarios().length).toBe(1);
  });

  test("8. Adicionar vários funcionários", () => {
    cadastrarFuncionario({ nome: "A", idade: 20, setor: "TI", salario: 2000 });
    cadastrarFuncionario({ nome: "B", idade: 22, setor: "RH", salario: 2500 });

    expect(totalFuncionarios().length).toBe(2);
  });

  test("9. Dados do funcionário corretos", () => {
    cadastrarFuncionario({
      nome: "Carlos",
      idade: 28,
      setor: "Financeiro",
      salario: 3500
    });

    const lista = totalFuncionarios();

    expect(lista[0]).toEqual({
      nome: "Carlos",
      idade: 28,
      setor: "Financeiro",
      salario: 3500
    });
  });

  test("10. Banco limpa corretamente", () => {
    cadastrarFuncionario({
      nome: "João",
      idade: 25,
      setor: "TI",
      salario: 3000
    });

    limpar();

    expect(totalFuncionarios().length).toBe(0);
  });

});