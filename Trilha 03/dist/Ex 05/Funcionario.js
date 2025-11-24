"use strict";
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    getSalario() {
        return this.salario;
    }
    getNome() {
        return this.nome;
    }
}
class Gerente extends Funcionario {
    calcularBonus() {
        return this.getSalario() * 0.1;
    }
}
class Operario extends Funcionario {
    calcularBonus() {
        return this.getSalario() * 0.05;
    }
}
function calcularSalarioComBonus(funcionarios) {
    funcionarios.forEach(funcionario => {
        const salarioFinal = funcionario.getSalario() + funcionario.calcularBonus();
        console.log(`${funcionario.getNome()} receberá R$ ${salarioFinal.toFixed(2)}`);
    });
}
const equipe = [
    new Gerente("Ana", 8000),
    new Operario("Carlos", 3000)
];
calcularSalarioComBonus(equipe);
