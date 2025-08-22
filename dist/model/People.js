import Endereco from "./Endereco.js";
export default class People {
    constructor(id, name, cpf, endereco) {
        this.id = id;
        this.name = name;
        this.cpf = cpf;
        this.endereco = endereco;
    }
    getName() {
        return this.name;
    }
    getCpf() {
        return this.cpf;
    }
    getEndereco() {
        return this.endereco.getEnderecoCompleto();
    }
}
