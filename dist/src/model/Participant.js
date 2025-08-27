import People from "./People";
import Address from "./Address";
export default class Participant extends People {
    constructor(id, name, cpf, endereco, enrollmentId, mail) {
        super(id, name, cpf, endereco, mail);
        this.enrollmentId = enrollmentId;
    }
    getInscricaoId() {
        return this.enrollmentId;
    }
}
