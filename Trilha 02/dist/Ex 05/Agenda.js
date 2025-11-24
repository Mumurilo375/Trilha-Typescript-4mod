"use strict";
class Agenda {
    constructor() {
        this.compromissos = [];
    }
    adicionar(compromisso) {
        this.compromissos.push(compromisso);
    }
    listar() {
        console.log(this.compromissos);
    }
}
