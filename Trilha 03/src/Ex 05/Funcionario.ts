abstract class Funcionario {
    constructor(private nome: string, private salario: number) {}

    getSalario(): number {
        return this.salario;
    }

    getNome(): string {
        return this.nome;
    }

    abstract calcularBonus(): number;
}

class Gerente extends Funcionario {
    calcularBonus(): number {
        return this.getSalario() * 0.1;
    }
}

class Operario extends Funcionario {
    calcularBonus(): number {
        return this.getSalario() * 0.05;
    }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
    funcionarios.forEach(funcionario => {
        const salarioFinal = funcionario.getSalario() + funcionario.calcularBonus();
        console.log(`${funcionario.getNome()} receberá R$ ${salarioFinal.toFixed(2)}`);
    });
}

const equipe: Funcionario[] = [
    new Gerente("Ana", 8000),
    new Operario("Carlos", 3000)
];

calcularSalarioComBonus(equipe);
