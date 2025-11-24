"use strict";
class Veiculo {
    mover() {
        console.log("O veículo está se movendo");
    }
}
class Carro extends Veiculo {
    mover() {
        console.log("O carro está dirigindo");
    }
}
class Bicicleta extends Veiculo {
    mover() {
        console.log("A bicicleta está pedalando");
    }
}
const meuCarro = new Carro();
const minhaBike = new Bicicleta();
meuCarro.mover();
minhaBike.mover();
