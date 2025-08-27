import People from "./People";
import Address from "./Address";
export default class Organizer extends People {
    constructor(id, name, cpf, endereco, sector, mail) {
        super(id, name, cpf, endereco, mail);
        this.sector = sector;
    }
    getSector() {
        return this.sector;
    }
    setSector(value) {
        this.sector = value;
    }
}
