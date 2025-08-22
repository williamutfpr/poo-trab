import People from "./People.js";
import Endereco from "./Endereco.js";
export default class Organizador extends People {
    constructor(id, name, cpf, endereco, setor) {
        super(id, name, cpf, endereco);
        this.setor = setor;
    }
    getSetor() {
        return this.setor;
    }
}
