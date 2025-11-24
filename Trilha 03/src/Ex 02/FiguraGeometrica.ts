abstract class FiguraGeometrica{

    abstract calcularArea(): number;
}

class Circulo extends FiguraGeometrica{
    raio: number;

    constructor(raio:number){
        super();
        this.raio = raio;
    }

    calcularArea(): number {
        return Math.PI * (this.raio ** 2);
    }
}

class Quadrado extends FiguraGeometrica{
    lado: number;

    constructor(lado: number){
        super();
        this.lado = lado;
    }

    calcularArea(): number {
        return this.lado * this.lado;
    }
}

class Triangulo extends FiguraGeometrica{
    base: number;
    altura: number;

    constructor(base:number, altura:number){
        super();
        this.base = base;
        this.altura = altura;

    }

    calcularArea(): number {
            return (this.base * this.altura) / 2;
        }

}







function apresentarAreas(figuras: FiguraGeometrica[]): void {
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