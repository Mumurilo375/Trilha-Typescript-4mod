"use strict";
class Animal {
    constructor(energiaInicial = 50) {
        this.energia = energiaInicial;
    }
    gastarEnergia(valor) {
        this.energia = Math.max(0, this.energia - valor);
    }
    ganharEnergia(valor) {
        this.energia += valor;
    }
    comer() {
        this.ganharEnergia(5);
        console.log("Animal comeu e ganhou energia.");
    }
    statusEnergia() {
        console.log(`Energia atual: ${this.energia}`);
    }
}
class Leao extends Animal {
    comer() {
        this.gastarEnergia(15);
        console.log("Leão caçou e gastou energia.");
        this.ganharEnergia(25);
        console.log("Leão comeu a presa e recuperou energia.");
    }
}
class Passaro extends Animal {
    comer() {
        this.ganharEnergia(10);
        console.log("Pássaro se alimentou e ganhou energia.");
    }
}
function alimentarAnimal(animal) {
    animal.comer();
    animal.statusEnergia();
}
const animais = [new Leao(60), new Passaro(30)];
animais.forEach(alimentarAnimal);
