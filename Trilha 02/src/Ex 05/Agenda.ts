class Agenda {
    compromissos: string[];

    constructor() {
        this.compromissos = [];
    }

    adicionar(compromisso: string){
        this.compromissos.push(compromisso)
    }

    listar(){
        console.log(this.compromissos)
    }

}