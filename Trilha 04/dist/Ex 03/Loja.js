"use strict";
class Loja {
    constructor(produtos) {
        this.produtos = produtos;
    }
    buscarProdutoPorCodigo(codigo) {
        return this.produtos.find(produto => produto.codigo === codigo);
    }
}
const loja = new Loja([
    { codigo: 1, nome: "Mouse" },
    { codigo: 2, nome: "Teclado" }
]);
console.log(loja.buscarProdutoPorCodigo(2));
console.log(loja.buscarProdutoPorCodigo(3));
