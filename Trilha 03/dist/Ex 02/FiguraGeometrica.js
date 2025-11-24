"use strict";
class FiguraGeometrica {
}
class Circulo extends FiguraGeometrica {
    constructor(raio) {
        super();
        this.raio = raio;
    }
    calcularArea() {
        return Math.PI * (Math.pow(this.raio, 2));
    }
}
class Quadrado extends FiguraGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }
    calcularArea() {
        return this.lado * this.lado;
    }
}
class Triangulo extends FiguraGeometrica {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        return (this.base * this.altura) / 2;
    }
}
function apresentarAreas(figuras) {
    console.log("\n--- Calculando Áreas ---");
    figuras.forEach((figura, index) => {
        console.log(`Figura ${index + 1}: ${figura.calcularArea().toFixed(2)}`);
    });
}
const listaDeFiguras = [
    new Quadrado(10),
    new Circulo(5),
    new Triangulo(10, 20)
];
apresentarAreas(listaDeFiguras);
