"use strict";
class Produto {
    constructor(nome, valor, quantidadeInicial) {
        this.nome = nome;
        this.valor = valor;
        this.quantidade = quantidadeInicial;
    }
    quantidadeEstoque() {
        let estoque = this.quantidade > 0 ? `Quantidade do estoque = ${this.quantidade}` : `Estoque está zerado!`;
        console.log(estoque);
    }
    calcularValorEstoque() {
        let ValorEstoque = this.quantidade * this.valor;
        console.log(`A quantidade do produto ${this.nome}: ${ValorEstoque}`);
    }
}
