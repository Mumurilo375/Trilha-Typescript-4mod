class Produto {
    public nome: string;
    private valor: number;
    public quantidade: number;

    constructor(nome:string, valor:number, quantidadeInicial: number) {
        this.nome = nome;
        this.valor = valor;
        this.quantidade = quantidadeInicial;
    }

    quantidadeEstoque(){
    let estoque = this.quantidade > 0 ? `Quantidade do estoque = ${this.quantidade}` : `Estoque está zerado!`
    console.log(estoque);
    }

    calcularValorEstoque(): void{
        let ValorEstoque = this.quantidade * this.valor;
        console.log(`A quantidade do produto ${this.nome}: ${ValorEstoque}`)
    }

}