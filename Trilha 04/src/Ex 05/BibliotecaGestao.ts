interface LivroBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;
}

class BibliotecaGestao {
    constructor(private livros: LivroBiblioteca[]) {}

    filtrarPorGenero(genero: string): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.genero === genero);
    }

    buscarPorAutor(autor: string): LivroBiblioteca[] {
        return this.livros.filter(livro => livro.autor === autor);
    }

    obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
        return this.livros
            .filter(livro => livro.disponivel)
            .slice()
            .sort((a, b) => a.titulo.localeCompare(b.titulo));
    }
}

const gestao = new BibliotecaGestao([
    { titulo: "O Hobbit", autor: "Tolkien", genero: "Fantasia", disponivel: true },
    { titulo: "Duna", autor: "Frank Herbert", genero: "Ficção", disponivel: false },
    { titulo: "Neuromancer", autor: "William Gibson", genero: "Ficção", disponivel: true }
]);

console.log(gestao.filtrarPorGenero("Ficção"));
console.log(gestao.buscarPorAutor("Tolkien"));
console.log(gestao.obterLivrosDisponiveisOrdenados());
