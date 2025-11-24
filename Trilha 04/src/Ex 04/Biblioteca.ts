interface Livro {
    titulo: string;
    autor: string;
    disponivel: boolean;
}

class Biblioteca {
    constructor(private livros: Livro[]) {}

    buscarLivrosDisponiveis(): Livro[] {
        return this.livros.filter(livro => livro.disponivel);
    }
}

const biblioteca = new Biblioteca([
    { titulo: "Clean Code", autor: "Robert C. Martin", disponivel: true },
    { titulo: "Refactoring", autor: "Martin Fowler", disponivel: false }
]);

console.log(biblioteca.buscarLivrosDisponiveis());
