import People from "./People";
import Address from "./Address";
export default class Speaker extends People {
    constructor(id, name, cpf, address, practice_area, mail) {
        super(id, name, cpf, address, mail);
        this.practice_area = practice_area;
    }
    getPractice_area() {
        return this.practice_area;
    }
    setPractice_area(value) {
        this.practice_area = value;
    }
}
