import People from "./People.js";
import Endereco from "./Endereco.js";
export default class Palestrante extends People {
    constructor(id, name, cpf, endereco, tema) {
        super(id, name, cpf, endereco);
        this.tema = tema;
    }
    getTema() {
        return this.tema;
    }
}
