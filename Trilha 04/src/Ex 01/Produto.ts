interface Produto {
    id: number;
    nome: string;
    preco: number;
}

class ItemLoja implements Produto {
    constructor(public id: number, public nome: string, public preco: number) {}
}

const item = new ItemLoja(1, "Caneta", 2.5);
console.log(item);
