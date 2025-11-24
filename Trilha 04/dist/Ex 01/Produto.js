"use strict";
class ItemLoja {
    constructor(id, nome, preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
}
const item = new ItemLoja(1, "Caneta", 2.5);
console.log(item);
