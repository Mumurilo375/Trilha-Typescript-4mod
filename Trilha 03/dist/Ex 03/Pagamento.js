"use strict";
class Pagamento {
}
class PagamentoCartao extends Pagamento {
    constructor(numeroCartao) {
        super();
        this.numeroCartao = numeroCartao;
    }
    validarNumero() {
        return /^\d{16}$/.test(this.numeroCartao);
    }
    processar() {
        if (!this.validarNumero()) {
            console.log("Cartão inválido. Pagamento não processado.");
            return;
        }
        const finalCartao = this.numeroCartao.slice(-4);
        console.log(`Pagamento no cartão final ${finalCartao} processado com sucesso.`);
    }
}
class PagamentoBoleto extends Pagamento {
    constructor(valor) {
        super();
        this.valor = valor;
    }
    gerarCodigoBarras() {
        const sequencia = Math.random().toString().slice(2, 14);
        const codigo = (sequencia + "000000000000").slice(0, 12);
        return `23790${codigo}`;
    }
    processar() {
        const codigo = this.gerarCodigoBarras();
        console.log(`Boleto de R$ ${this.valor.toFixed(2)} gerado: ${codigo}`);
    }
}
function processarPagamento(pagamento) {
    pagamento.processar();
}
const pagamentos = [
    new PagamentoCartao("1234123412341234"),
    new PagamentoCartao("9999"),
    new PagamentoBoleto(199.9)
];
pagamentos.forEach(processarPagamento);
