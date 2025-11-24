"use strict";
class ContaBancaria {
    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial > 0 ? saldoInicial : 0;
    }
    depositar(valor) {
        if (valor <= 0) {
            console.error("Depósito inválido: O valor deve ser positivo.");
            return;
        }
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
    }
    sacar(valor) {
        if (valor <= 0) {
            console.error("Saque inválido.");
            return;
        }
        if (valor > this.saldo) {
            console.error(`Saldo insuficiente para saque de R$${valor}.`);
            return;
        }
        // '${}' para indicar a variavel
        this.saldo -= valor;
        console.log(`Saque de R$${valor} realizado. Saldo restante: R$${this.saldo}`);
    }
    consultarSaldo() {
        return this.saldo;
    }
}
const minhaConta = new ContaBancaria("Juscelino", 100);
minhaConta.depositar(50);
minhaConta.sacar(200);
minhaConta.sacar(50);
