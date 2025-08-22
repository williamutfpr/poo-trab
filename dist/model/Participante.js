import People from "./People.js";
import Endereco from "./Endereco.js";
export default class Participante extends People {
    constructor(id, name, cpf, endereco, inscricaoId) {
        super(id, name, cpf, endereco);
        this.inscricaoId = inscricaoId;
    }
    getInscricaoId() {
        return this.inscricaoId;
    }
}
