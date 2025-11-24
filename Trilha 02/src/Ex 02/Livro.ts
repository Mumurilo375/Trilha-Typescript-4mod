class Livro {
    titulo: string;
    autor: string;
    paginas: number;
    lido: boolean;

    constructor(titulo:string, autor: string, paginas: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = false;
    }

    marcarComoLido(): void {
        if (this.lido === true) {
            console.log(`O livro "${this.titulo}" já estava marcado como lido.`); return;
        }
        this.lido = true;
        console.log(`Voce acabou de ler "${this.titulo}".`);
    }

    detalhes(): void {
        const status = this.lido ? "Lido ✅" : "Não lido ❌";
        console.log(`Livro: ${this.titulo} | Autor: ${this.autor} | Status: ${status}`);
    }

}

const meuLivro = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1200);

meuLivro.detalhes(); 

meuLivro.marcarComoLido();

meuLivro.detalhes();

meuLivro.marcarComoLido();