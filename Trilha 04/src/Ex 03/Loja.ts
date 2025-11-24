interface ProdutoLoja {
    codigo: number;
    nome: string;
}

class Loja {
    constructor(private produtos: ProdutoLoja[]) {}

    buscarProdutoPorCodigo(codigo: number): ProdutoLoja | undefined {
        return this.produtos.find(produto => produto.codigo === codigo);
    }
}

const loja = new Loja([
    { codigo: 1, nome: "Mouse" },
    { codigo: 2, nome: "Teclado" }
]);

console.log(loja.buscarProdutoPorCodigo(2));
console.log(loja.buscarProdutoPorCodigo(3));
