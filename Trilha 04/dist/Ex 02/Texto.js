"use strict";
class Texto {
    constructor(titulo, conteudo) {
        this.titulo = titulo;
        this.conteudo = conteudo;
    }
    exibir() {
        return `Título: ${this.titulo}, Conteúdo: ${this.conteudo}`;
    }
}
const texto = new Texto("Aviso", "Entrega até sexta-feira.");
console.log(texto.exibir());
