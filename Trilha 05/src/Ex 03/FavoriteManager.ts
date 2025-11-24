abstract class FavoriteManager {
    abstract addFavorite(item: string): void;
    abstract getFavorites(): string[];
}

class MoviesFavoriteManager extends FavoriteManager {
    private filmes: Set<string> = new Set();

    addFavorite(item: string): void {
        this.filmes.add(item);
    }

    getFavorites(): string[] {
        return Array.from(this.filmes).sort();
    }
}

class BooksFavoriteManager extends FavoriteManager {
    private livros: string[] = [];

    addFavorite(item: string): void {
        this.livros.unshift(item);
    }

    getFavorites(): string[] {
        return [...this.livros];
    }
}

const filmes = new MoviesFavoriteManager();
filmes.addFavorite("Interstellar");
filmes.addFavorite("Matrix");
filmes.addFavorite("Interstellar");

const livros = new BooksFavoriteManager();
livros.addFavorite("Duna");
livros.addFavorite("Fundação");

console.log(filmes.getFavorites());
console.log(livros.getFavorites());
