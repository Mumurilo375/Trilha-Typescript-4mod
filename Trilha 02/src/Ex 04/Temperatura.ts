class Temperatura {
    public valorCelsius: number;

    constructor(valorC: number) {
        this.valorCelsius = valorC;
    }

    paraFahrenheit(): number {
        return (this.valorCelsius * 1.8) + 32;
    }

    paraKelvin(): number {
        return this.valorCelsius + 273.15;
    }
}

const tempUm = new Temperatura(100);
console.log(`A temperatura para Fahrenheit é: ${tempUm.paraFahrenheit()}`)
console.log(`A temperatura para Kelvin é: ${tempUm.paraKelvin()}`)