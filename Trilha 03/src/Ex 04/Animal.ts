class Animal {
    private energia: number;

    constructor(energiaInicial: number = 50) {
        this.energia = energiaInicial;
    }

    protected gastarEnergia(valor: number): void {
        this.energia = Math.max(0, this.energia - valor);
    }

    protected ganharEnergia(valor: number): void {
        this.energia += valor;
    }

    comer(): void {
        this.ganharEnergia(5);
        console.log("Animal comeu e ganhou energia.");
    }

    statusEnergia(): void {
        console.log(`Energia atual: ${this.energia}`);
    }
}

class Leao extends Animal {
    comer(): void {
        this.gastarEnergia(15);
        console.log("Leão caçou e gastou energia.");
        this.ganharEnergia(25);
        console.log("Leão comeu a presa e recuperou energia.");
    }
}

class Passaro extends Animal {
    comer(): void {
        this.ganharEnergia(10);
        console.log("Pássaro se alimentou e ganhou energia.");
    }
}

function alimentarAnimal(animal: Animal): void {
    animal.comer();
    animal.statusEnergia();
}

const animais: Animal[] = [new Leao(60), new Passaro(30)];

animais.forEach(alimentarAnimal);
